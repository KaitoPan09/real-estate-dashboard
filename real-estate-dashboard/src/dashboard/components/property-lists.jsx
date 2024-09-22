import { Button } from "@/components/ui/button";
import PropertyDetails from "./property-details";

// PropertyList component for passing props of generalize list view
// Passes props to Dashboard index
const PropertyList = ({ properties }) => {
  return (
    <ul className="faded-bottom no-scrollbar grid gap-4 overflow-auto pb-16 pt-4 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <li
          key={property.name}
          className="rounded-lg border p-4 hover:shadow-md"
        >
          <div className="mb-8 flex items-center justify-between">
            <div
              className={`flex size-10 items-center justify-center rounded-lg bg-muted p-2`}
            >
              <div className="flex justify-center mt-2">
                <span className="font-bold">
                  {property.stars}
                </span>
                <span className="font-bold text-yellow-500">★</span>
              </div>
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
            <p className="line-clamp-2 text-gray-500">{property.location}</p>
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
            {/* PropertyDetails Component */}
            <PropertyDetails property={property} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PropertyList;
