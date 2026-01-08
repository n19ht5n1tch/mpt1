// web/app/page.js
export default async function Home() {
  const res = await fetch("http://localhost:3000/health", {
    cache: "no-store"
  });
  return <pre>{JSON.stringify(await res.json(), null, 2)}</pre>;
}
