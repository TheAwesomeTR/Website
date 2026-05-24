import Link from "next/link";
import { Instagram, Mail, MapPin, MoonStar, Phone } from "lucide-react";
import { footerLinks, navigation, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-navy text-primary-foreground">
      <div className="container grid gap-9 py-12 sm:gap-10 sm:py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-md space-y-5">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-champagne/40 text-champagne">
              <MoonStar className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-editorial text-2xl">Gönül İlhan</p>
              <p className="text-xs uppercase tracking-[0.18em] text-champagne/80 sm:tracking-[0.22em]">
                Numeroloji Uzmanı
              </p>
            </div>
          </div>
          <p className="text-sm leading-7 text-primary-foreground/76">
            Sayıların sembolik dilini kişisel farkındalık, içgörü ve daha
            bilinçli seçimler için zarif bir rehbere dönüştüren danışmanlık ve
            eğitim alanı.
          </p>
          <p className="rounded-2xl border border-champagne/20 bg-white/5 p-4 text-xs leading-6 text-primary-foreground/70">
            Numeroloji içerikleri kişisel farkındalık ve ilham amaçlıdır;
            tıbbi, psikolojik, hukuki veya finansal danışmanlık yerine geçmez.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-champagne">
            Menü
          </h2>
          <ul className="space-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-primary-foreground/76 transition hover:text-champagne"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-primary-foreground/76 transition hover:text-champagne"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-champagne">
            İletişim
          </h2>
          <ul className="space-y-4 text-sm text-primary-foreground/76">
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-champagne" />
              <span className="break-all">{siteConfig.email}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-champagne" />
              <span>{siteConfig.phone}</span>
            </li>
            <li className="flex gap-3">
              <Instagram className="mt-0.5 h-4 w-4 text-champagne" />
              <span>{siteConfig.instagram}</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-champagne" />
              <span>{siteConfig.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container flex flex-col gap-2 text-xs text-primary-foreground/58 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gönül İlhan. Tüm hakları saklıdır.</p>
          <p>Premium kişisel marka web sitesi taslak yayını.</p>
        </div>
      </div>
    </footer>
  );
}
