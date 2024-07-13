
// import * as React from "react"
import { cn } from '@/lib/utils'
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import { CardOfferProps, ProductProps } from "@/lib/types";
import React, { Children } from 'react';

interface Props {
   className?: string,
   children: React.ReactNode,
}

function CarouselCustom({ children, className }: Props) {
   return (
      <Carousel opts={{
         align: "start",
      }} className={cn("w-full")}>
         <CarouselContent className={className}>
            {children}
         </CarouselContent>
         <CarouselPrevious className='ml-8 md:ml-0' />
         <CarouselNext className='mr-8 md:mr-0' />
      </Carousel>
   )
}

export {
   CarouselCustom,
   CarouselItem,
}