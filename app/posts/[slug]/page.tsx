import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  posts,
  getPostMeta,
  getPostHtml,
  getAdjacent,
} from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const meta = getPostMeta(params.slug);
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.subtitle,
    openGraph: { title: meta.title, description: meta.subtitle },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const meta = getPostMeta(params.slug);
  const html = getPostHtml(params.slug);
  if (!meta || !html) notFound();

  const { prev, next } = getAdjacent(params.slug);

  return (
    <>
      <article className="article">
        <header className="article-head">
          <div className="article-meta">
            <span className="accent">연작 · {meta.index}</span>
            <span className="sep">/</span>
            <span>{meta.date}</span>
          </div>
          <h1 className="article-title">{meta.title}</h1>
          <p className="article-sub">{meta.subtitle}</p>
        </header>
        <hr className="rule" />
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      <nav className="article-nav">
        {prev ? (
          <Link className="prev" href={`/posts/${prev.slug}`}>
            <div className="nav-label">← 이전 글</div>
            <div className="nav-title">{prev.title}</div>
          </Link>
        ) : (
          <Link className="prev" href="/">
            <div className="nav-label">←</div>
            <div className="nav-title">Index</div>
          </Link>
        )}
        {next && (
          <Link className="next" href={`/posts/${next.slug}`}>
            <div className="nav-label">다음 글 →</div>
            <div className="nav-title">{next.title}</div>
          </Link>
        )}
      </nav>
    </>
  );
}
