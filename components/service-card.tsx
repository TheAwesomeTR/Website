import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ServiceCardProps = {
  service: Service;
  compact?: boolean;
};

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card className="group h-full transition duration-300 hover:-translate-y-1 hover:border-gold/45">
      <CardHeader>
        <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-sheen text-gold">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <CardTitle>{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm leading-7 text-muted-foreground">
          {compact ? service.shortDescription : service.description}
        </p>
        <div className="grid gap-2 text-sm text-navy">
          <p>
            <span className="font-semibold">Süre:</span> {service.duration}
          </p>
          <p>
            <span className="font-semibold">Format:</span> {service.format}
          </p>
        </div>
        <Button asChild variant="outline" className="w-full">
          <Link href="/randevu">
            Randevu Al
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
