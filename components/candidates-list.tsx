import Link from "next/link";

import { db } from "@/app/db/db";
import { candidates } from "@/app/db/schema";

export default async function CandidatesList() {
  const allCandidates = await db.select().from(candidates);

  if (allCandidates.length === 0) {
    return <p>No candidates found</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b text-left">Name</th>
            <th className="py-2 px-4 border-b text-left">Phone</th>
            <th className="py-2 px-4 border-b text-left">Email</th>
            <th className="py-2 px-4 border-b text-left">
              Time Interval to call
            </th>
            <th className="py-2 px-4 border-b text-left">LinkedIn</th>
            <th className="py-2 px-4 border-b text-left">GitHub</th>
            <th className="py-2 px-4 border-b text-left">Comment</th>
          </tr>
        </thead>
        <tbody>
          {allCandidates.map((candidate) => (
            <tr key={candidate.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">
                <Link
                  className="hover:underline text-blue-600"
                  href={`/candidates/${candidate.id}`}
                >
                  {candidate.firstName} {candidate.lastName}
                </Link>
              </td>
              <td className="py-2 px-4 border-b">
                {candidate.phoneNumber || "N/A"}
              </td>
              <td className="py-2 px-4 border-b">{candidate.email}</td>
              <td className="py-2 px-4 border-b">
                {candidate.callTimeInterval}
              </td>
              <td className="py-2 px-4 border-b">
                {candidate.linkedinUrl ? (
                  <a
                    href={candidate.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600"
                  >
                    LinkedIn Profile
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {candidate.githubUrl ? (
                  <a
                    href={candidate.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600"
                  >
                    GitHub Profile
                  </a>
                ) : (
                  "N/A"
                )}
              </td>
              <td className="py-2 px-4 border-b">{candidate.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
