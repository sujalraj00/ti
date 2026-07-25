"use client";

import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { testimonials as rawTestimonials } from "../../data/testimonials";
import { motion } from "motion/react";

// Curated luxury stock portraits from Unsplash
const avatarImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop", // Rajesh (using representative avatar)
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop", // Dr. Amit
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop", // Shalini
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop", // Lt. Col. R. K.
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop", // Ananya
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop", // Vikram
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop", // Neha
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop", // Sunita
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop", // Rajiv
  "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&h=150&fit=crop", // Sanjay
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop", // Preeti
];

const mappedTestimonials = rawTestimonials.map((t, idx) => ({
  text: t.quote,
  name: t.author,
  role: `${t.role} — ${t.projectAssociated}`,
  image: avatarImages[idx % avatarImages.length],
}));

const firstColumn = mappedTestimonials.slice(0, 4);
const secondColumn = mappedTestimonials.slice(4, 8);
const thirdColumn = mappedTestimonials.slice(8, 11);

export const Testimonials = () => {
  return (
    <section className="bg-background my-10 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-gold-border py-1 px-4 rounded-none text-gold uppercase tracking-widest text-[10px] font-sans font-bold">
              Testimonials
            </div>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mt-5 text-warm-white text-center">
            What our users say
          </h2>
          <p className="text-center mt-4 opacity-75 text-warm-muted font-sans font-light text-sm">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default { Testimonials };
