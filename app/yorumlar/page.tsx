import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialFilter } from "@/components/sections/testimonial-filter";

export const metadata: Metadata = {
  title: "Yorumlar",
  description:
    "Gönül İlhan numeroloji danışmanlığı, eğitim ve atölye katılımcı yorumları."
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="container space-y-10 py-14 sm:py-16">
        <SectionHeading
          eyebrow="Yorumlar"
          title="Danışmanlık, eğitim ve atölyelerden temsilî deneyim notları."
          description="Gerçek yayında yalnızca izin alınmış yorumlar kullanılmalıdır. Bu sayfa filtrelenebilir yorum yapısını gösterir."
        />
        <TestimonialFilter />
      </section>
      <CTASection />
    </>
  );
}
