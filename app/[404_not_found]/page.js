import React from "react";
import {Button} from "@/components/Button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <div
      className="bg-white min-h-dvh flex flex-col items-center justify-center text-center gap-2 px-2"
      data-theme="light"
    >
      <Image src="/not.svg" width={56} height={56} alt="not found" />
      <h1 className="text-4xl lg:text-6xl text-[#181D27] font-semibold">
        Page not found
      </h1>
      <p className="text-[#535862] text-base lg:text-xl font-medium mt-2 lg:mt-6">
        The page you are looking for doesn&apos;t exist. Here are some helpful
        links:
      </p>
      <div className="flex flex-row gap-4 mt-8">
        <Button className="text-[#414651] border border-[#D5D7DA] px-[18px] py-3">
          <ArrowLeft size={20} />
          Go Back
        </Button>
        <Button className="bg-[#7D48DF] text-white text-lg px-[18px] py-3">
          <Link href="/">Take me home</Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
