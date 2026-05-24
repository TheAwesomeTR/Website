import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description: "Gönül İlhan web sitesi kullanım şartları taslak metni."
};

const sections = [
  {
    title: "Web sitesinin amacı",
    text: "Bu web sitesi, Gönül İlhan'ın numeroloji danışmanlığı, eğitimleri, atölyeleri ve iletişim kanalları hakkında bilgi sunmak amacıyla hazırlanmıştır."
  },
  {
    title: "Numeroloji içerikleri",
    text: "Sitedeki numeroloji içerikleri kişisel farkındalık, ilham ve kişisel düşünme süreçlerini desteklemek için sunulur. Kesin sonuç, garanti veya gelecek tahmini iddiası taşımaz."
  },
  {
    title: "Profesyonel danışmanlık sınırı",
    text: "Sitedeki bilgiler ve seanslar tıbbi, psikolojik, hukuki, finansal veya benzeri profesyonel danışmanlık yerine geçmez. Bu alanlarda ihtiyaç halinde ilgili uzmanlardan destek alınmalıdır."
  },
  {
    title: "Randevu ve eğitim süreci",
    text: "Formlar üzerinden iletilen talepler ön başvuru niteliğindedir. Tarih, ücret, ödeme, kontenjan ve katılım koşulları ayrıca onaylanmadan kesinleşmiş sayılmaz."
  },
  {
    title: "İçerik hakları",
    text: "Sitedeki metin, tasarım ve görseller Gönül İlhan markası için hazırlanmış taslak içeriklerdir. İzinsiz kopyalanmamalı veya farklı bir marka adına kullanılmamalıdır."
  }
];

export default function TermsPage() {
  return (
    <section className="container max-w-4xl py-14 sm:py-16">
      <SectionHeading
        eyebrow="Yasal"
        title="Kullanım Şartları"
        description="Bu metin taslak niteliğindedir. Gerçek yayına çıkmadan önce hukuk uzmanı tarafından güncellenmelidir."
      />
      <Card className="mt-10">
          <CardContent className="space-y-8 p-5 sm:p-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="break-words font-editorial text-2xl text-navy sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-3 leading-8 text-muted-foreground">{section.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
