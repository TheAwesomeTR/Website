import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://gonulilhan.com"),
  title: {
    default: "Gönül İlhan | Numeroloji Uzmanı",
    template: "%s | Gönül İlhan"
  },
  description:
    "Gönül İlhan ile bireysel numeroloji danışmanlığı, numeroloji eğitimleri, atölyeler ve kişisel farkındalık odaklı seanslar.",
  keywords: [
    "Gönül İlhan",
    "numeroloji",
    "numeroloji eğitimi",
    "numeroloji danışmanlığı",
    "kişisel gelişim",
    "online numeroloji"
  ],
  openGraph: {
    title: "Gönül İlhan | Numeroloji Uzmanı",
    description:
      "Sayıların sembolik dilini kişisel farkındalık ve içgörü için zarif bir rehbere dönüştüren danışmanlık ve eğitim deneyimleri.",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/images/og-gonul-ilhan.png",
        width: 1200,
        height: 630,
        alt: "Gönül İlhan Numeroloji Uzmanı"
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
