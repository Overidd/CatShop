/* eslint-disable @next/next/no-img-element */
'use client'

import { CategoryProps } from "@/lib/types";

interface Props {
   category: Array<CategoryProps>;
}

export const CardCategory = ({ category }: Props) => {
   return (
      <section className="grid grid-cols-2 md:grid-cols-custom-category gap-10 uppercase">
         {
            category.map(({ id, category, img: { width, height, src, alt } }) => (

               <div key={id} className="relative text-center  border-2 border-borderPrimary bg-bgCategory p-4 rounded-xl min-h-[10rem] md:min-h-[20rem]">
                  <img src={src} alt={alt} width={width} height={height}
                     className="absolute w-full h-full object-cover object-center" />

                  <h3 className="font-bold md:text-xl">{category}</h3>
               </div>
            ))
         }
      </section>
   )
}
