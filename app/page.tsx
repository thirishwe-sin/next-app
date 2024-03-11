import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-primary p-0">
      <div className="flex flex-row items-center justify-between container m-auto bg-primary">
        <h1 className="text-secondary">Thiri Shwe Sin</h1>
        <div className="flex flex-row gap-3 p-3">
        <Link href="./users" className="text-secondary btn btn-ghost hover:border-dotted hover:border-white">Users</Link>
        </div>
      </div>
    </main>
  )
}
