"use client";

import { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Login clicked", { email, password });
    // Simulate login logic
    setTimeout(() => {
      setIsLoading(false);
      alert("Login successful!");
    }, 2000);
  };

  return (
    <section className="min-h-dvh flex flex-col items-center pt-[96px] pb-[48px]">
      <div className="max-w-[360px] flex flex-col items-center justify-center">
        <div className="w-full flex flex-row gap-4 items-center justify-center">
          <Image src="/ui.svg" alt="logo" width={32} height={32} />
          <h2 className="text-[#181d27] text-xl font-semibold">Untitled UI</h2>
        </div>
        <div className="mt-16 flex flex-col gap-3 text-center">
          <h1 className="text-[#181d27] font-semibold text-3xl">Log in to your account</h1>
          <p className="text-base text-[#535862] text-sm">
            Welcome back! Please enter your details.
          </p>
        </div>
        <form
          className="flex flex-col w-full mt-8"
          onSubmit={handleLogin}
          noValidate
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email"
            className="shadow-input text-sm py-[10px] px-[10px] border border-b-transparent border-[#d5d7da] rounded-t-md focus:outline-none focus:ring-2 focus:ring-[#7d48df]"
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
            <button
              type="submit"
              disabled={isLoading}
              aria-disabled={isLoading}
              className={`w-full text-base font-semibold py-[10px] px-[16px] text-white rounded-md transition duration-200 ease-in-out ${
                isLoading
                  ? "bg-[#a78bfa] cursor-not-allowed"
                  : "bg-[#7b47db] hover:bg-[#6037ac]"
              }`}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
            <button
              disabled={isLoading}
              aria-disabled={isLoading}
              className="w-full text-base font-semibold shadow-input flex flex-row items-center justify-center gap-4 border border-gray-300 text-gray-700 py-[10px] px-[16px] rounded-md transition duration-200 ease-in-out hover:bg-gray-100"
            >
              <FcGoogle size={24} /> Sign in with Google
            </button>
          </div>
        </form>
        <p className="mt-6 text-sm text-gray-600 text-center">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-[#7b47db] font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
        <Link
          href="/login/forget-password"
          className="mt-3 text-sm text-[#7b47db] font-semibold hover:underline"
        >
          Forget Password
        </Link>
      </div>
    </section>
  );
}
