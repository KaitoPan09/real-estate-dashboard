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

export const filteredProperties = ({
  properties,
  sortRating,
  propertyType,
  selectedLocations,
  minPrice,
  maxPrice,
  searchName,
}) => {
  return properties
  .sort((a, b) =>
    sortRating === "ascending" ? a.stars - b.stars : b.stars - a.stars
  )
  // Filter by occupancy status
  .filter((properties) =>
    propertyType === "occupied"
      ? properties.occupancy === "Occupied"
      : propertyType === "available"
      ? properties.occupancy === "Available"
      : true
  )
  // Filter based on property location
  .filter(
    (property) =>
      selectedLocations.length === 0 // If no location is selected, show all properties
        ? true
        : selectedLocations.includes(getLocationValue(property.location)) // Match selected locations
  )
  // Filter by name search (case-insensitive)
  .filter((properties) =>
    properties.name.toLowerCase().includes(searchName.toLowerCase())
  )
  // Filter based on price
  .filter((property) => {
    const price = property.price;
    const min = minPrice ? parseFloat(minPrice) : 0; // default is set to 0
    const max = maxPrice ? parseFloat(maxPrice) : Infinity; // default is set to infinity
    return price >= min && price <= max;
  });
}

