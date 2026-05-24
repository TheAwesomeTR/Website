import Link from "next/link";
import { ArrowRight, Clock, Monitor, Signal } from "lucide-react";
import type { Training } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TrainingCardProps = {
  training: Training;
};

export function TrainingCard({ training }: TrainingCardProps) {
  return (
    <Card className="group flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:border-rose/45">
      <CardHeader>
        <Badge className="w-fit">{training.level}</Badge>
        <CardTitle>{training.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-5">
        <p className="text-sm leading-7 text-muted-foreground">
          {training.shortDescription}
        </p>
        <div className="grid gap-3 text-sm text-navy">
          <span className="flex items-start gap-2">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {training.duration}
          </span>
          <span className="flex items-start gap-2">
            <Monitor className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {training.format}
          </span>
          <span className="flex items-start gap-2">
            <Signal className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {training.audience}
          </span>
        </div>
        <div className="mt-auto">
          <Button asChild variant="outline" className="w-full">
            <Link href={`/egitimler/${training.slug}`}>
              Eğitim Detaylarını Gör
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
