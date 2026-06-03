import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sihoonkim.vercel.app"),
  title: {
    default: "Sihoon Kim",
    template: "%s — Sihoon Kim",
  },
  description:
    "이해, 시장, 그리고 사람을 움직이는 것에 대한 노트. Notes on understanding, markets, and what moves people.",
  openGraph: {
    title: "Sihoon Kim",
    description:
      "이해, 시장, 그리고 사람을 움직이는 것에 대한 노트.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>
        <div className="frame">
          <header className="site-header">
            <Link href="/" className="wordmark">
              SIHOON&nbsp;KIM
            </Link>
            <nav className="site-nav">
              <Link href="/">Index</Link>
              <span className="dot" aria-hidden>
                ·
              </span>
              <span className="loc">Seoul</span>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="site-footer">
            <span>© {new Date().getFullYear()}</span>
            <span className="footer-note">Built in the open.</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
