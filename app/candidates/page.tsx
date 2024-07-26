import Link from "next/link";
import { Suspense } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { db } from "@/app/db/db";
import { candidates } from "@/app/db/schema";
import Image from "next/image";
import Footer from "@/components/footer";

export default async function Page() {
  const data = await db.select().from(candidates);
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/logo.svg"
            height={100}
            width={100}
            alt="logo"
            className=" h-8 w-fit dark:invert"
          />
        </Link>

        <p className="text-16-semibold">Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing candidates.
          </p>
        </section>
        <DataTable columns={columns} data={data} />
      </main>
    </div>
  );
}
