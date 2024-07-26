import CandidatesList from "@/components/candidates-list";
import TableData from "@/components/table-data";
import Link from "next/link";
import { Suspense } from "react";
import { Candidate, columns } from "./columns";
import { DataTable } from "./data-table";
import { db } from "@/app/db/db";
import { candidates } from "@/app/db/schema";

async function getData(): Promise<Candidate[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}
export default async function Page() {
  const data = await db.select().from(candidates);
  // const data = await getData();
  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          Home
        </Link>

        <p className="text-16-semibold">Dashboard</p>
      </header>

      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome 👋</h1>
          <p className="text-dark-700">
            Start the day with managing new candidates
          </p>
        </section>
        <DataTable columns={columns} data={data} />
      </main>
    </div>
  );
}
