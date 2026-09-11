import type { Metadata } from "next";
import BlogList from "@/components/core/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights and updates from Yasashvi Ecogreen on sustainable trading, materials, and industry news.",
};

export default function BlogPage() {
  return <BlogList />;
}
