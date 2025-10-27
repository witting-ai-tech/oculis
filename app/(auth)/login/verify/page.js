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
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Login clicked", { email, password });
    router.push("/login/verify");
  };

  return (
    <section className="min-h-dvh flex flex-col items-center pt-[96px] pb-[48px]">
      <div className="max-w-[360px] flex flex-col items-center justify-center">
        <div className="w-full flex flex-row gap-4 items-center justify-center">
          <Image src="/mail.svg" alt="logo" width={56} height={56} />
        </div>
        <div className="mt-6 flex flex-col gap-3 text-center">
          <h1 className="text-[#181d27] font-semibold text-3xl">
            Check your email
          </h1>
          <p className="text-base text-[#535862]">
            We sent a password reset link to olivia@untitledui.com
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 mt-6">
          <Link
            href="https://mail.google.com/mail/u/0/#inbox"
            disabled={isLoading}
            aria-disabled={isLoading}
            className={`w-full py-[10px] px-[16px] text-white text-center rounded-md transition duration-200 ease-in-out ${
              isLoading
                ? "bg-[#a78bfa] cursor-not-allowed"
                : "bg-[#7b47db] hover:bg-[#6037ac]"
            }`}
          >
            Open email app
          </Link>
        </div>
        <Link
          href="/login"
          className="mt-8 flex flex-row gap-2 text-sm text-[#535862]  hover:underline"
        >
          Didn&apos;t receive the email?{" "}
          <span className="text-[#7b47db] font-semibold">Click to resend</span>
        </Link>
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
