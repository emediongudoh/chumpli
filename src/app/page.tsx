export default async function Home() {
  return (
    <div className="-mt-16 flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-8 font-[family-name:var(--font-geist-sans)] text-4xl font-bold text-[#333333]">
        Chumpli
      </h1>
      <ol className="list-inside list-decimal font-[family-name:var(--font-geist-sans)]">
        <li className="mb-2">Alice</li>
        <li>Bob</li>
      </ol>
    </div>
  );
}
