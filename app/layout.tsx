import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Terra Infracon | Premium Luxury Floors Near Gurgaon & Sohna",
  description: "Terra Infracon Pvt. Ltd. crafts premium, sustainable, and customer-centric luxury residential floors in Sohna and Gurugram. Discover our flagship project, Terra Elegance.",
  metadataBase: new URL("https://terrainfracon.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Terra Infracon | Premium Luxury Floors Near Gurgaon & Sohna",
    description: "Terra Infracon Pvt. Ltd. crafts premium, sustainable, and customer-centric luxury residential floors in Sohna and Gurugram. Discover our flagship project, Terra Elegance.",
    url: "https://terrainfracon.com",
    siteName: "Terra Infracon",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terra Infracon | Premium Luxury Floors Near Gurgaon & Sohna",
    description: "Terra Infracon Pvt. Ltd. crafts premium, sustainable, and customer-centric luxury residential floors in Sohna and Gurugram.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-dark-bg text-warm-white font-sans selection:bg-gold selection:text-dark-bg">
        <SmoothScrollProvider>
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow pt-[76px] lg:pt-[88px]">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
