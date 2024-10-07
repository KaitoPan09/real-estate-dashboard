import { useState } from "react";
import { Layout } from "@/components/custom/layout";
import { Separator } from "@/components/ui/separator";
import ModeSwitch from "@/components/mode-switch";
import { UserNav } from "@/components/user-nav";
import { properties } from "./data";
import Toolbar from "./components/toolbar/toolbar";
import PropertyList from "./components/property-lists";

// Function to format of the location filter
// Splits and keeps the last 2 commas from the JSON (city, state)
const getLocationValue = (location) => {
  const parts = location.split(",").map((part) => part.trim());
  return parts.slice(-2).join(", ");
};

export default function Dashboard() {
  const [sort, setSort] = useState("descending");
  const [propertyType, setPropertyType] = useState("all");
  const [searchName, setSearchName] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProperties = properties
    // Sort the properties based on propert name
    .sort((a, b) =>
      sort === "ascending"
        ? a.stars - b.stars
        : b.stars - a.stars
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
    .filter((property) =>
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

  return (
    <Layout>
      {/* Top Heading */}
      <Layout.Header sticky>
        <div className="ml-auto flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <ModeSwitch />
            <UserNav />
          </div>
        </div>
      </Layout.Header>

      {/* Content */}
      <Layout.Body className="flex flex-col">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Property Listing in XYZ Country
          </h1>
          <p className="text-muted-foreground">Properties for Sale in XYZ</p>
        </div>

        {/* Toolbar Component */}
        <Toolbar
          searchName={searchName}
          setSearchName={setSearchName}
          propertyType={propertyType}
          setPropertyType={setPropertyType}
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          sort={sort}
          setSort={setSort}
          properties={properties}
        />

        <Separator className="shadow" />

        {/* Property List Component */}
        <PropertyList properties={filteredProperties} />
      </Layout.Body>
    </Layout>
  );
}
