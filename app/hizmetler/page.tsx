import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Gönül İlhan ile bireysel numeroloji danışmanlığı, ilişki uyum analizi, kişisel yıl danışmanlığı ve grup atölyeleri."
};

export default function ServicesPage() {
  return (
    <>
      <section className="container py-14 sm:py-16">
        <SectionHeading
          eyebrow="Hizmetler"
          title="Numerolojiyi kişisel farkındalık ve içgörü için kullanabileceğin danışmanlık alanları."
          description="Her hizmet, kişinin yaşamına saygılı, sade ve yönlendirici olmayan bir dille yapılandırılır."
        />
      </section>

      <section className="container space-y-6 pb-14 sm:pb-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <FadeIn key={service.slug} delay={index * 0.04}>
              <Card className="overflow-hidden">
                <CardContent className="grid gap-6 p-5 sm:gap-8 sm:p-6 lg:grid-cols-[0.8fr_1.2fr] lg:p-8">
                  <div className="rounded-[1.5rem] bg-gold-sheen p-5 sm:p-6">
                    <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
                    <h2 className="mt-5 break-words font-editorial text-2xl text-navy sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {service.shortDescription}
                    </p>
                  </div>
                  <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
                    <div className="space-y-5">
                      <p className="leading-8 text-muted-foreground">
                        {service.description}
                      </p>
                      <div className="grid gap-3 text-sm text-navy md:grid-cols-3">
                        <p>
                          <span className="block font-semibold">Süre</span>
                          {service.duration}
                        </p>
                        <p>
                          <span className="block font-semibold">Format</span>
                          {service.format}
                        </p>
                        <p>
                          <span className="block font-semibold">Uygun kişi</span>
                          {service.audience}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy">
                          Danışanın alacağı çıktı
                        </h3>
                        <ul className="mt-3 grid gap-2">
                          {service.includes.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-7 text-muted-foreground"
                            >
                              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Button asChild className="w-full lg:w-auto">
                      <Link href="/randevu">
                        Randevu Al
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          );
        })}
      </section>

      <CTASection />
    </>
  );
}
