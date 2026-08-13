import type { Metadata } from "next";
import { blogPosts } from "../../../data/blogs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found | Terra Infracon Blog",
      description: "The requested blog article could not be found.",
    };
  }

  return {
    title: `${post.title} | Terra Infracon Insights`,
    description: `${post.subtitle} — ${post.excerpt}`,
    keywords: [
      post.title,
      post.category,
      "Terra Infracon blog",
      "Sohna independent floors",
      "Gurgaon property growth",
    ],
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
