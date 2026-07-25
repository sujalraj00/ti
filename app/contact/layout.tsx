import type { Metadata } from "next";
import { seoConfig } from "../../data/seo";

export const metadata: Metadata = {
  title: seoConfig.contact.title,
  description: seoConfig.contact.description,
  keywords: seoConfig.contact.keywords,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
