"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHasNewNotifications } from "../app/store/slices/notificationSlice";
import { usePathname } from "next/navigation";
import { alertData } from "@/data/alertData";

const NotificationManager = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();

  useEffect(() => {
    // Clear notifications when alerts page is open
    if (pathname === "/alerts-center") {
      dispatch(setHasNewNotifications(false));
    }

    const interval = setInterval(() => {
      // Set notification flag when not on alerts page
      if (pathname !== "/alerts-center") {
        dispatch(setHasNewNotifications(true));
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [dispatch, pathname]);

  return null; // This component doesn't render anything
};

export default NotificationManager; 