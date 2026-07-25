import type { Metadata } from "next";
import { seoConfig } from "../../data/seo";

export const metadata: Metadata = {
  title: `Privacy Policy | ${seoConfig.legal.title}`,
  description: seoConfig.legal.description,
  keywords: seoConfig.legal.keywords,
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
