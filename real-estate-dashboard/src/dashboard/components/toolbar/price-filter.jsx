import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Passes Price filter props to Toolbar component 
const PriceFilter = ({ minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  const handleClear = () => {
    setMinPrice("");
    setMaxPrice("");
  };
  return (
    <div className="flex space-x-4">
      <div className="flex flex-col">
        <Input
          //   type="number"
          placeholder="Minimum Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <Input
          //   type="number"
          placeholder="Maximum Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        {(minPrice || maxPrice) && (
          <Button
            variant="outline"
            onClick={handleClear}
            className="h-10 px-2 lg:px-3 border border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-950"
          >
            Clear
          </Button>
        )}
      </div>
    </div>
  );
};

export default PriceFilter;
