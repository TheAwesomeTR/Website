import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Bireysel Danışmanlık",
  description:
    "Gönül İlhan ile bireysel numeroloji danışmanlığı, kişisel yıl ve ilişki uyum analizi seansları."
};

export default function ConsultationPage() {
  const primaryService = services[0];

  return (
    <>
      <section className="container grid gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <SectionHeading
          eyebrow="Bireysel Danışmanlık"
          title="Kişisel haritana sakin ve bütüncül bir bakış."
          description="Bireysel numeroloji danışmanlığı, yaşam yolunu, dönemsel temalarını ve içsel kaynaklarını daha bilinçli görmene yardımcı olacak özel bir seans olarak tasarlanır."
        />
        <Card className="bg-navy text-primary-foreground">
          <CardContent className="space-y-5 p-5 sm:p-7">
            <p className="text-xs uppercase tracking-[0.16em] text-champagne sm:text-sm sm:tracking-[0.22em]">
              Seans özeti
            </p>
            <div className="grid gap-4 text-sm text-primary-foreground/76">
              <p>
                <span className="font-semibold text-primary-foreground">Süre:</span>{" "}
                {primaryService.duration}
              </p>
              <p>
                <span className="font-semibold text-primary-foreground">
                  Format:
                </span>{" "}
                {primaryService.format}
              </p>
              <p>
                <span className="font-semibold text-primary-foreground">
                  Uygunluk:
                </span>{" "}
                {primaryService.audience}
              </p>
            </div>
            <Button asChild className="w-full bg-champagne text-navy hover:bg-linen sm:w-auto">
              <Link href="/randevu">
                Randevu Al
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="container grid gap-6 pb-14 sm:pb-16 md:grid-cols-3">
        {primaryService.includes.map((item) => (
          <Card key={item}>
            <CardContent className="p-6">
              <CheckCircle2 className="mb-5 h-6 w-6 text-gold" />
              <h2 className="font-semibold text-navy">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Seans, bu çıktıyı hayatındaki gerçek gündemlerle ilişkilendirecek
                şekilde yapılandırılır.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-white/34 py-14 sm:py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Seans Akışı"
            title="Danışmanlık nasıl ilerler?"
            description="Görüşme öncesi temel bilgiler alınır, seans sırasında harita ve dönem temaları sade bir dille ele alınır."
          />
          <div className="space-y-5">
            {[
              "Randevu talebi ve uygunluk onayı",
              "Seans öncesi kısa bilgi paylaşımı",
              "Kişisel harita ve dönem temalarının değerlendirilmesi",
              "Farkındalık notları ve pratik öneriler"
            ].map((item, index) => (
              <Card key={item}>
                <CardContent className="flex gap-4 p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm text-primary-foreground">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
