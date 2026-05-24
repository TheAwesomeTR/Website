import { Star } from "lucide-react";
import type { Testimonial } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="space-y-5 p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge>{testimonial.category}</Badge>
          <div
            className="flex items-center gap-0.5 text-gold"
            aria-label={`${testimonial.rating} yıldız`}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-current"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
        <blockquote className="text-base leading-8 text-navy">
          “{testimonial.quote}”
        </blockquote>
        <div>
          <p className="font-semibold text-navy">{testimonial.name}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
