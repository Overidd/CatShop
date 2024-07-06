
// import * as React from "react"
import { cn } from '@/lib/utils'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
} from "@/components/ui/carousel"
import { CardOfferProps, ProductProps } from "@/lib/types";


interface Props {
   className?: string,
   Element: React.ElementType,
   data: Array<ProductProps | CardOfferProps>;
}

export function CarouselCustom({ data, Element, className }: Props) {
   return (
      <Carousel opts={{
         align: "start",
      }} className={cn("w-full rounded-2xl overflow-hidden")}>
         <CarouselContent>

            {
               data.map(item => (
                  <CarouselItem key={item.id} className={className}>
                     <Element {...item} />
                  </CarouselItem>
               ))
            }
         </CarouselContent>
         {/* <CarouselPrevious /> */}
         {/* <CarouselNext /> */}
      </Carousel>
   )
}
