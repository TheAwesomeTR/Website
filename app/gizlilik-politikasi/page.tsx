import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Gönül İlhan web sitesi gizlilik politikası taslak metni."
};

const sections = [
  {
    title: "Toplanan bilgiler",
    text: "Randevu veya iletişim formları üzerinden ad, e-posta, telefon, tercih edilen hizmet ve mesaj içeriği gibi bilgileri paylaşabilirsin. Bu bilgiler yalnızca talebini değerlendirmek ve seninle iletişime geçmek amacıyla kullanılır."
  },
  {
    title: "Kullanım amacı",
    text: "Paylaşılan bilgiler randevu planlama, eğitim başvurusu, ön görüşme, bilgilendirme ve hizmet sürecini yürütme amaçlarıyla işlenir. Gerçek yayında ödeme, takvim veya e-posta servisleriyle entegrasyon yapılırsa ilgili servislerin politikaları ayrıca belirtilmelidir."
  },
  {
    title: "Saklama ve güvenlik",
    text: "Kişisel veriler, işlenme amacı için gerekli süre boyunca ve makul güvenlik önlemleriyle saklanmalıdır. Bu proje aşamasında formlar demo olarak çalışır ve gerçek veritabanına kayıt yapmaz."
  },
  {
    title: "Hakların",
    text: "Kişisel verilerinle ilgili bilgi talep etme, düzeltme, silme veya işleme itiraz etme hakkın bulunur. Talepler için iletişim sayfasındaki kanallar kullanılabilir."
  }
];

export default function PrivacyPage() {
  return (
    <section className="container max-w-4xl py-14 sm:py-16">
      <SectionHeading
        eyebrow="Yasal"
        title="Gizlilik Politikası"
        description="Bu metin taslak niteliğindedir. Gerçek yayına çıkmadan önce marka, şirket ve yerel mevzuata göre hukuk uzmanı tarafından gözden geçirilmelidir."
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
