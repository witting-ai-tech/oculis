"use client";

import { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ActionButton from "@/components/ActionButton";
export default function Page() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Signup clicked", { name, username, password });
    router.push("/register/verification");
  };

  return (
    <section className="min-h-dvh flex flex-col items-center pt-[96px] pb-[48px]">
      <div className="max-w-[360px] flex flex-col items-center justify-center">
        <div className="w-full flex flex-row gap-4 items-center justify-center">
          <Image src="/ui.svg" alt="logo" width={32} height={32} />
          <h2 className="text-[#181d27] text-xl font-semibold">Untitled UI</h2>
        </div>
        <div className="mt-16 flex flex-col gap-3 text-center">
          <h1 className="text-[#181d27] font-semibold text-3xl">Create your account</h1>
          <p className="text-base text-[#535862] text-sm">
            Welcome! Please fill in your details to sign up.
          </p>
        </div>
        <form className="flex flex-col w-full mt-8" noValidate>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-label="Name"
            className="shadow-input text-sm py-[10px] px-[10px] border border-[#d5d7da] rounded-t-md focus:outline-none focus:ring-2 focus:ring-[#7d48df]"
          />
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            aria-label="Username"
            className="shadow-input text-sm py-[10px] px-[10px] border border-[#d5d7da] focus:outline-none focus:ring-2 focus:ring-[#7d48df]"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
            className="shadow-input text-sm py-[10px] px-[10px] border border-[#d5d7da] rounded-b-md focus:outline-none focus:ring-2 focus:ring-[#7d48df]"
          />
          <div className="flex flex-col gap-4 mt-6">
            <ActionButton
              label="Register"
              isDisabled={isLoading}
              onClick={handleSignup}
            />
            <button
              disabled={isLoading}
              aria-disabled={isLoading}
              className="w-full text-base font-semibold shadow-input flex flex-row items-center justify-center gap-4 border border-gray-300 text-[#414651] py-[10px] px-[16px] rounded-md transition duration-200 ease-in-out "
            >
              <FcGoogle size={24} /> Sign up with Google
            </button>
          </div>
        </form>
        <p className="mt-6 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-[#7b47db] font-semibold hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
}
