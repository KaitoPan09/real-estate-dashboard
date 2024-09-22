import { useState } from "react";
import {
  IconAdjustmentsHorizontal,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from "@tabler/icons-react";
import { Layout } from "@/components/custom/layout";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
// import { Search } from "@/components/search";
import ModeSwitch from "@/components/mode-switch";
import { UserNav } from "@/components/user-nav";
import { Button } from "@/components/ui/button";
import { properties } from "./data";
import { Plus } from "lucide-react";
import AvailabilityFilter from "./components/availability-filter";
import LocationFilter from "./components/location-filter";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import PriceFilter from "./components/price-filter";

const getLocationValue = (location) => {
  const parts = location.split(",").map((part) => part.trim());
  return parts.slice(-2).join(", ");
};

export default function Dashboard() {
  const [sort, setSort] = useState("ascending");
  const [propertyType, setPropertyType] = useState("all");
  const [searchName, setSearchName] = useState("");
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProperties = properties
    .sort((a, b) =>
      sort === "ascending"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )
    .filter((properties) =>
      propertyType === "occupied"
        ? properties.occupancy === "Occupied"
        : propertyType === "available"
        ? properties.occupancy === "Available"
        : true
    )
    .filter((property) =>
      selectedLocations.length === 0
        ? true
        : selectedLocations.includes(getLocationValue(property.location))
    )
    .filter((properties) =>
      properties.name.toLowerCase().includes(searchName.toLowerCase())
    )
    .filter((property) => {
      const price = property.price;
      const min = minPrice ? parseFloat(minPrice) : 0;
      const max = maxPrice ? parseFloat(maxPrice) : Infinity;
      return price >= min && price <= max;
    });

  return (
    <Layout fixed>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
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
        <div className="my-4 flex items-end justify-between sm:my-0 sm:items-center">
          <div className="flex flex-col gap-4 sm:my-4 sm:flex-row">
            <Input
              placeholder="Filter properties..."
              className="h-9 w-40 lg:w-[250px]"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />

            {/* Availability */}
            <AvailabilityFilter
              propertyType={propertyType}
              setPropertyType={setPropertyType}
            />
            {/* Locations */}
            <LocationFilter
              properties={properties}
              selectedLocations={selectedLocations}
              setSelectedLocations={setSelectedLocations}
            />
            <PriceFilter minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice}/>
            
          </div>

          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-16">
              <SelectValue>
                <IconAdjustmentsHorizontal size={18} />
              </SelectValue>
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="ascending">
                <div className="flex items-center gap-4">
                  <IconSortAscendingLetters size={16} />
                  <span>Ascending</span>
                </div>
              </SelectItem>
              <SelectItem value="descending">
                <div className="flex items-center gap-4">
                  <IconSortDescendingLetters size={16} />
                  <span>Descending</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Separator className="shadow" />
        <ul className="faded-bottom no-scrollbar grid gap-4 overflow-auto pb-16 pt-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <li
              key={property.name}
              className="rounded-lg border p-4 hover:shadow-md"
            >
              <div className="mb-8 flex items-center justify-between">
                <div
                  className={`flex size-10 items-center justify-center rounded-lg bg-muted p-2`}
                >
                  {/* {property.logo} */}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className={`${
                    property.occupancy === "Occupied"
                      ? "border border-red-300 bg-red-50 hover:bg-red-100 dark:border-red-700 dark:bg-red-950 dark:hover:bg-red-900"
                      : "border border-blue-300 bg-blue-50 hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-950 dark:hover:bg-blue-900"
                  }`}
                >
                  {property.occupancy === "Occupied" ? "Occupied" : "Available"}
                </Button>
              </div>
              <div>
                <h2 className="mb-1 font-semibold">{property.name}</h2>
                <p className="line-clamp-2 text-gray-500">
                  {property.location}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-black border border-green-300 bg-green-50 hover:bg-green-100 dark:border-green-700 dark:bg-green-950 dark:hover:bg-green-900"
                  >
                    $ {property.price}
                  </Button>
                </div>
                <Button variant="outline" size="lg">
                  <Plus /> View Property
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Layout.Body>
    </Layout>
  );
}
