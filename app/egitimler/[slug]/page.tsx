import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock, Monitor, WalletCards } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { trainings } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return trainings.map((training) => ({ slug: training.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const training = trainings.find((item) => item.slug === slug);

  if (!training) {
    return { title: "Eğitim Bulunamadı" };
  }

  return {
    title: training.title,
    description: training.shortDescription
  };
}

export default async function TrainingDetailPage({ params }: Props) {
  const { slug } = await params;
  const training = trainings.find((item) => item.slug === slug);

  if (!training) notFound();

  return (
    <>
      <section className="container grid gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_0.82fr] lg:items-start">
        <div className="space-y-7">
          <Badge>{training.level}</Badge>
          <h1 className="break-words font-editorial text-[2.55rem] leading-tight text-navy sm:text-6xl">
            {training.title}
          </h1>
          <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
            {training.shortDescription}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/randevu">Başvuru / Randevu Oluştur</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/iletisim">
                Soru Sor
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        <Card>
          <CardContent className="grid gap-5 p-6">
            <InfoRow icon={Clock} label="Süre" value={training.duration} />
            <InfoRow icon={Monitor} label="Format" value={training.format} />
            <InfoRow icon={WalletCards} label="Ücret" value={training.price} />
          </CardContent>
        </Card>
      </section>

      <section className="container grid gap-10 pb-14 sm:pb-16 lg:grid-cols-[0.82fr_1.18fr]">
        <SectionHeading
          eyebrow="Program"
          title="Bu eğitimde neler var?"
          description={training.audience}
        />
        <div className="grid gap-5">
          {training.modules.map((module, index) => (
            <Card key={module}>
              <CardContent className="flex gap-4 p-5 sm:gap-5 sm:p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-sm text-primary-foreground">
                  {index + 1}
                </span>
                <div>
                  <h2 className="font-semibold text-navy">{module}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    Modül, canlı anlatım ve örneklerle desteklenen uygulamalı bir
                    akış içinde işlenir.
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white/34 py-14 sm:py-16">
        <div className="container grid gap-10 lg:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="font-editorial text-3xl text-navy">
                Katılımcılar ne öğrenir?
              </h2>
              <ul className="mt-5 grid gap-3">
                {training.learn.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h2 className="font-editorial text-3xl text-navy">
                Eğitim sonunda
              </h2>
              <ul className="mt-5 grid gap-3">
                {training.outcomes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="SSS"
          title="Eğitim hakkında merak edilenler."
          description="Program detayları dönemsel duyuruya göre netleşebilir."
        />
        <Card>
          <CardContent className="p-6">
            <FAQAccordion items={training.faqs} />
          </CardContent>
        </Card>
      </section>

      <CTASection
        title={`${training.title} için başvuru alanı açık.`}
        description="Program uygunluğu, tarih ve ödeme seçenekleri randevu talebinden sonra birlikte netleştirilir."
      />
    </>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border/80 bg-ivory/65 p-4">
      <Icon className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
      <div>
        <p className="text-sm font-semibold text-navy">{label}</p>
        <p className="text-sm leading-6 text-muted-foreground">{value}</p>
      </div>
    </div>
  );
}
