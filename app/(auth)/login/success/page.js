"use client";

import { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { IoMdArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  return (
    <section className="min-h-dvh flex flex-col items-center pt-[96px] pb-[48px]">
      <div className="max-w-[360px] flex flex-col items-center justify-center">
        <div className="w-full flex flex-row gap-4 items-center justify-center">
          <Image src="/success.svg" alt="logo" width={56} height={56} />
        </div>
        <div className="mt-6 flex flex-col gap-3 text-center">
          <h1 className="text-[#181d27] font-semibold text-3xl">
            Email verified
          </h1>
          <p className="text-base text-[#535862] text-sm">
            Your Email has been successfully Verified. Click below to log in
            magically.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 mt-6">
          <Link
            href="/"
            disabled={isLoading}
            aria-disabled={isLoading}
            className={`w-full py-[10px] px-[16px] text-white text-center rounded-md transition duration-200 ease-in-out ${
              isLoading
                ? "bg-[#a78bfa] cursor-not-allowed"
                : "bg-[#7b47db] hover:bg-[#6037ac]"
            }`}
          >
            Continue
          </Link>
        </div>

        <Link
          href="/login"
          className="mt-8 flex flex-row gap-2 text-sm text-[#535862] font-semibold hover:underline"
        >
          <IoMdArrowBack size={20} />
          Back to log in
        </Link>
      </div>
    </section>
  );
}
