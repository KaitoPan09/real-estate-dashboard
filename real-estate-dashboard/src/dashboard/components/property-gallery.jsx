import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PiImageBroken } from "react-icons/pi";

const PropertyGallery = ({ images }) => {
  return images?.length > 0 ? (
    <Carousel
      opts={{ align: "start" }}
      className="w-full max-w-[16rem] sm:max-w-5xl"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <img
                    src={image}
                    alt={`Property image ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ) : (
    <div className="text-center">
      <PiImageBroken className="text-3xl" />
      <p>No images available for this property.</p>
    </div>
  );
};

export default PropertyGallery;
