import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  posts,
  getPostBySlug,
  getRelatedPosts,
} from "@/data/posts";
import { formatDate } from "@/lib/format";
import AnimatedSection from "@/components/AnimatedSection";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <article className="pb-24 pt-28 lg:pt-32">
      <div className="container-px">
        <Link
          href="/blog"
          className="link-underline mb-8 inline-flex items-center gap-2 text-sm font-medium text-brown-500"
        >
          <ArrowLeft size={16} /> Back to journal
        </Link>

        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3 text-xs text-ink/50">
            <span className="font-medium text-brown-500">{post.category}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} min read</span>
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-editorial text-blue-900 lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-ink/50">By {post.author}</p>
        </div>
      </div>

      {/* Hero image */}
      <div className="container-px mt-10">
        <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-3xl">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="container-px mt-14">
        <div className="mx-auto max-w-2xl">
          {post.content.map((para, i) => (
            <AnimatedSection key={i} delay={0}>
              <p className="mb-6 text-lg leading-relaxed text-ink/80 first:text-xl first:text-ink">
                {para}
              </p>
            </AnimatedSection>
          ))}

          {/* Author block */}
          <div className="mt-12 flex items-center gap-4 rounded-2xl bg-white p-6 ring-1 ring-blue-900/5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brown-500 text-lg font-bold text-cream">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-ink/50">
                Written by
              </p>
              <p className="text-lg font-bold tracking-editorial text-blue-900">
                {post.author}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="container-px mt-24">
          <AnimatedSection className="mb-10 flex items-end justify-between">
            <h2 className="text-display-sm font-bold tracking-editorial text-blue-900">
              Keep reading.
            </h2>
            <Link
              href="/blog"
              className="link-underline hidden text-sm font-medium text-brown-500 sm:block"
            >
              All articles
            </Link>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((p, i) => (
              <AnimatedSection key={p.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-blue-900/5 transition-shadow duration-500 hover:shadow-[0_24px_60px_-30px_rgba(15,42,71,0.45)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-medium text-brown-500">
                      {p.category}
                    </span>
                    <h3 className="mt-2 text-lg font-bold leading-snug text-blue-900 transition-colors group-hover:text-brown-500">
                      {p.title}
                    </h3>
                    <span className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-medium text-brown-500">
                      Read <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
