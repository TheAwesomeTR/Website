import type { Metadata } from "next";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Randevu Al",
  description:
    "Gönül İlhan numeroloji danışmanlığı, eğitim ve atölye için randevu talep formu."
};

export default function AppointmentPage() {
  return (
    <section className="container grid gap-10 py-14 sm:py-16 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
      <div className="space-y-6">
        <SectionHeading
          eyebrow="Randevu"
          title="Görüşme veya eğitim talebini güvenle ilet."
          description="Formu doldurduktan sonra uygunluk, tarih ve süreç detayları kısa bir ön iletişimle netleştirilir."
        />
        <Card className="bg-navy text-primary-foreground">
          <CardContent className="space-y-4 p-6">
            <h2 className="font-editorial text-3xl">Randevu öncesi not</h2>
            <p className="text-sm leading-7 text-primary-foreground/74">
              Bu form bir ön talep alanıdır. Gönderim sonrası takvim uygunluğu,
              ödeme ve görüşme bağlantısı ayrıca paylaşılır. Numeroloji
              danışmanlığı kişisel farkındalık amaçlıdır.
            </p>
          </CardContent>
        </Card>
      </div>
      <AppointmentForm />
    </section>
  );
}
