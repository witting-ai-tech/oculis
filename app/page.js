"use client";
import Hnavbar from "@/components/Hnavbar";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import CustomLayout from "@/components/CustomLayout";
import {
  menu,
  primeCardsInfo,
  ppe_primeCardsInfo,
  fall_primeCardsInfo,
  access_primeCardsInfo,
  staff_primeCardsInfo,
} from "@/data/dashData";

export default function Home() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(0);
  const init = useRef(true);

  useEffect(() => {
    const saved = localStorage.getItem("currentTab");
    if (saved !== null) setCurrentTab(parseInt(saved, 10));
  }, []);

  useEffect(() => {
    localStorage.setItem("currentTab", currentTab);
  }, [currentTab]);

  useEffect(() => {
    if (init.current) {
      init.current = false;
      return;
    }
    setCurrentTab(0);
  }, [router.asPath]);

  return (
    <CustomLayout>
      <section className="inter ml-16 pl-12 xl:pl-16 pr-6 xl:pr-8 pb-8">
        <Hnavbar
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
          menu={menu}
        />
        <div className="mt-8">{menu[currentTab]?.component}</div>
      </section>
    </CustomLayout>
  );
}
