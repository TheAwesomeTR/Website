import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="text-sm uppercase tracking-[0.18em] text-gold sm:tracking-[0.22em]">404</p>
      <h1 className="mt-4 break-words font-editorial text-[2.55rem] text-navy sm:text-5xl">Sayfa bulunamadı.</h1>
      <p className="mt-4 max-w-xl leading-8 text-muted-foreground">
        Aradığın sayfa taşınmış veya henüz hazırlanıyor olabilir. Ana sayfadan
        devam edebilirsin.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Ana Sayfaya Dön</Link>
      </Button>
    </section>
  );
}
