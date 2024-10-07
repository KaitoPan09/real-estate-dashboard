import {
    IconAdjustmentsHorizontal,
    IconSortAscending,
    IconSortDescending,
  } from "@tabler/icons-react";
  import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "@/components/ui/select";
  
  // Passes Sorting props to Toolbar component
  const SortingPrice = ({ sortPrice, setSortPrice }) => {
    return (
      <Select value={sortPrice} onValueChange={setSortPrice}>
        <SelectTrigger className="w-24">
        <SelectValue>
          {sortPrice === "ascending" ? (
            <span className="font-bold text-green-500">$</span>
          ) : (
            <span className="font-bold text-green-500">$$$$$</span>
          )}
        </SelectValue>
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem value="ascending">
            <div className="flex items-center gap-4">
              <IconSortAscending size={16} />
              <span>$ Low to High</span>
            </div>
          </SelectItem>
          <SelectItem value="descending">
            <div className="flex items-center gap-4">
              <IconSortDescending size={16} />
              <span>$ High to Low</span>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    );
  };
  
  export default SortingPrice;
  