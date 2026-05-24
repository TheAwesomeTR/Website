import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="number-field absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="container relative grid items-center gap-10 py-10 sm:gap-12 sm:py-14 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[1.04fr_0.96fr] lg:py-20">
        <FadeIn className="max-w-3xl space-y-7 sm:space-y-8">
          <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-gold/30 bg-card/76 px-4 py-2 text-sm text-navy shadow-sm">
            <Sparkles className="h-4 w-4 text-gold" aria-hidden="true" />
            Numeroloji uzmanı · Eğitim · Danışmanlık
          </div>

          <div className="space-y-6">
            <h1 className="break-words font-editorial text-[2.55rem] leading-[1.05] text-navy min-[390px]:text-5xl sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              Gönül İlhan ile sayıların dilinde kendine nazik bir yol aç.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
              Numeroloji; kişisel potansiyelini, dönemsel ritimlerini ve iç
              sesini daha bilinçli duymana yardımcı olan zarif bir farkındalık
              yöntemidir.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/randevu">
                <CalendarDays className="h-4 w-4" />
                Randevu Al
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/egitimler">
                Eğitimleri İncele
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="relative">
          <div className="sacred-frame relative overflow-hidden rounded-[2rem] border border-white/70 bg-card/70 p-3 shadow-soft">
            <Image
              src="/images/gonul-ilhan-portrait.png"
              alt="Gönül İlhan için premium portre yer tutucusu"
              width={880}
              height={980}
              priority
              className="aspect-[0.9] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] border border-white/55 bg-ivory/84 p-4 shadow-soft backdrop-blur sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
              <p className="text-[0.65rem] uppercase tracking-[0.16em] text-gold sm:text-xs sm:tracking-[0.22em]">
                Kişisel harita · Döngüler · Eğitim
              </p>
              <p className="mt-2 font-editorial text-xl leading-tight text-navy sm:text-2xl">
                Sakin, etik ve içgörü odaklı numeroloji yaklaşımı.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
