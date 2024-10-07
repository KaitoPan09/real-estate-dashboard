import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandGroup,
  CommandSeparator,
} from "@/components/ui/command";
import { CheckIcon } from "@radix-ui/react-icons";
import { cn, getLocationValue } from "@/lib/utils";

// Passes Location filter props to Toolbar component 
const LocationFilter = ({
  properties,
  selectedLocations,
  setSelectedLocations,
}) => {
  const uniqueLocations = [
    ...new Set(
      properties.map((property) => getLocationValue(property.location))
    ),
  ];

  const toggleLocation = (location) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((loc) => loc !== location)
        : [...prev, location]
    );
  };

  const clearFilters = () => {
    setSelectedLocations([]);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" size="sm" className="h-10 border-dashed flex">
          <HomeIcon className="mr-2 h-4 w-4" />
          Property
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder="Location..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {selectedLocations.length > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem
                    onSelect={clearFilters}
                    className="justify-center text-center"
                  >
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
            <CommandGroup>
              {uniqueLocations.map((location, index) => {
                const isSelected = selectedLocations.includes(location);
                return (
                  <CommandItem
                    key={index}
                    onSelect={() => toggleLocation(location)}
                    className="flex items-center"
                  >
                    {/* Customized Checkbox renders for filtering */}
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <CheckIcon className={cn("h-4 w-4")} />
                    </div>
                    <span>{location}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default LocationFilter;
