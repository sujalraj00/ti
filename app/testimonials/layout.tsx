import type { Metadata } from "next";
import { seoConfig } from "../../data/seo";

export const metadata: Metadata = {
  title: seoConfig.testimonials.title,
  description: seoConfig.testimonials.description,
  keywords: seoConfig.testimonials.keywords,
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
