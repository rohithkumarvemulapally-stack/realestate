import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { posts, getFeaturedPost } from "@/data/posts";
import { formatDate } from "@/lib/format";
import AnimatedSection from "@/components/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes from the market — essays on buying, selling, design and investment from the Meridian Estates team.",
};

export default function BlogPage() {
  const featured = getFeaturedPost();
  const rest = posts.filter((p) => p.slug !== featured.slug);

  return (
    <div className="container-px pb-24 pt-28 lg:pt-32">
      <AnimatedSection className="mb-12 max-w-2xl">
        <Badge tone="accent">Journal</Badge>
        <h1 className="mt-5 text-display font-bold tracking-editorial text-blue-900">
          Notes from the market.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink/70">
          Slow thinking on property — what we&apos;ve learned buying, selling and
          advising across India&apos;s cities.
        </p>
      </AnimatedSection>

      {/* Featured post */}
      <AnimatedSection>
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid overflow-hidden rounded-3xl bg-white ring-1 ring-blue-900/5 lg:grid-cols-2"
        >
          <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto">
            <Image
              src={featured.cover}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="flex items-center gap-3 text-xs text-ink/50">
              <span className="font-medium text-brown-500">
                {featured.category}
              </span>
              <span>·</span>
              <span>{formatDate(featured.date)}</span>
              <span>·</span>
              <span>{featured.readTime} min read</span>
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-editorial text-blue-900 transition-colors group-hover:text-brown-500 lg:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 leading-relaxed text-ink/60">
              {featured.excerpt}
            </p>
            <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brown-500">
              Read article <ArrowUpRight size={16} />
            </span>
          </div>
        </Link>
      </AnimatedSection>

      {/* Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((post, i) => (
          <AnimatedSection key={post.slug} delay={(i % 3) * 0.1}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-blue-900/5 transition-shadow duration-500 hover:shadow-[0_24px_60px_-30px_rgba(15,42,71,0.45)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs text-ink/50">
                  <span className="font-medium text-brown-500">
                    {post.category}
                  </span>
                  <span>·</span>
                  <span>{post.readTime} min read</span>
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug text-blue-900 transition-colors group-hover:text-brown-500">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink/60">
                  {post.excerpt}
                </p>
                <p className="mt-auto pt-5 text-xs text-ink/40">
                  {formatDate(post.date)}
                </p>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
