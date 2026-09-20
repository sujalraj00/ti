import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Terra Infracon | Premium Luxury Floors Near Gurugram & Sohna",
    short_name: "Terra Infracon",
    description:
      "Terra Infracon Pvt. Ltd. crafts premium, sustainable, and customer-centric luxury residential floors in Sohna and Gurugram.",
    start_url: "/",
    display: "standalone",
    background_color: "#080c10",
    theme_color: "#080c10",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
