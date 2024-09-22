import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

// Utility for conditionally joining classNames
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
