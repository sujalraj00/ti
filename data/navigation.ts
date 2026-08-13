import { NavigationLink } from "../types";

export const headerNavLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Projects",
    href: "/projects",
    children: [
      { label: "Terra Elegance (Ongoing Floors)", href: "/projects/terra-elegance" },
      { label: "Terra Heights (Launch Soon)", href: "/projects/terra-heights" },
      { label: "Terra Oasis (Upcoming Plots)", href: "/projects/terra-oasis" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Mission & Vision", href: "/about#vision-mission" },
    { label: "Corporate Timeline", href: "/about#timeline" },
    { label: "Why Choose Terra", href: "/#why-choose-us" },
    { label: "Blogs & Insights", href: "/blog" },
  ],
  projects: [
    { label: "Terra Elegance (Sohna)", href: "/projects/terra-elegance" },
    { label: "Terra Heights (Sohna)", href: "/projects/terra-heights" },
    { label: "Terra Oasis (Sohna)", href: "/projects/terra-oasis" },
    { label: "All Projects", href: "/projects" },
  ],
  support: [
    { label: "Contact Support", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "HARERA Registrations", href: "/#trust-bar" },
  ],
};
