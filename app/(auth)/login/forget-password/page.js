"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "@untitledui/icons";

export default function Page() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSuccess(true);
      router.push("/login/verify");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-dvh flex flex-col items-center pt-[96px] pb-[48px]">
      <div className="max-w-[360px] flex flex-col items-center justify-center">
        <div className="w-full flex flex-row gap-4 items-center justify-center">
          <Image src="/key.svg" alt="logo" width={56} height={56} />
        </div>
        <div className="mt-6 flex flex-col gap-3 text-center">
          <h1 className="text-[#181d27] font-semibold text-3xl">
            Forgot password?
          </h1>
          <p className="text-base text-[#535862] text-sm">
            No worries, we’ll send you reset instructions.{" "}
          </p>
        </div>
        <form
          className="flex flex-col w-full mt-8"
          onSubmit={handleFormSubmit}
          noValidate
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
            className="shadow-input text-sm py-[10px] px-[10px] border border-[#d5d7da] rounded-t-md focus:outline-none focus:ring-2 focus:ring-[#7d48df]"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {success && (
            <p className="text-green-500 text-sm mt-2">
              Reset instructions sent to your email.
            </p>
          )}
          <div className="w-full flex flex-col gap-4 mt-6">
            <button
              type="submit"
              disabled={isLoading}
              aria-disabled={isLoading}
              className={`w-full py-[10px] px-[16px] text-white rounded-md transition duration-200 ease-in-out ${
                isLoading
                  ? "bg-[#a78bfa] cursor-not-allowed"
                  : "bg-[#7b47db] hover:bg-[#6037ac]"
              }`}
            >
              Reset password
            </button>
          </div>
        </form>
        <Link
          href="/login"
          className="mt-8 flex flex-row gap-4 text-sm text-[#535862] font-semibold hover:underline"
        >
          <ArrowLeft size={20} />
          Back to log in
        </Link>
      </div>
    </section>
  );
}
