# Sihoon Kim — personal blog

네오 미니멀리즘 개인 블로그. Next.js (App Router) + 마크다운 원문 렌더링.

- 글 원문: `content/understanding.md`, `content/what-moves-people.md`
  (각각 `docs/blog.md`, `docs/blog2.md`의 원문 그대로)
- 글 메타(제목·부제·날짜·순서): `lib/posts.ts`
- 디자인 시스템: `app/globals.css`

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 프로덕션 빌드 검증
```

## Vercel 배포

이 `site/` 폴더가 프로젝트 루트다.

**방법 A — CLI (가장 빠름)**
```bash
cd site
npx vercel          # 최초 1회: 로그인 + 프로젝트 연결
npx vercel --prod   # 프로덕션 배포
```

**방법 B — GitHub 연동**
1. 이 폴더를 깃 저장소로 푸시
2. vercel.com → New Project → 저장소 선택
3. **Root Directory** 를 `site` 로 지정 (모노레포인 경우)
4. Framework: Next.js (자동 감지), 빌드 명령 기본값 그대로 → Deploy

## 글 추가하기

1. `content/<slug>.md` 에 마크다운 추가
2. `lib/posts.ts` 의 `posts` 배열에 메타 한 줄 추가
끝. (본문 첫 줄이 `# 제목` 이면 페이지 헤더와 중복되므로 표시 단계에서 자동 제거된다.)
