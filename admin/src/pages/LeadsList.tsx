import { Fragment, useEffect, useMemo, useState } from "react";
import { Inbox, Trash2, Filter, Search, Download, ChevronUp, ChevronDown, StickyNote } from "lucide-react";
import { api, API_URL, type Lead } from "../api/client";
import styles from "./LeadsList.module.css";

const badgeClass: Record<Lead["status"], string> = {
  new: styles.badgeNew,
  contacted: styles.badgeContacted,
  closed: styles.badgeClosed,
};

type SortKey = "name" | "createdAt";

export default function LeadsList() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("createdAt");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState("");
  const [savingNote, setSavingNote] = useState(false);

  function load(filter: string) {
    setLoading(true);
    const q = filter === "all" ? "" : `?status=${filter}`;
    api
      .get<{ leads: Lead[] }>(`/admin/leads${q}`)
      .then((res) => setLeads(res.leads))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    load(statusFilter);
    setSelected(new Set());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter]);

  const visibleLeads = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = leads;
    if (q) {
      list = list.filter((l) =>
        [l.name, l.email, l.company, l.product].some((field) =>
          field?.toLowerCase().includes(q)
        )
      );
    }
    const sorted = [...list].sort((a, b) => {
      const av = sortKey === "name" ? a.name.toLowerCase() : a.createdAt;
      const bv = sortKey === "name" ? b.name.toLowerCase() : b.createdAt;
      const cmp = av < bv ? -1 : av > bv ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });
    return sorted;
  }, [leads, query, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(key === "name" ? "asc" : "desc");
    }
  }

  function toggleSelectAll() {
    if (selected.size === visibleLeads.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(visibleLeads.map((l) => l._id)));
    }
  }

  function toggleSelect(id: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  async function updateStatus(id: string, status: Lead["status"]) {
    const { lead } = await api.patch<{ lead: Lead }>(`/admin/leads/${id}`, { status });
    setLeads((prev) => prev.map((l) => (l._id === id ? lead : l)));
  }

  async function remove(id: string) {
    if (!confirm("Delete this lead? This cannot be undone.")) return;
    await api.delete(`/admin/leads/${id}`);
    setLeads((prev) => prev.filter((l) => l._id !== id));
  }

  async function bulkUpdateStatus(status: Lead["status"]) {
    const ids = Array.from(selected);
    await api.patch("/admin/leads/bulk", { ids, status });
    setLeads((prev) => prev.map((l) => (ids.includes(l._id) ? { ...l, status } : l)));
    setSelected(new Set());
  }

  async function bulkDelete() {
    const ids = Array.from(selected);
    if (!confirm(`Delete ${ids.length} lead${ids.length === 1 ? "" : "s"}? This cannot be undone.`)) {
      return;
    }
    await api.delete("/admin/leads/bulk", { ids });
    setLeads((prev) => prev.filter((l) => !ids.includes(l._id)));
    setSelected(new Set());
  }

  function openNotes(lead: Lead) {
    if (expandedId === lead._id) {
      setExpandedId(null);
      return;
    }
    setExpandedId(lead._id);
    setNoteDraft(lead.notes ?? "");
  }

  async function saveNote(id: string) {
    setSavingNote(true);
    try {
      const { lead } = await api.patch<{ lead: Lead }>(`/admin/leads/${id}`, { notes: noteDraft });
      setLeads((prev) => prev.map((l) => (l._id === id ? lead : l)));
      setExpandedId(null);
    } finally {
      setSavingNote(false);
    }
  }

  const exportHref = `${API_URL}/api/admin/leads/export.csv${
    statusFilter !== "all" ? `?status=${statusFilter}` : ""
  }`;

  return (
    <div>
      <div className={styles.toolbar}>
        <header>
          <h1>Leads</h1>
          <p className={styles.subtitle}>Enquiries submitted through the public website.</p>
        </header>
        <div className={styles.toolbarActions}>
          <div className={styles.searchWrap}>
            <Search size={15} strokeWidth={2} className={styles.searchIcon} />
            <input
              className={styles.searchInput}
              placeholder="Search leads…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className={styles.filterWrap}>
            <Filter size={15} strokeWidth={2} className={styles.filterIcon} />
            <select
              className={styles.select}
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-label="Filter by status"
            >
              <option value="all">All statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          <a className={styles.exportBtn} href={exportHref} download>
            <Download size={15} strokeWidth={2} />
            Export CSV
          </a>
        </div>
      </div>

      {selected.size > 0 && (
        <div className={styles.bulkBar}>
          <span>{selected.size} selected</span>
          <div className={styles.bulkActions}>
            <button onClick={() => bulkUpdateStatus("contacted")}>Mark contacted</button>
            <button onClick={() => bulkUpdateStatus("closed")}>Mark closed</button>
            <button className={styles.bulkDelete} onClick={bulkDelete}>
              <Trash2 size={14} strokeWidth={2} />
              Delete
            </button>
          </div>
        </div>
      )}

      <div className={styles.tableWrap}>
        {loading ? (
          <div className={styles.skeletonList}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div className={styles.skeletonRow} key={i} />
            ))}
          </div>
        ) : visibleLeads.length === 0 ? (
          <div className={styles.empty}>
            <Inbox size={28} strokeWidth={1.5} />
            <p>{leads.length === 0 ? "No leads yet." : "No leads match your search."}</p>
            <span>Submissions from the contact and sample forms will show up here.</span>
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th className={styles.checkboxCell}>
                  <input
                    type="checkbox"
                    checked={selected.size > 0 && selected.size === visibleLeads.length}
                    onChange={toggleSelectAll}
                    aria-label="Select all leads"
                  />
                </th>
                <th className={styles.sortable} onClick={() => toggleSort("name")}>
                  Name {sortKey === "name" && (sortDir === "asc" ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
                </th>
                <th>Contact</th>
                <th>Company</th>
                <th>Product</th>
                <th>Message</th>
                <th className={styles.sortable} onClick={() => toggleSort("createdAt")}>
                  Received {sortKey === "createdAt" && (sortDir === "asc" ? <ChevronUp size={12} /> : <ChevronDown size={12} />)}
                </th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {visibleLeads.map((lead) => (
                <Fragment key={lead._id}>
                  <tr>
                    <td className={styles.checkboxCell}>
                      <input
                        type="checkbox"
                        checked={selected.has(lead._id)}
                        onChange={() => toggleSelect(lead._id)}
                        aria-label={`Select lead from ${lead.name}`}
                      />
                    </td>
                    <td className={styles.strong}>{lead.name}</td>
                    <td>
                      {lead.email}
                      {lead.phone && (
                        <>
                          <br />
                          <span className={styles.muted}>{lead.phone}</span>
                        </>
                      )}
                    </td>
                    <td>
                      {lead.company || "—"}
                      {lead.country && (
                        <>
                          <br />
                          <span className={styles.muted}>{lead.country}</span>
                        </>
                      )}
                    </td>
                    <td>
                      {lead.product || "—"}
                      {lead.quantity && (
                        <>
                          <br />
                          <span className={styles.muted}>{lead.quantity}</span>
                        </>
                      )}
                    </td>
                    <td className={styles.messageCell}>{lead.message || "—"}</td>
                    <td className={styles.muted}>
                      {new Date(lead.createdAt).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                      })}
                    </td>
                    <td>
                      <span className={`${styles.badge} ${badgeClass[lead.status]}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td>
                      <div className={styles.actions}>
                        <select
                          className={styles.statusSelect}
                          value={lead.status}
                          onChange={(e) =>
                            updateStatus(lead._id, e.target.value as Lead["status"])
                          }
                          aria-label={`Update status for ${lead.name}`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="closed">Closed</option>
                        </select>
                        <button
                          className={`${styles.notesBtn} ${lead.notes ? styles.notesBtnActive : ""}`}
                          onClick={() => openNotes(lead)}
                          aria-label={`Notes for ${lead.name}`}
                          title="Notes"
                        >
                          <StickyNote size={16} strokeWidth={2} />
                        </button>
                        <button
                          className={styles.deleteBtn}
                          onClick={() => remove(lead._id)}
                          aria-label={`Delete lead from ${lead.name}`}
                        >
                          <Trash2 size={16} strokeWidth={2} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {expandedId === lead._id && (
                    <tr className={styles.notesRow}>
                      <td colSpan={9}>
                        <div className={styles.notesPanel}>
                          <textarea
                            rows={3}
                            value={noteDraft}
                            onChange={(e) => setNoteDraft(e.target.value)}
                            placeholder="Internal notes about this lead…"
                            autoFocus
                          />
                          <button
                            className={styles.saveNoteBtn}
                            disabled={savingNote}
                            onClick={() => saveNote(lead._id)}
                          >
                            {savingNote ? "Saving…" : "Save note"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
