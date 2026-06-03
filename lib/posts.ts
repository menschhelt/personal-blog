import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: false });

export type PostMeta = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  index: string; // 연작 번호 (로마자)
  file: string;
};

// 두 글은 연작이다. 순서대로 노출한다.
export const posts: PostMeta[] = [
  {
    slug: "understanding",
    title: "나는 무엇을 이해하고 싶었는가",
    subtitle:
      "AI를 묻다가 결국 인간을 물었다 — 이해, 개념, 그리고 나 아닌 심판에 대하여.",
    date: "2026.05.31",
    index: "I",
    file: "understanding.md",
  },
  {
    slug: "what-moves-people",
    title: "사람은 무엇에 움직이는가",
    subtitle:
      "그리고 그 움직임은 지금 어떤 형식으로 담기고 있는가.",
    date: "2026.06.03",
    index: "II",
    file: "what-moves-people.md",
  },
];

const CONTENT_DIR = path.join(process.cwd(), "content");

function stripLeadingH1(md: string): string {
  // 원문 보존이 원칙이나, 본문 첫 줄이 H1(# 제목)이면
  // 페이지 헤더의 제목과 중복되므로 표시 단계에서만 제거한다.
  const lines = md.split("\n");
  let i = 0;
  while (i < lines.length && lines[i].trim() === "") i++;
  if (i < lines.length && /^#\s+/.test(lines[i])) {
    lines.splice(i, 1);
  }
  return lines.join("\n");
}

export function getPostMeta(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostHtml(slug: string): string | null {
  const meta = getPostMeta(slug);
  if (!meta) return null;
  const raw = fs.readFileSync(path.join(CONTENT_DIR, meta.file), "utf8");
  return marked.parse(stripLeadingH1(raw)) as string;
}

export function getAdjacent(slug: string): {
  prev: PostMeta | null;
  next: PostMeta | null;
} {
  const idx = posts.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? posts[idx - 1] : null,
    next: idx >= 0 && idx < posts.length - 1 ? posts[idx + 1] : null,
  };
}
