import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function snakeToTitle(value) {
  if (typeof value !== "string" || value.length === 0) return "";
  const words = value.split("_").filter(Boolean);
  return words
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function apiFetch(url, options={}) {
  const { payload, headers, ...restOptins }= options;

  const res = await fetch(url, {
    ...restOptins,
    headers: {
      "Content-Type": "application/json",
      ...(headers || {}),
    },
    body: payload? JSON.stringify(payload):undefined
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`API error: ${res.status} ${errText}`);
  }
  return res.json();
}

export function formatLabel(string){
   return string.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}