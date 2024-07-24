"use server";

import { db } from "@/app/db/db";
import { candidates } from "@/app/db/schema";
import { CandidateSchema } from "@/lib/types";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function createCandidate(data: FormData) {
  const newCandidate = {
    firstName: data.get("firstName") as string,
    lastName: data.get("lastName") as string,
    phoneNumber: data.get("phoneNumber") as string,
    email: data.get("email") as string,
    callTimeInterval: data.get("callTimeInterval") as string,
    linkedinUrl: data.get("linkedinUrl") as string,
    githubUrl: data.get("githubUrl") as string,
    comment: data.get("comment") as string,
  };

  const result = CandidateSchema.safeParse(newCandidate);
  if (!result.success) {
    return {
      error: "Invalid data",
    };
  }

  try {
    const existingCandidate = await db
      .select()
      .from(candidates)
      .where(eq(candidates.email, result.data.email))
      .get();

    if (existingCandidate) {
      await db
        .update(candidates)
        .set(result.data)
        .where(eq(candidates.email, result.data.email))
        .run();
    } else {
      await db.insert(candidates).values(result.data);
    }

    revalidatePath("/candidates");
    return { success: true };
  } catch (error) {
    console.error("Error creating/updating candidate:", error);
    return { error: "Failed to create/update candidate" };
  }
}
