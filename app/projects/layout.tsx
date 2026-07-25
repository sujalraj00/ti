import type { Metadata } from "next";
import { seoConfig } from "../../data/seo";

export const metadata: Metadata = {
  title: seoConfig.projects.title,
  description: seoConfig.projects.description,
  keywords: seoConfig.projects.keywords,
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
