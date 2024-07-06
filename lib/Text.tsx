import * as React from "react"

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize() {
   return (
      <Carousel
         opts={{
            align: "start",
         }}
         className="w-full max-w-sm"
      >
         <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
               <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quasi aperiam, vitae deleniti voluptates aspernatur sit, provident ipsum nulla consequuntur, dignissimos dolorum sed tempora. Nemo expedita quod accusantium vel voluptatem!
                  
               </CarouselItem>
            ))}
         </CarouselContent>
         <CarouselPrevious />
         <CarouselNext />
      </Carousel>
   )
}
