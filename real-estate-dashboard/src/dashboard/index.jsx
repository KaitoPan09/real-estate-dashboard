import { useState } from "react";
import { Layout } from "@/components/custom/layout";
import { Separator } from "@/components/ui/separator";
import ModeSwitch from "@/components/mode-switch";
import { UserNav } from "@/components/user-nav";
import { properties } from "./data";
import Toolbar from "./components/toolbar/toolbar";
import PropertyList from "./components/property-lists";
import { getLocationValue, filterProps } from "@/lib/utils";

export default function Dashboard() {
  const [sortRating, setSortRating] = useState("descending");
  const [propertyType, setPropertyType] = useState("all");
  const [searchName, setSearchName] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const filteredProperties = filterProps({
    properties,
    sortRating,
    propertyType,
    selectedLocations,
    searchName,
    minPrice,
    maxPrice,
  });

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header sticky>
        <div className="ml-auto flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <ModeSwitch />
            <UserNav />
          </div>
        </div>
      </Layout.Header>

      {/* ===== Content ===== */}
      <Layout.Body className="flex flex-col">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Property Listing in XYZ County
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
          sortRating={sortRating}
          setSortRating={setSortRating}
          properties={properties}
        />

        <Separator className="shadow" />

        {/* Property List Component */}
        <PropertyList properties={filteredProperties} />
      </Layout.Body>
    </Layout>
  );
}
