import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { BlogPost } from "@/data/site";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group h-full transition duration-300 hover:-translate-y-1 hover:border-gold/45">
      <CardContent className="flex h-full flex-col gap-5 p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{post.category}</Badge>
          <span className="flex items-center gap-2 text-xs text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="text-xs text-muted-foreground">{post.readingTime}</span>
        </div>
        <div className="space-y-3">
          <h3 className="break-words font-editorial text-2xl leading-tight text-navy">
            <Link href={`/yazilar/${post.slug}`} className="hover:text-gold">
              {post.title}
            </Link>
          </h3>
          <p className="text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
        </div>
        <Link
          href={`/yazilar/${post.slug}`}
          className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-navy transition hover:text-gold"
        >
          Yazıyı Oku
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  );
}
