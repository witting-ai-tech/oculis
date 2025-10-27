import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SecSidebar = ({ title, sidebar, current, handleSidebar }) => {
  const pathname = usePathname();

  const isActive = (item) => {
    if (!item.href) return false;
    const pathSegments = pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];

    // Convert title to lowercase and replace spaces with hyphens for comparison
    const titleSlug = item.title.toLowerCase().replace(/\s+/g, "-");

    return lastSegment === titleSlug || pathname === item.href;
  };

  return (
    <aside className="bg-[#f5f5f5] hidden md:block border-r border-[#E9EAEB]">
      <div className="pt-8 px-4 h-full flex w-[230px] min-[1025px]:w-[268px] flex-col gap-1 font-semibold ">
        <div className="px-2 min-[1025px]:px-3 py-2 text-[#A4A7AE] flex flex-row gap-2 items-center">
          {title}
        </div>
        {sidebar?.map((item, index) => (
          <div key={index}>
            {item.href ? (
              <Link href={item.href} className="block">
                <div
                  className={`pl-[42px] py-2 pr-3 max-[1025px]:text-base cursor-pointer ${
                    isActive(item) ? "text-[#7D48DF]" : "text-[#535862]"
                  }`}
                >
                  {item.title}
                </div>
              </Link>
            ) : (
              <div
                className={`pl-[42px] py-2 pr-3  text-base cursor-pointer ${
                  item.id === current.id ? "text-[#7D48DF]" : "text-[#535862]"
                }`}
                onClick={() => handleSidebar(item)}
              >
                {item.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SecSidebar;
