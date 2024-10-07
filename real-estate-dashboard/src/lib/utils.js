import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

// Utility for conditionally joining classNames
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Utility for getting the location value in filtering
// Splits and keeps the last 2 commas from the JSON (city, state)
export const getLocationValue = (location) => {
  const parts = location.split(",").map((part) => part.trim());
  return parts.slice(1).join(", ");
};
