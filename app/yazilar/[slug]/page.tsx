import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays } from "lucide-react";
import { BlogCard } from "@/components/blog-card";
import { CTASection } from "@/components/cta-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return { title: "Yazı Bulunamadı" };

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="container max-w-4xl py-14 sm:py-16">
        <div className="space-y-6">
          <Badge>{post.category}</Badge>
          <h1 className="break-words font-editorial text-[2.55rem] leading-tight text-navy sm:text-6xl">
            {post.title}
          </h1>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">{post.excerpt}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-gold" />
              {post.date}
            </span>
            <span>{post.readingTime} okuma</span>
          </div>
        </div>

        <Card className="mt-10">
          <CardContent className="p-5 sm:p-10">
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-6 text-base leading-8 text-muted-foreground sm:leading-9"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-gold/25 bg-gold-sheen p-5">
              <p className="text-sm leading-7 text-muted-foreground">
                Bu içerik kişisel farkındalık ve ilham amaçlıdır; tıbbi,
                psikolojik, hukuki veya finansal danışmanlık yerine geçmez.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/randevu">Seans İçin Randevu Al</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/egitimler">
                  Eğitimleri Gör
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </article>

      <section className="container space-y-8 pb-16">
        <h2 className="break-words font-editorial text-[2rem] text-navy sm:text-4xl">İlgili yazılar</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <BlogCard key={item.slug} post={item} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
