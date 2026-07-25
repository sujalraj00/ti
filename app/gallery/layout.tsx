import type { Metadata } from "next";
import { seoConfig } from "../../data/seo";

export const metadata: Metadata = {
  title: seoConfig.gallery.title,
  description: seoConfig.gallery.description,
  keywords: seoConfig.gallery.keywords,
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
