import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="container">
        <div className="mt-20 flex gap-x-5">
          <Link href="/boards" className="heading-xl text-white">
            Boards
          </Link>

          <Link href="/about" className="heading-xl text-white">
            About
          </Link>
        </div>
      </main>
    </>
  );
}
