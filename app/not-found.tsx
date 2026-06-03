import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <p>찾는 페이지가 없습니다.</p>
      <p>
        <Link href="/">← Index로 돌아가기</Link>
      </p>
    </div>
  );
}
