"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/monitoring/LiveCamera");
  }, [router]);

  return null;
};

export default Page;
