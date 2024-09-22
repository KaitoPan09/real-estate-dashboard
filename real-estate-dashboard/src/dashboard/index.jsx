import { useState } from "react";
import {
  IconAdjustmentsHorizontal,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from "@tabler/icons-react";
import { Layout } from "@/components/custom/layout";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
// import { Search } from "@/components/search";
import ModeSwitch from "@/components/mode-switch";
import { UserNav } from "@/components/user-nav";
import { Button } from "@/components/ui/button";
import { properties } from "./data";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

const appText = new Map([
  ["all", "All Properties"],
  ["occupied", "Occupied"],
  ["available", "Available"],
]);

export default function Dashboard() {
  const [sort, setSort] = useState("ascending");
  const [propertyType, setPropertyType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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
    .filter((properties) =>
      properties.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <Layout fixed>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <div className="ml-auto flex items-center space-x-4">
          {/* <Search /> */}
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="w-36">
                <SelectValue>{appText.get(propertyType)}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Properties</SelectItem>
                <SelectItem value="occupied">Occupied</SelectItem>
                <SelectItem value="available">Available</SelectItem>
              </SelectContent>
            </Select>
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
          {filteredProperties.map((app) => (
            <li
              key={app.name}
              className="rounded-lg border p-4 hover:shadow-md"
            >
              <div className="mb-8 flex items-center justify-between">
                <div
                  className={`flex size-10 items-center justify-center rounded-lg bg-muted p-2`}
                >
                  {/* {app.logo} */}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className={`${
                    app.occupancy === "Occupied"
                      ? "border border-red-300 bg-red-50 hover:bg-red-100 dark:border-red-700 dark:bg-red-950 dark:hover:bg-red-900"
                      : "border border-blue-300 bg-blue-50 hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-950 dark:hover:bg-blue-900"
                  }`}
                >
                  {app.occupancy === "Occupied" ? "Occupied" : "Available"}
                </Button>
              </div>
              <div>
                <h2 className="mb-1 font-semibold">{app.name}</h2>
                <p className="line-clamp-2 text-gray-500">{app.location}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-black border border-green-300 bg-green-50 hover:bg-green-100 dark:border-green-700 dark:bg-green-950 dark:hover:bg-green-900"
                  >
                    $ {app.price}
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
