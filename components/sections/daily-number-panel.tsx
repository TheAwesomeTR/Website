"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CalendarDays, Info, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { calculateDailyNumber, type DailyNumberResult } from "@/lib/daily-number";

export function DailyNumberPanel() {
  const [dailyNumber, setDailyNumber] = useState<DailyNumberResult>(() =>
    calculateDailyNumber()
  );

  useEffect(() => {
    const update = () => setDailyNumber(calculateDailyNumber());
    update();

    const interval = window.setInterval(update, 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <Card className="overflow-hidden border-gold/35 bg-navy text-primary-foreground">
      <CardContent className="grid gap-6 p-4 min-[390px]:p-6 sm:gap-8 sm:p-8 lg:grid-cols-[0.72fr_1fr] lg:p-10">
        <div className="sacred-frame flex min-h-52 flex-col items-center justify-center rounded-[1.8rem] bg-white/7 p-5 text-center sm:min-h-64 sm:p-8">
          <p className="mb-4 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-champagne/30 px-3 py-1 text-xs uppercase tracking-[0.16em] text-champagne sm:tracking-[0.2em]">
            <CalendarDays className="h-3.5 w-3.5" />
            {dailyNumber.dateLabel}
          </p>
          <p className="text-sm text-primary-foreground/70">Günün Sayısı</p>
          <p className="font-editorial text-7xl leading-none text-champagne sm:text-8xl">
            {dailyNumber.number}
          </p>
          <p className="mt-4 text-xs text-primary-foreground/56">
            Rakamların toplamı: {dailyNumber.digitSum}
          </p>
        </div>

        <div className="flex flex-col justify-center space-y-5">
          <div className="inline-flex w-fit max-w-full flex-wrap items-center gap-2 rounded-full border border-champagne/24 bg-white/6 px-4 py-2 text-sm text-champagne">
            <Sparkles className="h-4 w-4" />
            Bugünün sembolik teması
          </div>
          <div className="space-y-3">
            <h2 className="break-words font-editorial text-3xl leading-tight sm:text-5xl">
              {dailyNumber.meaning.title}
            </h2>
            <p className="text-base leading-8 text-primary-foreground/78">
              {dailyNumber.meaning.description}
            </p>
          </div>
          <div className="rounded-2xl border border-champagne/20 bg-white/6 p-5">
            <p className="text-sm font-semibold text-champagne">Günlük öneri</p>
            <p className="mt-2 text-sm leading-7 text-primary-foreground/76">
              {dailyNumber.meaning.suggestion}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild className="w-full bg-champagne text-navy hover:bg-linen sm:w-auto">
              <Link href="/randevu">
                Bugünün enerjisini daha derin keşfetmek için randevu al
              </Link>
            </Button>
            <p className="flex items-start gap-2 text-xs leading-5 text-primary-foreground/58">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Bu yorum kişisel farkındalık ve ilham amaçlıdır.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
