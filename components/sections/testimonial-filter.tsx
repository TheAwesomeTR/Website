"use client";

import { useState } from "react";
import { testimonials, type Testimonial } from "@/data/site";
import { TestimonialCard } from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  "Tümü",
  "Bireysel Danışmanlık",
  "Eğitim",
  "Atölye"
] as const;

export function TestimonialFilter() {
  const [active, setActive] = useState<(typeof categories)[number]>("Tümü");

  const filtered: Testimonial[] =
    active === "Tümü"
      ? testimonials
      : testimonials.filter((item) => item.category === active);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            type="button"
            variant={active === category ? "default" : "outline"}
            size="sm"
            className={cn(active !== category && "bg-card/65")}
            onClick={() => setActive(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((testimonial) => (
          <TestimonialCard
            key={`${testimonial.name}-${testimonial.role}`}
            testimonial={testimonial}
          />
        ))}
      </div>
    </div>
  );
}
