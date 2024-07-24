import CandidatesList from "@/components/candidates-list";
import Title from "@/components/title";
import { Suspense } from "react";

export default async function Page() {
  return (
    <section>
      <Title text="All Candidates" />

      <Suspense fallback={<p>Loading...</p>}>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Candidates List</h1>
          <CandidatesList />
        </div>
      </Suspense>
    </section>
  );
}
