export interface CompanyDetails {
  name: string;
  tagline: string;
  subTagline: string;
  description: string;
  aboutStory: string;
  aboutPhilosophy: string;
  yearsOfExperience: string;
  sinceYear: number;
  rera: string;
  gst: string;
  address: {
    suite: string;
    building: string;
    sector: string;
    street: string;
    city: string;
    state: string;
    pinCode: string;
  };
  phone: string;
  whatsapp: string;
  email: string;
  officeTimings: string;
  googleMapsUrl: string;
  googleMapsIframeUrl: string;
}

export interface ProjectHighlights {
  label: string;
  value: string;
}

export interface ProjectLocationAdvantage {
  category: string;
  items: string[];
}

export interface ProjectSpecification {
  category: string;
  details: string[];
}

export interface Project {
  id: string;
  name: string;
  type: string;
  status: 'Ongoing' | 'Upcoming' | 'Completed' | 'Launch Soon';
  location: string;
  rera: string;
  description: string;
  shortDescription: string;
  startingPrice: string;
  configurations: string;
  unitSizes: string;
  possessionDate: string;
  features: string[];
  highlights: ProjectHighlights[];
  locationAdvantages: ProjectLocationAdvantage[];
  specifications: ProjectSpecification[];
  images: {
    hero: string;
    gallery: string[];
    floorPlans: string[];
    masterPlan: string;
    constructionUpdates: string[];
  };
  brochureUrl: string;
  videoUrl: string;
  droneFootageUrl: string;
  virtualTourUrl: string;
}

export interface NavigationLink {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: NavigationLink[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: 'interior' | 'exterior' | 'construction' | 'drone' | 'rendering';
}

export interface Amenity {
  id: string;
  name: string;
  iconName: string; // Lucide icon name
  description: string;
  isPremium: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'RERA' | 'Payment' | 'Project' | 'Legal' | 'General';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  projectAssociated: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
}

export interface PageSEOMetadata {
  title: string;
  description: string;
  keywords: string[];
}

export interface SEORegistry {
  [route: string]: PageSEOMetadata;
}

export interface BlogSectionContent {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  coverImage: string;
  excerpt: string;
  introParagraphs: string[];
  sections: BlogSectionContent[];
  keyTakeaways?: string[];
  faqs?: BlogFAQ[];
  relatedSlugs?: string[];
}

