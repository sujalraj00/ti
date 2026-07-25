import { companyDetails } from "../../data/company";

export default function TermsAndConditions() {
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
            Terms & Conditions
          </h1>
          <p className="text-xs uppercase tracking-widest text-warm-muted">
            Last Updated: July 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 pt-16 relative z-10 font-sans text-xs md:text-sm text-warm-muted leading-relaxed font-light space-y-6 text-justify">
        <p>
          Welcome to the website of <strong className="text-gold">{companyDetails.name}</strong> (terrainfracon.com). These terms and conditions outline the rules and regulations for the use of our corporate website. By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use terrainfracon.com if you do not agree to all of the terms and conditions stated on this page.
        </p>

        <h3 className="font-serif text-base md:text-lg font-bold text-warm-white pt-4">1. Architectural Visual Representation Disclaimer</h3>
        <p>
          All artistic renderings, 3D floor layout models, computer-generated interior designs, drone views, site map projections, and brochure document files displayed on this website are for representational/demonstration purposes only. They are not to be considered as final contractual offers.
        </p>
        <p>
          Properties marked with double brackets (e.g. <span className="text-gold">"[[...]]"</span>) denote premium placeholders representing future, non-final inputs. Actual floor plans, finishes, configurations, and pricing spreadsheets are subject to change as approved by HARERA Gurgaon or final client development guidelines.
        </p>

        <h3 className="font-serif text-base md:text-lg font-bold text-warm-white pt-4">2. Pricing & Cost Sheet Updates</h3>
        <p>
          Prices and plot sizes listed under projects (such as Terra Elegance floors starting at ₹1.25 Cr*) represent standard starting estimates. The official cost sheet, payment plan schedules, and installment milestones are detailed only inside the formal Buyer-Builder Agreement. {companyDetails.name} reserves the right to alter pricing configurations without prior notice.
        </p>

        <h3 className="font-serif text-base md:text-lg font-bold text-warm-white pt-4">3. HARERA Registration Compliance</h3>
        <p>
          We strictly follow the Real Estate Regulatory Authority (RERA) mandate of Haryana. Our flagship project Terra Elegance in Sector-7 Sohna is registered under HARERA Gurugram with license registration number <strong className="text-warm-white">{companyDetails.rera}</strong>. Statutory information regarding carpet areas, common areas, structural designs, and common facilities are updated in our corporate office registers.
        </p>

        <h3 className="font-serif text-base md:text-lg font-bold text-warm-white pt-4">4. Intellectual Property Rights</h3>
        <p>
          Unless otherwise stated, {companyDetails.name} and/or its licensors own the intellectual property rights for all material on terrainfracon.com. All intellectual property rights are reserved. You may view and/or print pages from terrainfracon.com for your own personal use subject to restrictions set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Republish text copy, logos, or rendering visuals from this website.</li>
          <li>Sell, rent, or sub-license materials from our project galleries.</li>
          <li>Reproduce, duplicate, or copy corporate layout styling.</li>
        </ul>

        <h3 className="font-serif text-base md:text-lg font-bold text-warm-white pt-4">5. Limitation of Liability</h3>
        <p>
          In no event shall {companyDetails.name}, nor any of its directors, managers, and site engineers, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort, or otherwise. {companyDetails.name} shall not be liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
        </p>

        <h3 className="font-serif text-base md:text-lg font-bold text-warm-white pt-4">6. Jurisdiction</h3>
        <p>
          These Terms will be governed by and construed in accordance with the laws of the State of Haryana, India, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Gurugram for the resolution of any disputes.
        </p>
      </section>
    </div>
  );
}
