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

export async function apiFetch(url, options) {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`API error: ${res.status} ${errText}`);
  }

  return res.json();
}