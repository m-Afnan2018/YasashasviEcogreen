import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

// MS Word always puts a rich "text/html" flavor on the clipboard alongside
// plain text, but that HTML is wrapped in Office-only markup (mso-* styles,
// conditional comments, w:/o:/v: namespaced tags, and a non-standard
// "mso-list" encoding instead of real <ul>/<ol>). A plain <textarea> only
// ever sees the text/plain flavor, which is why paste loses all formatting.
const turndownService = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});
turndownService.use(gfm);

function hasStyle(node: Node, pattern: RegExp): boolean {
  if (!(node instanceof HTMLElement)) return false;
  return pattern.test(node.getAttribute("style") || "");
}

turndownService.addRule("wordBold", {
  filter: (node) => node.nodeName === "SPAN" && hasStyle(node, /font-weight:\s*(bold|[6-9]00)/i),
  replacement: (content) => (content.trim() ? `**${content}**` : content),
});

turndownService.addRule("wordItalic", {
  filter: (node) => node.nodeName === "SPAN" && hasStyle(node, /font-style:\s*italic/i),
  replacement: (content) => (content.trim() ? `_${content}_` : content),
});

turndownService.addRule("underline", {
  filter: (node) => node.nodeName === "U" || hasStyle(node, /text-decoration:\s*underline/i),
  replacement: (content) => (content.trim() ? `<u>${content}</u>` : content),
});

function stripWordCruft(html: string): string {
  return html
    .replace(/<!DOCTYPE[^>]*>/gi, "")
    // Hidden conditional comments (<!--[if ...]>...<![endif]-->) hide their
    // content from browsers, so drop the markers *and* the content.
    .replace(/<!--\[if[\s\S]*?<!\[endif\]-->/gi, "")
    // "Downlevel-revealed" conditional comments (<![if ...]>...<![endif]>) -
    // e.g. Word's bullet/number simulation for list paragraphs - are meant
    // to stay visible outside Word, so only strip the marker tags.
    .replace(/<!\[if[^\]]*\]>/gi, "")
    .replace(/<!\[endif\]>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<xml[\s\S]*?<\/xml>/gi, "")
    .replace(/<\/?(html|head|body|meta|link|title)\b[^>]*>/gi, "")
    // Office namespaced tags: o:p, w:sdt, v:shape, m:oMath, etc.
    .replace(/<\/?[a-z]+:[a-z0-9]+[^>]*>/gi, "");
}

function stripComments(root: Node) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_COMMENT);
  const comments: Comment[] = [];
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    comments.push(node as Comment);
  }
  comments.forEach((comment) => comment.parentNode?.removeChild(comment));
}

const BULLET_MARKER = /^[•◦▪‣§·o]$/;
const ORDERED_MARKER = /^\(?[a-zA-Z0-9]{1,4}[.)]$/;

/** Word encodes list items as plain <p style="mso-list:l0 level1 ..."> paragraphs
 * with a fake bullet/number character as their first run, instead of real
 * <ul>/<ol>/<li> markup. Rebuild real nested lists from that encoding. */
function rewriteWordLists(root: HTMLElement) {
  type OpenList = { el: HTMLOListElement | HTMLUListElement; level: number; listId: string };
  const stack: OpenList[] = [];

  // Pop back to (and including) the deepest list that this item continues:
  // deeper levels always end, and a same-level list with a *different* id
  // means a new list started (e.g. a numbered list right after a bulleted
  // one) rather than a continuation of the previous one.
  const closeTo = (level: number, listId: string) => {
    while (stack.length) {
      const top = stack[stack.length - 1];
      if (top.level > level || (top.level === level && top.listId !== listId)) {
        stack.pop();
      } else {
        break;
      }
    }
  };

  for (const p of Array.from(root.querySelectorAll("p"))) {
    const style = p.getAttribute("style") || "";
    const match = style.match(/mso-list:\s*(l\d+)\s+level(\d+)/i);
    if (!match) {
      stack.length = 0;
      continue;
    }
    const listId = match[1];
    const level = parseInt(match[2], 10);

    const marker = p.firstElementChild as HTMLElement | null;
    const markerText = (marker?.textContent || "").trim();
    const isOrdered = ORDERED_MARKER.test(markerText) && !BULLET_MARKER.test(markerText);
    if (marker && markerText.length > 0 && markerText.length <= 4) marker.remove();

    closeTo(level, listId);
    let top = stack[stack.length - 1];
    if (!top || top.level < level) {
      const list = document.createElement(isOrdered ? "ol" : "ul");
      const parentLi = top?.el.lastElementChild;
      if (parentLi) parentLi.appendChild(list);
      else p.before(list);
      stack.push({ el: list, level, listId });
      top = stack[stack.length - 1];
    }

    const li = document.createElement("li");
    while (p.firstChild) li.appendChild(p.firstChild);
    top.el.appendChild(li);
    p.remove();
  }
}

/** Convert HTML pulled from the clipboard (Word, Google Docs, a web page, ...)
 * into the Markdown this editor stores. */
export function htmlToMarkdown(html: string): string {
  const container = document.createElement("div");
  container.innerHTML = stripWordCruft(html);
  stripComments(container);
  rewriteWordLists(container);
  return turndownService.turndown(container).replace(/\n{3,}/g, "\n\n").trim();
}

/** Reads the richest available flavor off a paste event's clipboard data and
 * returns Markdown for it, or null if there's no HTML to convert (caller
 * should fall back to the default plain-text paste in that case). */
export function markdownFromClipboard(clipboardData: DataTransfer): string | null {
  const html = clipboardData.getData("text/html");
  if (!html || !html.trim()) return null;
  try {
    const markdown = htmlToMarkdown(html);
    return markdown || null;
  } catch {
    return null;
  }
}
