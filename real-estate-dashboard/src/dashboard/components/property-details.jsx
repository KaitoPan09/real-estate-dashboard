import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FaBed } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
import { MdOutlineBathroom } from "react-icons/md";
import { GiHomeGarage } from "react-icons/gi";
import { GiSofa } from "react-icons/gi";
import PropertyGallery from "./property-gallery";

// PropertyDetails component for passing details props
// Passes props to Property Listing
const PropertyDetails = ({ property }) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Button variant="outline" size="lg">
          <Eye className="pr-1" /> View Property
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            {property.name} - {property.occupancy}
          </DrawerTitle>
          <div>{property.location}</div>
          <DrawerDescription>{property.description}</DrawerDescription>
          <div className="flex items-center text-2xl">$ {property.price}</div>

          {/* Property Gallery Component */}
          <div className="flex items-center justify-center">
            <PropertyGallery images={property.images} />
          </div>

          {/* Props specific details to be rendered to dashboard */}
          <div className="flex items-center justify-center mt-4">
            <div className="flex items-center md:text-xl sm:text-xs mx-1 lg:mx-5">
              <FaBed className="mx-1" />
              <span className="lg:text-base sm:text-sm">{property.rooms}</span>
            </div>
            <div className="flex items-center md:text-xl sm:text-xs mx-1 lg:mx-5">
              <MdOutlineBathroom className="mx-1" />
              <span className="lg:text-base sm:text-sm">{property.bathrooms}</span>
            </div>
            <div className="flex items-center md:text-xl sm:text-xs mx-1 lg:mx-5">
              <SlSizeFullscreen className="mx-1" />
              <span className="lg:text-base sm:text-sm">{property.size}</span>
            </div>
            <div className="flex items-center md:text-xl sm:text-xs mx-1 lg:mx-5">
              <GiHomeGarage className="mx-1" />
              <span className="lg:text-base sm:text-sm">{property.garage}</span>
            </div>
            <div className="flex items-center md:text-xl sm:text-xs mx-1 lg:mx-5">
              <GiSofa className="mx-1" />
              <span className="lg:text-base sm:text-sm">{property.furnished}</span>
            </div>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default PropertyDetails;
