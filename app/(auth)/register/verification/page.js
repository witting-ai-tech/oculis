"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ActionButton from "@/components/ActionButton";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ArrowLeft } from "@untitledui/icons";

export default function Page() {
  const [email] = useState("olivia@untitledui.com"); // Replace with dynamic email if needed
  const [isLoading, setIsLoading] = useState(false);
  const [enableOtp, setEnableOtp] = useState(false);
  const router = useRouter();

  const handleVerifyEmail = () => {
    setIsLoading(true);
    console.log("Verify Email clicked");
    router.push("/register/success");
    setIsLoading(false);
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
            We sent a password reset link to {email}
          </p>
        </div>
       { enableOtp && <div className = "mt-8">
          <InputOTP maxLength={4} >
            <InputOTPGroup className = "gap-3 ">
              <InputOTPSlot index={0} className = "border-2 border-[#966AE7] rounded-md w-[80px] min-h-[80px] text-[48px] text-[#7D48DF] font-medium "/>
              <InputOTPSlot index={1} className = "border-2 border-[#966AE7] rounded-md w-[80px] min-h-[80px] text-[48px] text-[#7D48DF] font-medium "/>
              <InputOTPSlot index={2} className = "border-2 border-[#966AE7] rounded-md w-[80px] min-h-[80px] text-[48px] text-[#7D48DF] font-medium "/>
              <InputOTPSlot index={3} className = "border-2 border-[#966AE7] rounded-md w-[80px] min-h-[80px] text-[48px] text-[#7D48DF] font-medium "/>
            </InputOTPGroup>
          </InputOTP>
        </div>}
        <div className="w-full flex flex-col gap-4 mt-6">
          {!enableOtp ? (
            <ActionButton
              onClick={() => setEnableOtp(true)}
              label="Enter code manually"
              isDisabled={isLoading}
            />
          ) : (
            <ActionButton
              onClick={handleVerifyEmail}
              label="Verify Email"
              isDisabled={isLoading}
            />
          )}
        </div>

        <Link
          href="/login"
          className="mt-8 flex flex-row gap-2 text-sm text-[#535862] font-semibold hover:underline"
        >
          <ArrowLeft size={20} />
          Back to log in
        </Link>
      </div>
    </section>
  );
}
