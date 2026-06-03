import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="hero-kicker">Notes — 연작</p>
        <h1 className="hero-title">
          흐릿한 것을
          <br />
          붙잡는 <span className="accent">법</span>.
        </h1>
        <p className="hero-lede">
          이해, 시장, 그리고 사람을 움직이는 것에 대한 노트. 너무 빨리 이름
          붙이지 않으면서, 그러나 끝내 선택하기 위해 쓴다.
        </p>
      </section>

      <div className="index-head">
        <span>Writing</span>
        <span>{String(posts.length).padStart(2, "0")} / 연작</span>
      </div>

      <ul className="post-list">
        {posts.map((p, i) => (
          <li className="post-row" key={p.slug}>
            <Link className="post-link" href={`/posts/${p.slug}`}>
              <span className="post-num">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <h2 className="post-title">
                  {p.title}
                  <span className="post-arrow" aria-hidden>
                    →
                  </span>
                </h2>
                <p className="post-sub">{p.subtitle}</p>
              </span>
              <span className="post-date">{p.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
