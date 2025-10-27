"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";
const ValidationMessage = ({ isValid, message }) => (
  <div className="flex items-center gap-2">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="20"
        height="20"
        rx="10"
        fill={isValid ? "#7d48df" : "#D5D7DA"}
      />
      <path
        d="M6.25 10L8.75 12.5L13.75 7.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <p className={`text-sm ${isValid ? "text-[#414651]" : "text-[#d5d7da]"}`}>
      {message}
    </p>
  </div>
);

export default function Page() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const isPasswordValid = password.length >= 8;
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setIsLoading(false);
      return;
    }

    if (!isPasswordValid || !hasSpecialCharacter) {
      setError("Password does not meet the requirements.");
      setIsLoading(false);
      return;
    }

    try {
      console.log("Reset Password clicked", { password });
      // Simulate reset password logic
      await new Promise((resolve) => setTimeout(resolve, 2000));
      router.push("/login/success");
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-dvh flex flex-col items-center pt-[96px] pb-[48px]">
      <div className="max-w-[360px] flex flex-col items-center justify-center">
        <div className="w-full flex flex-row gap-4 items-center justify-center">
          <Image src="/mail.svg" alt="logo" width={56} height={56} />
        </div>
        <div className="mt-6 flex flex-col gap-3 text-center">
          <h1 className="font-semibold text-3xl">Set new password</h1>
          <p className="text-base text-[#535862] text-sm">
            Your new password must be different from previously used passwords.
          </p>
        </div>
        <form
          className="flex flex-col w-full mt-8"
          onSubmit={handleFormSubmit}
          noValidate
        >
          <label className="text-sm text-[#414651] mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
            className="shadow-input text-sm py-[10px] px-[10px] mb-5 border border-[#d5d7da] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7d48df]"
          />
          <label
            className="text-sm text-[#414651] mb-2"
            htmlFor="confirm-password"
          >
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            aria-label="Confirm Password"
            className="shadow-input text-sm py-[10px] px-[10px] mb-5 border border-[#d5d7da] rounded-md focus:outline-none focus:ring-2 focus:ring-[#7d48df]"
          />
          <div className="flex flex-col text-[#535862] text-sm gap-3">
            <ValidationMessage
              isValid={isPasswordValid}
              message="Must be at least 8 characters"
            />
            <ValidationMessage
              isValid={hasSpecialCharacter}
              message="Must contain one special character"
            />
          </div>
          {error && (
            <p className="text-sm text-red-500 mt-4" aria-live="assertive">
              {error}
            </p>
          )}
          <div className="flex flex-col gap-4 mt-6">
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
              Reset Password
            </button>
          </div>
        </form>

        <Link
          href="/login"
          className="mt-8 flex flex-row gap-4 text-sm text-[#535862] font-semibold hover:underline"
        >
          <IoMdArrowBack size={20} />
          Back to log in
        </Link>
      </div>
    </section>
  );
}
