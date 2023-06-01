import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="container">
        <div className="mt-20">
          <Link href="/dashboard" className="heading-xl text-white">
            Dashboard
          </Link>
        </div>
      </main>
    </>
  );
}
