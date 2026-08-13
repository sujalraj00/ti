import { SEORegistry } from "../types";

export const seoConfig: SEORegistry = {
  home: {
    title: "Terra Infracon | Premium Luxury Floors Near Gurgaon & Sohna",
    description: "Terra Infracon Pvt. Ltd. builds A-grade luxury independent residential floors near Gurgaon & Sohna. Explore RERA-approved boutique living at the foot of Aravallis.",
    keywords: ["Terra Infracon", "Terra Elegance Sohna", "Independent Floors Gurgaon", "Luxury Floors Sohna", "Premium floors near Gurgaon", "HARERA Gurgaon floors", "New Launch Sohna", "Real estate developers Gurgaon"],
  },
  about: {
    title: "About Us | Terra Infracon - Crafting Luxury Homes Since 2014",
    description: "Learn about the legacy of Terra Infracon Pvt. Ltd., our core corporate values, 12+ years experience, and commitment to sustainable construction in Gurgaon.",
    keywords: ["About Terra Infracon", "Real estate builders Sohna", "Terra Infracon experience", "Sustainable construction India", "Gurugram floor developers"],
  },
  projects: {
    title: "Luxury Real Estate Projects in Sohna & Gurgaon | Terra Infracon",
    description: "Browse premium residential floors, gated high-rises, and botanical plots in Sector-7 Sohna. Find under-construction properties starting from ₹1.25 Cr.",
    keywords: ["Sohna residential projects", "Low rise floors Gurgaon", "Gated floors Sohna", "Under construction floors Sohna", "Terra Infracon properties"],
  },
  gallery: {
    title: "Architectural Gallery | Terra Elegance & Terra Projects",
    description: "Take a visual tour inside our luxury independent floors. View real construction updates, premium Italian marble interiors, and drone views of the Aravalli hills.",
    keywords: ["Terra Elegance pictures", "Luxury apartment interiors", "Construction update images Sohna", "Aravalli range drone photos"],
  },
  testimonials: {
    title: "Customer Testimonials & Reviews | Terra Infracon Homeowners",
    description: "Read verified reviews and experience stories from happy homeowners at Terra Elegance floors. Find out why families trust our construction quality.",
    keywords: ["Terra Infracon reviews", "Terra Elegance testimonials", "Real estate reviews Sohna", "Gurgaon builder feedback"],
  },
  blog: {
    title: "Real Estate & Living Insights | Terra Infracon Blog",
    description: "Read expert articles on independent floors, infrastructure developments in Sohna & South Gurugram, healthy living spaces, and homebuyer guides.",
    keywords: ["Sohna real estate blog", "Independent floors guide", "South Gurugram property growth", "Low rise communities Gurgaon", "Terra Infracon articles"],
  },
  contact: {
    title: "Contact Us | Schedule Site Visit - Terra Infracon Gurugram",
    description: "Get in touch with the sales team of Terra Infracon. Visit our corporate office at Sector-49 Sohna Road, or request details for Terra Elegance.",
    keywords: ["Terra Infracon office", "Terra Elegance sales contact", "Book site visit Sohna", "Gurgaon builders address"],
  },
  legal: {
    title: "Privacy Policy & Terms of Use | Terra Infracon Pvt. Ltd.",
    description: "Read our corporate terms, privacy guidelines, and statutory disclaimers regarding floor plans, prices, and website representations.",
    keywords: ["Terra Infracon privacy policy", "HARERA statutory disclaimer", "Real estate website terms"],
  },
};

// Generates the JSON-LD LocalBusiness schema
export const generateLocalBusinessSchema = (company: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": company.name,
    "image": "https://terrainfracon.com/assets/logo.png",
    "@id": "https://terrainfracon.com/#local-business",
    "url": "https://terrainfracon.com",
    "telephone": company.phone,
    "email": company.email,
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${company.address.suite}, ${company.address.building}, ${company.address.street}`,
      "addressLocality": company.address.city,
      "addressRegion": company.address.state,
      "postalCode": company.address.pinCode,
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.40989,
      "longitude": 77.03923,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00",
    },
    "sameAs": [
      "https://www.linkedin.com/company/terra-infracon",
      "https://www.instagram.com/terrainfracon",
      "https://www.facebook.com/terrainfracon",
    ],
  };
};

// Generates the JSON-LD Product schema for a project
export const generateProjectSchema = (project: any, company: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateProject",
    "name": project.name,
    "description": project.description,
    "url": `https://terrainfracon.com/projects/${project.id}`,
    "category": project.type,
    "status": project.status,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": project.location.split(",")[2]?.trim() || "Sohna",
      "addressRegion": "Haryana",
      "addressCountry": "IN",
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "12500000",
      "offerCount": "1",
      "priceRange": project.startingPrice,
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": company.name,
      "telephone": company.phone,
    },
  };
};

// Generates JSON-LD BlogPosting schema for articles
export const generateBlogArticleSchema = (post: any, company: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title + " - " + post.subtitle,
    "description": post.excerpt,
    "image": `https://terrainfracon.com${post.coverImage}`,
    "datePublished": "2026-08-12T00:00:00+05:30",
    "author": {
      "@type": "Organization",
      "name": post.author.name,
    },
    "publisher": {
      "@type": "Organization",
      "name": company.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://terrainfracon.com/assets/logo.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://terrainfracon.com/blog/${post.slug}`,
    },
  };
};

