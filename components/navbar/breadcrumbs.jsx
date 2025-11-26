"use client"

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState, Fragment } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb";
import Link from "next/link";

const defaultHomeIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="19"
    viewBox="0 0 17 19"
    fill="none"
  >
    <path
      d="M12.6667 7.25V4.41667C12.6667 3.94996 12.6667 3.7166 12.5758 3.53834C12.4959 3.38154 12.3685 3.25406 12.2117 3.17416C12.0334 3.08333 11.8 3.08333 11.3333 3.08333H1M9.33333 11.4167V14.25C9.33333 14.7167 9.33333 14.9501 9.24251 15.1283C9.16261 15.2851 9.03513 15.4126 8.87832 15.4925C8.70007 15.5833 8.46671 15.5833 8 15.5833H1M1 1L1 17.6667M1 11.4167L14.6667 11.4167C15.1334 11.4167 15.3667 11.4167 15.545 11.3258C15.7018 11.2459 15.8293 11.1185 15.9092 10.9617C16 10.7834 16 10.55 16 10.0833V8.58333C16 8.11662 16 7.88327 15.9092 7.70501C15.8293 7.54821 15.7018 7.42072 15.545 7.34083C15.3667 7.25 15.1334 7.25 14.6667 7.25L1 7.25L1 11.4167Z"
      stroke="#717680"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const prettify = (slug)=>
  slug.replace(/[-_]/g, " ").replace(/\b\w/g, (m)=>m.toUpperCase());

const useDerivedCrumbs = (pathname)=> {
  const parts = pathname.split("/").filter(Boolean);
  const crumbs =[];
  let acc ="";
  parts.forEach((p, i)=>{
    acc+= `/${p}`;
    crumbs.push({
      label: prettify(p),
      href: i=== parts.length -1 ? undefined : acc,
    });
  });
  if(crumbs.length ===0){
    crumbs.push({label:"Home"});
  }
  return crumbs;
};

const Breadcrumbs =({
  items,
  currentLabel,
  defaultCurrent,
  editable = true,
  homeRef = "/",
  homeIcon = defaultHomeIcon,
})=>{

  const pathname = usePathname();
  const baseCrumbs = useMemo(()=>{
    if(items && items.length) return items;
    return useDerivedCrumbs(pathname);
  },[items, pathname]);

  const finalCrumbs = useMemo(()=>{
    if(!baseCrumbs.length) return baseCrumbs;
    const cloned = [...baseCrumbs];
    const lastIdx = cloned.length -1;
    if(currentLabel){
      cloned[lastIdx]={
        ...cloned[lastIdx],
        label:currentLabel,
        href:undefined,
      };
    }
    return cloned;
  },[baseCrumbs, currentLabel]);

  const lastIdx = Math.max(0, finalCrumbs.length-1);
  const initialCurrent = currentLabel ?? defaultCurrent?? (finalCrumbs[lastIdx]?.label || "Current");

  const [current, setCurrent] = useState(initialCurrent);
  const [editing, setEditing] = useState(false);

  useEffect(()=>{
    setCurrent(initialCurrent);
  },[initialCurrent]);

  const handleSubmit =() =>{
    setEditing(false);
    onCurrentChanfe?.(current);
  };


  return(
    <Breadcrumb>
     <BreadcrumbList>
      <BreadcrumbItem>
       <BreadcrumbLink asChild>
          <Link href={homeRef}>{homeIcon}</Link>
       </BreadcrumbLink>
      </BreadcrumbItem>

      {finalCrumbs.map((c, i)=>{
        const isLast = i == finalCrumbs.length-1;

        return(
          <Fragment key={`${c.label}-${i}`}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
            {isLast ? (
              <BreadcrumbPage>
              {editable ? (
                <span className="inline-flex items-center gap-2"
                  onDoubleClick={()=>setEditing(true)}
                  role="button"
                  title="Double-click to edit"
                >
                  {editing ? (
                    <input autoFocus
                    className="border rounded px-2 py-1 text-sm outline-none"
                    value={current}
                    onChange={(e)=>{
                      if(e.key == "Enter") handleSubmit();
                      if(e.key =="Escape"){
                        setEditing(false);
                        setCurrent(initialCurrent);
                      }
                    }}/>
                  ) : ( 
                    <span>{current}</span>
                  )}
                </span>
              ) : (
                <span>{current}</span>
              )}
              </BreadcrumbPage>
            ) : c.href ? (
              <BreadcrumbLink asChild>
                <Link href={c.href}>{c.label}</Link>
              </BreadcrumbLink>
            ) : (
              <BreadcrumbPage>{c.label}</BreadcrumbPage>
            )}
            </BreadcrumbItem>
          </Fragment>
        );
      })}

     </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;