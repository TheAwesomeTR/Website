import type { Metadata } from "next";
import { Instagram, Mail, MapPin, MessageCircle, Phone, Timer } from "lucide-react";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Gönül İlhan ile randevu, eğitim ve atölye talepleri için iletişim bilgileri ve form."
};

export default function ContactPage() {
  return (
    <section className="container grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="İletişim"
          title="Soruların, eğitim taleplerin veya randevu ihtiyacın için buradayız."
          description="Mesajını kısa ve net bırakman yeterli. Uygunluk ve detaylar için sana dönüş yapılır."
        />
        <div className="grid gap-4">
          <ContactInfo icon={Mail} label="E-posta" value={siteConfig.email} />
          <ContactInfo icon={Phone} label="Telefon" value={siteConfig.phone} />
          <ContactInfo
            icon={Instagram}
            label="Instagram"
            value={siteConfig.instagram}
          />
          <ContactInfo icon={MapPin} label="Konum" value={siteConfig.location} />
          <ContactInfo
            icon={Timer}
            label="Çalışma saatleri"
            value={siteConfig.workingHours}
          />
        </div>
        <Button asChild className="w-full sm:w-auto">
          <a href="https://wa.me/905000000000" target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" />
            WhatsApp ile Yaz
          </a>
        </Button>
      </div>
      <ContactForm />
    </section>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <Card>
      <CardContent className="flex gap-3 p-4 sm:gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold-sheen text-gold">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-navy">{label}</p>
          <p className="break-words text-sm leading-6 text-muted-foreground">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
