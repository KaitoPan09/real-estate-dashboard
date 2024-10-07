import { Input } from "@/components/ui/input";
import AvailabilityFilter from "./availability-filter";
import LocationFilter from "./location-filter";
import PriceFilter from "./price-filter";
import SortingProperty from "./sorting";

// Passing toolbar props for filtering and sorting
// Passes props to Dashboard index
const Toolbar = ({
  searchName,
  setSearchName,
  propertyType,
  setPropertyType,
  selectedLocations,
  setSelectedLocations,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  sort,
  setSort,
  properties,
}) => {
  return (
    <div className="my-4 flex items-end justify-between sm:my-0 sm:items-center">
      <div className="flex flex-col gap-4 sm:my-4 sm:flex-row">
        {/* Name Filter */}
        <Input
          placeholder="Filter properties..."
          className="h-9 w-40 lg:w-[250px]"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />

        {/* Availability Filter */}
        <AvailabilityFilter
          propertyType={propertyType}
          setPropertyType={setPropertyType}
        />

        {/* Locations Filter */}
        <LocationFilter
          properties={properties}
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
        />

        {/* Price Filter */}
        <PriceFilter
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
      </div>
      {/* Sorting */}
      <SortingProperty sort={sort} setSort={setSort} />
    </div>
  );
};

export default Toolbar;
