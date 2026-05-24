import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { CTASection } from "@/components/cta-section";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Yazılar",
  description:
    "Numeroloji, kişisel yıl döngüsü, eğitimler ve kişisel farkındalık üzerine Türkçe yazılar."
};

export default function BlogPage() {
  return (
    <>
      <section className="container space-y-10 py-14 sm:py-16">
        <SectionHeading
          eyebrow="Yazılar"
          title="Sayıların diline sakin, açık ve gerçekçi bir bakış."
          description="Numerolojiye yeni başlayanlar ve eğitimleri merak edenler için kısa rehber yazılar."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.04}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
