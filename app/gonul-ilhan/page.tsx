import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  aboutTimeline,
  audienceHighlights,
  legalDisclaimers,
  spotlightCards
} from "@/data/site";

export const metadata: Metadata = {
  title: "Gönül İlhan Hakkında",
  description:
    "Gönül İlhan'ın numerolojiye yaklaşımı, danışmanlık dili ve kişisel farkındalık odaklı çalışma alanı."
};

export default function AboutPage() {
  return (
    <>
      <section className="container grid gap-10 py-14 sm:gap-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <FadeIn>
          <div className="sacred-frame overflow-hidden rounded-[2rem] border border-white/80 bg-card p-3 shadow-soft">
            <Image
              src="/images/gonul-ilhan-portrait.png"
              alt="Gönül İlhan portre yer tutucusu"
              width={880}
              height={980}
              className="aspect-[0.86] w-full rounded-[1.5rem] object-cover"
              priority
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.08} className="space-y-8">
          <SectionHeading
            eyebrow="Gönül İlhan"
            title="Numerolojiyi sakin, etik ve insan odaklı bir farkındalık alanı olarak sunar."
            description="Gönül İlhan'ın yaklaşımı; kişiyi tek bir sayıya indirmek yerine, hayatındaki temaları daha bilinçli görmesine yardımcı olan bütüncül bir okuma alanı açar."
          />
          <div className="rounded-[1.5rem] border border-gold/25 bg-gold-sheen p-5 sm:p-6">
            <Quote className="mb-4 h-7 w-7 text-gold" aria-hidden="true" />
            <p className="font-editorial text-xl leading-8 text-navy sm:text-2xl sm:leading-9">
              “Sayılar kesin hükümler değil, kendimize daha dikkatli bakmamız
              için nazik işaretler sunar.”
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/randevu">Randevu Al</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/egitimler">
                Eğitimleri İncele
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </section>

      <section className="bg-white/34 py-14 sm:py-16">
        <div className="container grid gap-5 md:grid-cols-3">
          {spotlightCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <FadeIn key={card.title} delay={index * 0.05}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <Icon className="mb-5 h-7 w-7 text-gold" aria-hidden="true" />
                    <h2 className="font-editorial text-3xl text-navy">
                      {card.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {card.text}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="container grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Yaklaşım"
          title="Güvenli, sade ve abartısız bir spiritüel dil."
          description="Her çalışma, kişinin özgür iradesine ve gerçek hayat koşullarına saygı duyan bir çerçevede ilerler."
        />
        <div className="space-y-5">
          {aboutTimeline.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.04}>
              <Card>
                <CardContent className="flex gap-4 p-5 sm:gap-5 sm:p-6">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm text-primary-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-navy">{item.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container py-14 sm:py-16">
        <Card className="overflow-hidden">
          <CardContent className="grid gap-8 p-6 lg:grid-cols-2 lg:p-10">
            <div>
              <h2 className="break-words font-editorial text-[2rem] text-navy sm:text-4xl">
                Bu alan kimler için?
              </h2>
              <p className="mt-4 leading-8 text-muted-foreground">
                Numerolojiye merak duyan, kendini tanımak ve hayatındaki döngülere
                daha bilinçli bakmak isteyen herkes için sade bir başlangıç alanı.
              </p>
            </div>
            <ul className="grid gap-3">
              {audienceHighlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-7 text-navy">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="container py-14 sm:py-16">
        <div className="rounded-[1.5rem] border border-border bg-card/80 p-5 sm:p-6">
          <h2 className="font-editorial text-2xl text-navy sm:text-3xl">Önemli not</h2>
          <ul className="mt-5 grid gap-3">
            {legalDisclaimers.map((item) => (
              <li key={item} className="text-sm leading-7 text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
