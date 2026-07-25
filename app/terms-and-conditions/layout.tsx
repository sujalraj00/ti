import type { Metadata } from "next";
import { seoConfig } from "../../data/seo";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${seoConfig.legal.title}`,
  description: seoConfig.legal.description,
  keywords: seoConfig.legal.keywords,
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
