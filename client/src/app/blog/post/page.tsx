import { Suspense } from "react";
import BlogPost from "@/components/core/blog/BlogPost";

export default function BlogPostPage() {
  return (
    <Suspense fallback={null}>
      <BlogPost />
    </Suspense>
  );
}
