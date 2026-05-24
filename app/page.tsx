import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Feather,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { CTASection } from "@/components/cta-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { DailyNumberPanel } from "@/components/sections/daily-number-panel";
import { Hero } from "@/components/sections/hero";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { TrainingCard } from "@/components/training-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  aboutTimeline,
  blogPosts,
  faqItems,
  processSteps,
  services,
  testimonials,
  trainings,
  trustIndicators
} from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container py-10 sm:py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.05}>
              <Card className="h-full">
                <CardContent className="space-y-3 p-5">
                  <p className="font-editorial text-4xl text-navy">{item.value}</p>
                  <h2 className="font-semibold text-navy">{item.label}</h2>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <FadeIn className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-card p-3 shadow-soft">
            <Image
              src="/images/hero-numerology.png"
              alt="Numeroloji seansı için defter, sayılar ve sıcak ışık kompozisyonu"
              width={920}
              height={720}
              className="aspect-[1.18] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.08} className="space-y-8">
          <SectionHeading
            eyebrow="Gönül İlhan"
            title="Sayıları kader cümlesi değil, içgörü dili olarak okuyan bir yaklaşım."
            description="Gönül İlhan, numerolojiyi kişisel gelişim yolculuğunda anlamlı sorular sormaya yardımcı olan zarif bir farkındalık yöntemi olarak sunar."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {aboutTimeline.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-border/70 bg-card/70 p-5"
              >
                <Feather className="mb-4 h-5 w-5 text-gold" aria-hidden="true" />
                <h3 className="font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <Button asChild variant="outline">
            <Link href="/gonul-ilhan">
              Gönül İlhan'ı Tanı
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>
      </section>

      <section className="bg-white/34 py-14 sm:py-16">
        <div className="container space-y-10">
          <SectionHeading
            eyebrow="Hizmetler"
            title="Bireysel seanslardan grup atölyelerine, ihtiyacına göre şekillenen çalışmalar."
            description="Her çalışma, kesin yargılar yerine farkındalık ve sorumluluk alanını büyütmeyi hedefler."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.04}>
                <ServiceCard service={service} compact />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10 py-14 sm:py-16">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Eğitimler"
            title="Numerolojiyi öğrenmek isteyenler için özenle yapılandırılmış programlar."
            description="Temelden ileri seviyeye uzanan eğitimler; etik yorumlama, uygulama ve kişisel farkındalık odağıyla tasarlandı."
          />
          <Button asChild variant="outline" className="w-full sm:w-fit">
            <Link href="/egitimler">
              Tüm Eğitimler
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {trainings.map((training, index) => (
            <FadeIn key={training.slug} delay={index * 0.04}>
              <TrainingCard training={training} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container py-14 sm:py-16">
        <FadeIn>
          <DailyNumberPanel />
        </FadeIn>
      </section>

      <section className="bg-white/34 py-14 sm:py-16">
        <div className="container space-y-10">
          <SectionHeading
            eyebrow="Yorumlar"
            title="Danışan ve katılımcı deneyimlerinden sakin notlar."
            description="Yorumlar temsilidir; gerçek yayında izin alınmış danışan geri bildirimleriyle değiştirilebilir."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.05}>
                <TestimonialCard testimonial={testimonial} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container space-y-10 py-14 sm:py-16">
        <SectionHeading
          eyebrow="Randevu Süreci"
          title="Net, sade ve güven veren bir iletişim akışı."
          description="Randevu talebinden seans veya eğitim başlangıcına kadar her adım anlaşılır şekilde ilerler."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.title} delay={index * 0.04}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-6 flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-sheen text-gold">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-editorial text-4xl text-border">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="container grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <FadeIn className="space-y-6">
          <SectionHeading
            eyebrow="Yazılar"
            title="Numerolojiye sakin ve gerçekçi bir bakış."
            description="Kısa yazılar; sayıların sembolik dilini, döngüleri ve eğitim sürecini daha anlaşılır kılmak için hazırlandı."
          />
          <Card className="bg-navy text-primary-foreground">
            <CardContent className="space-y-4 p-6">
              <ShieldCheck className="h-8 w-8 text-champagne" aria-hidden="true" />
              <h3 className="font-editorial text-3xl">
                Farkındalık amaçlı içerik
              </h3>
              <p className="text-sm leading-7 text-primary-foreground/72">
                Yazılarda yer alan bilgiler, kişisel düşünme ve ilham alanı
                açmak içindir. Profesyonel sağlık, hukuk veya finans danışmanlığı
                yerine geçmez.
              </p>
            </CardContent>
          </Card>
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.04}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-white/34 py-14 sm:py-16">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="SSS"
            title="Sık sorulan sorular."
            description="Danışmanlık ve eğitim sürecine başlamadan önce merak edebileceğin temel konular."
          />
          <Card>
            <CardContent className="p-6">
              <FAQAccordion items={faqItems.slice(0, 5)} />
            </CardContent>
          </Card>
        </div>
      </section>

      <CTASection />
    </>
  );
}
