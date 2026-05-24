import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { TrainingCard } from "@/components/training-card";
import { Card, CardContent } from "@/components/ui/card";
import { trainings } from "@/data/site";

export const metadata: Metadata = {
  title: "Eğitimler",
  description:
    "Gönül İlhan numeroloji eğitimleri: giriş, ileri seviye, kişisel harita atölyesi ve uygulamalı numeroloji programı."
};

export default function TrainingsPage() {
  return (
    <>
      <section className="container grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <SectionHeading
          eyebrow="Eğitimler"
          title="Numerolojiyi etik, anlaşılır ve uygulanabilir bir dille öğren."
          description="Programlar; sayı arketiplerini tanımaktan harita okuma pratiğine kadar farklı seviyelerde katılım imkânı sunar."
        />
        <Card className="bg-navy text-primary-foreground">
          <CardContent className="p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-champagne sm:text-sm sm:tracking-[0.2em]">
              Eğitim yaklaşımı
            </p>
            <p className="mt-4 text-base leading-8 text-primary-foreground/78">
              Eğitimlerde amaç ezber değil, sembolik dili hayatla ilişkilendirme
              becerisidir. Her programda etik sınırlar, sade ifade ve kişisel
              farkındalık odağı korunur.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="container grid gap-5 pb-14 sm:pb-16 md:grid-cols-2">
        {trainings.map((training, index) => (
          <FadeIn key={training.slug} delay={index * 0.04}>
            <TrainingCard training={training} />
          </FadeIn>
        ))}
      </section>

      <CTASection
        title="Hangi eğitim sana uygun, birlikte netleştirelim."
        description="Eğitim seviyenden emin değilsen kısa bir ön görüşme ile ihtiyacına en uygun programı seçebilirsin."
      />
    </>
  );
}
