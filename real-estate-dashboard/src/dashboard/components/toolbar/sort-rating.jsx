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
const SortingRating = ({ sortRating, setSortRating }) => {
  return (
    <Select value={sortRating} onValueChange={setSortRating}>
      <SelectTrigger className="w-32">
        <SelectValue>
          {sortRating === "ascending" ? (
            <span className="font-bold text-yellow-500">★</span>
          ) : (
            <span className="font-bold text-yellow-500">★★★★★</span>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="end">
        <SelectItem value="ascending">
          <div className="flex items-center gap-4">
            <IconSortAscending size={16} />
            <span>★ Low to High</span>
          </div>
        </SelectItem>
        <SelectItem value="descending">
          <div className="flex items-center gap-4">
            <IconSortDescending size={16} />
            <span>★ High to Low</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortingRating;
