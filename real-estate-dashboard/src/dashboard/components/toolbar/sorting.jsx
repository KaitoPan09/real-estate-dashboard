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
const SortingProperty = ({ sort, setSort }) => {
  return (
    <Select value={sort} onValueChange={setSort}>
      <SelectTrigger className="w-16">
        <SelectValue>
          <IconAdjustmentsHorizontal size={18} />
        </SelectValue>
      </SelectTrigger>
      <SelectContent align="end">
        <SelectItem value="ascending">
          <div className="flex items-center gap-4">
            <IconSortAscending size={16} />
            <span>Stars: Low to High</span>
          </div>
        </SelectItem>
        <SelectItem value="descending">
          <div className="flex items-center gap-4">
            <IconSortDescending size={16} />
            <span>Stars: High to Low</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortingProperty;
