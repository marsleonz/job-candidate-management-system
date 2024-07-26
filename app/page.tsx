"use client";

import { useRef } from "react";
import { CandidateSchema } from "@/lib/types";
import { createCandidate } from "@/actions/candidates";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CandidateForm() {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();
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
    router.push(`/success`);
  };

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[596px]">
          <Header />
          <form
            action={handleCreateCandidate}
            ref={ref}
            className="flex-1 space-y-6 "
          >
            <section className="mb-12 space-y-4">
              <h1 className="header">Hi there 👋</h1>
              <p className="text-dark-700">Schedule your first Candidate.</p>
            </section>
            <div className="flex flex-col gap-6 xl:flex-row">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="firstName" className="shad-input-label">
                  First Name *
                </Label>
                <Input
                  className="shad-input rounded-md border border-dark-500 bg-dark-400"
                  name="firstName"
                  placeholder="Manik"
                  required
                  id="firstName"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label className="shad-input-label" htmlFor="lastName">
                  Last Name *
                </Label>
                <Input
                  className="shad-input rounded-md border border-dark-500 bg-dark-400"
                  name="lastName"
                  placeholder="Shah"
                  id="lastName"
                  required
                />
              </div>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="shad-input-label" htmlFor="email">
                Email *
              </Label>
              <Input
                className="shad-input rounded-md border border-dark-500 bg-dark-400"
                name="email"
                type="email"
                placeholder="manikratnashah@gmail.com"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col gap-6 xl:flex-row">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label className="shad-input-label" htmlFor="phoneNumber">
                  Phone Number
                </Label>
                <Input
                  className="shad-input rounded-md border border-dark-500 bg-dark-400"
                  name="phoneNumber"
                  placeholder="(555) 1234 567"
                  id="phoneNumber"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label className="shad-input-label" htmlFor="callTimeInterval">
                  Best Time to Call
                </Label>
                <Input
                  className="shad-input rounded-md border border-dark-500 bg-dark-400"
                  name="callTimeInterval"
                  placeholder="Best Time to Call"
                  id="callTimeInterval"
                />
              </div>
            </div>

            <div className="flex flex-col gap-6 xl:flex-row">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label className="shad-input-label" htmlFor="linkedinUrl">
                  LinkedIn URL
                </Label>
                <Input
                  className="shad-input rounded-md border border-dark-500 bg-dark-400"
                  name="linkedinUrl"
                  placeholder="https://www.linkedin.com/in/manikrshah"
                  id="linkedinUrl"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label className="shad-input-label" htmlFor="githubUrl">
                  GitHub URL
                </Label>
                <Input
                  className="shad-input rounded-md border border-dark-500 bg-dark-400"
                  name="githubUrl"
                  placeholder="https://github.com/marsleonz"
                  id="githubUrl"
                />
              </div>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label className="shad-input-label" htmlFor="comment">
                Comments *
              </Label>
              <Textarea
                className="shad-textArea"
                name="comment"
                rows={3}
                placeholder="Comments"
                id="comment"
                required
              />
            </div>
            <div className="flex w-full justify-end">
              <Button className="shad-primary-btn w-full mt-6" type="submit">
                Get Started
              </Button>
            </div>
          </form>
          <Footer />
        </div>
      </section>
      <Image
        src="/assets/onboarding.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
