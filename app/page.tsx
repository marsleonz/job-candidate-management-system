"use client";

import { useRef } from "react";
import { CandidateSchema } from "@/lib/types";
import { createCandidate } from "@/actions/candidates";

export default function CandidateForm() {
  const ref = useRef<HTMLFormElement>(null);

  const handleCreateCandidate = async (formData: FormData) => {
    const newCandidate = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phoneNumber: formData.get("phoneNumber"),
      email: formData.get("email"),
      callTimeInterval: formData.get("callTimeInterval"),
      linkedinUrl: formData.get("linkedinUrl"),
      githubUrl: formData.get("githubUrl"),
      comment: formData.get("comment"),
    };

    // validate the form data
    const validation = CandidateSchema.safeParse(newCandidate);

    if (!validation.success) {
      const errors = validation.error.flatten();

      Object.entries(errors.fieldErrors).forEach(([field, messages]) => {
        if (messages && messages.length > 0) {
          console.error(`${field}: ${messages[0]}`);
        }
      });

      return;
    }

    // check for any errors on the backend
    const result = await createCandidate(formData);
    if (result?.error) {
      console.error(result.error);
      return;
    }

    // reset the form
    ref.current?.reset();
  };

  return (
    <form
      action={handleCreateCandidate}
      ref={ref}
      className="flex flex-col max-w-md mx-auto"
    >
      <input
        className="mb-2 p-3 border rounded-md"
        name="firstName"
        placeholder="First Name *"
        required
      />
      <input
        className="mb-2 p-3 border rounded-md"
        name="lastName"
        placeholder="Last Name *"
        required
      />
      <input
        className="mb-2 p-3 border rounded-md"
        name="phoneNumber"
        placeholder="Phone Number"
      />
      <input
        className="mb-2 p-3 border rounded-md"
        name="email"
        type="email"
        placeholder="Email *"
        required
      />
      <input
        className="mb-2 p-3 border rounded-md"
        name="callTimeInterval"
        placeholder="Best Time to Call"
      />
      <input
        className="mb-2 p-3 border rounded-md"
        name="linkedinUrl"
        placeholder="LinkedIn URL"
      />
      <input
        className="mb-2 p-3 border rounded-md"
        name="githubUrl"
        placeholder="GitHub URL"
      />
      <textarea
        className="mb-2 p-3 border rounded-md"
        name="comment"
        rows={3}
        placeholder="Comments"
      />

      <div className="flex w-full justify-end">
        <button
          className="w-36 border rounded-md p-2 text-stone-500 hover:text-stone-800 bg-stone-100"
          type="submit"
        >
          Submit 👉
        </button>
      </div>
    </form>
  );
}
