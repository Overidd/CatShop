
import * as React from "react"

import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import { CardOffer } from "./CardOffer"
import { CardOfferProps } from "@/lib/types";


interface Props {
   card: Array<CardOfferProps>;  // Alternativa válida a `CardProps[]`
}

export function CarouselOfert({ card }: Props) {
   return (
      <Carousel className="w-full">
         <CarouselContent>

            {
               card.map(item => (
                  <CarouselItem key={item.id}>
                     <CardOffer {...item} />
                  </CarouselItem>
               ))
            }
         </CarouselContent>
         {/* <CarouselPrevious /> */}
         {/* <CarouselNext /> */}
      </Carousel>
   )
}
