import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { faqItems } from "@/data/site";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description:
    "Numeroloji danışmanlığı, online seanslar, eğitimler ve etik yaklaşım hakkında sık sorulan sorular."
};

export default function FAQPage() {
  return (
    <>
      <section className="container grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="SSS"
          title="Başlamadan önce merak edebileceğin cevaplar."
          description="Danışmanlık, eğitim ve atölye süreçleri hakkında temel bilgiler."
        />
        <Card>
          <CardContent className="p-6">
            <FAQAccordion items={faqItems} />
          </CardContent>
        </Card>
      </section>
      <CTASection />
    </>
  );
}
