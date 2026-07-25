import { companyDetails } from "../../data/company";

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-dark-bg relative overflow-hidden min-h-screen pb-20">
      <div className="bg-blob top-10 left-10" />

      {/* Header */}
      <section className="relative py-16 md:py-20 border-b border-gold-border/10">
        <div className="relative z-10 text-center space-y-3 max-w-3xl mx-auto px-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
            Statutory Documents
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-warm-white">
            Privacy Policy
          </h1>
          <p className="text-xs uppercase tracking-widest text-warm-muted">
            Last Updated: July 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 pt-16 relative z-10 font-sans text-xs md:text-sm text-warm-muted leading-relaxed font-light space-y-6 text-justify">
        <p>
          At <strong className="text-gold">{companyDetails.name}</strong>, accessible from terrainfracon.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by terrainfracon.com and how we use it.
        </p>

        <h3 className="font-serif text-base md:text-lg font-bold text-warm-white pt-4">1. Data Collection & Consent</h3>
        <p>
          If you contact us directly or register an enquiry through our lead submission forms, we may receive additional information about you such as your name, email address, phone number, interest topics, and the contents of the message you send us. 
        </p>
        <p>
          By checking the authorization consent tick-box on our forms, you grant express consent to {companyDetails.name} to contact you via telephone call, text SMS, or WhatsApp regarding project updates, pricing configurations, and site visit schedules.
        </p>

        <h3 className="font-serif text-base md:text-lg font-bold text-warm-white pt-4">2. Usage of Collected Information</h3>
        <p>We use the information we collect in various ways, including to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Provide, operate, and maintain our real estate informational website.</li>
          <li>Improve, personalize, and expand website speed performance and visual assets.</li>
          <li>Understand and analyze how visitors navigate through our project catalogs and floorplans.</li>
          <li>Develop new projects, services, features, and layout plans.</li>
          <li>Communicate with you directly for customer support, project brochures delivery, and sales updates.</li>
          <li>Prevent fraudulent activities and maintain compliance with HARERA Gurgaon protocols.</li>
        </ul>

        <h3 className="font-serif text-base md:text-lg font-bold text-warm-white pt-4">3. HARERA Gurgaon & Statutory Compliance</h3>
        <p>
          All collected customer data is stored securely and used in strict compliance with the Real Estate (Regulation and Development) Act, 2016 (RERA) rules. We do not share or trade customer information with third-party advertising networks. Information is only shared with partner financial institutions (such as SBI, HDFC, ICICI, etc.) upon your direct request for home loan approvals.
        </p>

        <h3 className="font-serif text-base md:text-lg font-bold text-warm-white pt-4">4. Log Files & Analytics</h3>
        <p>
          terrainfracon.com follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic statistics.
        </p>

        <h3 className="font-serif text-base md:text-lg font-bold text-warm-white pt-4">5. Cookies & Web Beacons</h3>
        <p>
          Like any other website, terrainfracon.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
        </p>

        <h3 className="font-serif text-base md:text-lg font-bold text-warm-white pt-4">6. Contact Information</h3>
        <p>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at our corporate headquarters:
        </p>
        <address className="not-italic border-l border-gold/30 pl-4 py-2 font-sans font-normal text-xs text-warm-white space-y-1">
          <p className="font-serif text-sm font-bold text-gold">{companyDetails.name}</p>
          <p>{companyDetails.address.suite}, {companyDetails.address.building},</p>
          <p>{companyDetails.address.sector}, {companyDetails.address.street}, {companyDetails.address.city}, {companyDetails.address.state}</p>
          <p>Email: {companyDetails.email} | Phone: {companyDetails.phone}</p>
        </address>
      </section>
    </div>
  );
}
