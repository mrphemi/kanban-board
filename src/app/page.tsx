import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="container">
        <div className="mt-20 flex gap-x-5">
          <Link href="/boards/3" className="heading-xl text-white">
            Boards
          </Link>
        </div>
      </main>
    </>
  );
}
