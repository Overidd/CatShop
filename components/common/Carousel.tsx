
// import * as React from "react"
import { cn } from '@/lib/utils'
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
   className?: string,
   card: Array<CardOfferProps>;  // Alternativa válida a `CardProps[]`
}

export function CarouselOfert({ card, className }: Props) {
   return (
      <Carousel className={cn("w-full rounded-2xl overflow-hidden", className)}>
         <CarouselContent>

            {
               card.map(item => (
                  <CarouselItem key={item.id} className={className}>
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
