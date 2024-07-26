"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Candidate = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  email: string;
  callTimeInterval: string | null;
  linkedinUrl: string | null;
  githubUrl: string | null;
  comment: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<Candidate>[] = [
  {
    accessorKey: "fullName",
    header: "Name",
    cell: (info) =>
      `${info.row.original.firstName} ${info.row.original.lastName}`,
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
    cell: (info) => info.getValue() ?? "N/A",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "callTimeInterval",
    header: "Call Time Interval",
    cell: (info) => info.getValue() ?? "N/A",
  },
  {
    accessorKey: "linkedinUrl",
    header: "LinkedIn",
    cell: (info) =>
      info.getValue() ? (
        <a href={info.getValue() as string} target="_blank">
          Profile
        </a>
      ) : (
        "N/A"
      ),
  },
  {
    accessorKey: "githubUrl",
    header: "GitHub",
    cell: (info) =>
      info.getValue() ? (
        <a href={info.getValue() as string} target="_blank">
          Profile
        </a>
      ) : (
        "N/A"
      ),
  },
  {
    accessorKey: "comment",
    header: "Comment",
    cell: (info) => info.getValue() ?? "N/A",
  },
];
