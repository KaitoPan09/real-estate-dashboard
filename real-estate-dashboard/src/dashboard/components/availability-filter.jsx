import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const occupancyText = new Map([
  ["all", "All Properties"],
  ["occupied", "Occupied"],
  ["available", "Available"],
]);

const AvailabilityFilter = ({ propertyType, setPropertyType }) => {
  return (
    <Select value={propertyType} onValueChange={setPropertyType}>
      <SelectTrigger className="w-36">
        <SelectValue>{occupancyText.get(propertyType)}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Properties</SelectItem>
        <SelectItem value="occupied">Occupied</SelectItem>
        <SelectItem value="available">Available</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default AvailabilityFilter;
