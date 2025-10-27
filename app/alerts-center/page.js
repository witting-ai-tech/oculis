"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AlertsCenterContext } from "./layout";

const AlertsCenterPage = () => {
  const router = useRouter();
  const { sidebar } = React.useContext(AlertsCenterContext);

  useEffect(() => {
    // Redirect to the first sidebar item (0th index)
    if (sidebar && sidebar.length > 0) {
      router.replace(sidebar[0].href);
    }
  }, [sidebar, router]);

  // Show loading or nothing while redirecting
  return null;
};

export default AlertsCenterPage;
