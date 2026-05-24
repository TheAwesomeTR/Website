"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MoonStar, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-ivory/86 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2 sm:gap-3"
          aria-label="Gönül İlhan ana sayfa"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-card text-gold shadow-sm transition-transform group-hover:-translate-y-0.5 sm:h-11 sm:w-11">
            <MoonStar className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-editorial text-lg text-navy sm:text-xl">
              Gönül İlhan
            </span>
            <span className="block truncate text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">
              Numeroloji
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Ana menü">
          {navigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-card hover:text-navy",
                  isActive && "bg-card text-navy shadow-sm"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm">
            <Link href="/randevu">Randevu Al</Link>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-navy lg:hidden"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border/70 bg-ivory/96 px-4 pb-5 pt-2 shadow-soft sm:max-h-[calc(100vh-5rem)] lg:hidden">
          <nav className="container grid gap-2" aria-label="Mobil menü">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-navy hover:bg-card"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link href="/randevu" onClick={() => setIsOpen(false)}>
                Randevu Al
              </Link>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
