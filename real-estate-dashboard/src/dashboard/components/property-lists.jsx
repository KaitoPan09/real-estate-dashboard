import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
              {/* {property.logo} */}
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
            <Drawer>
              <DrawerTrigger>
                <Button variant="outline" size="lg">
                  <Plus /> View Property
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>
                    {property.name} - {property.occupancy}
                  </DrawerTitle>
                  <div>{property.location}</div>
                  <DrawerDescription>{property.description}</DrawerDescription>
                  <div className="flex items-center text-2xl">
                    $ {property.price}
                  </div>
                  <div className="flex items-center justify-center">
                    <Carousel
                      opts={{
                        align: "start",
                      }}
                      className="w-full max-w-xs sm:max-w-5xl"
                    >
                      <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                          <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/3"
                          >
                            <div className="p-1">
                              <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                  <span className="text-3xl font-semibold">
                                    {index + 1}
                                  </span>
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex items-center text-xl mr-5">
                      <FaBed className="mr-1" />
                      <span>{property.number_of_rooms}</span>
                    </div>
                    <div className="flex items-center text-xl">
                      <SlSizeFullscreen className="mr-1" />
                      <span>{property.size}</span>
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
            {/* <Button variant="outline" size="lg">
              <Plus /> View Property
            </Button> */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PropertyList;
