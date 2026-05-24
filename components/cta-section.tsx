import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Kendi yolculuğunu sayılarla keşfetmeye hazır mısın?",
  description = "Bir seans, eğitim ya da atölye ile numerolojiyi hayatına sakin, etik ve ilham veren bir farkındalık alanı olarak davet edebilirsin."
}: CTASectionProps) {
  return (
    <FadeIn as="section" className="container py-14 sm:py-16">
      <div className="sacred-frame overflow-hidden rounded-[2rem] bg-navy-depth p-5 text-primary-foreground shadow-soft min-[390px]:p-6 sm:p-12 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-champagne sm:text-sm sm:tracking-[0.24em]">
              Nazik bir başlangıç
            </p>
            <h2 className="break-words font-editorial text-[2rem] leading-tight sm:text-5xl">
              {title}
            </h2>
            <p className="text-base leading-8 text-primary-foreground/76">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="w-full bg-champagne text-navy hover:bg-linen sm:w-auto lg:w-full">
              <Link href="/randevu">
                <CalendarDays className="h-4 w-4" />
                Randevu Al
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white/20 bg-white/8 text-primary-foreground hover:bg-white/14 sm:w-auto lg:w-full"
            >
              <Link href="/egitimler">
                Eğitimleri İncele
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
