import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import React from "react";

const success = () => {
  return (
    <div className=" flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href="/">Back</Link>
        </Button>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-red-700">candidate information</span> has
            been successfully submitted!
          </h2>
          <p>Please go back to add new candidates or continue to Dashboard</p>
        </section>

        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/candidates`}>Dashboard</Link>
        </Button>

        <p className="copyright">© 2024. All rights reserved</p>
      </div>
    </div>
  );
};

export default success;
