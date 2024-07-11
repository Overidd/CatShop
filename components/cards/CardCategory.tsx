/* eslint-disable @next/next/no-img-element */
'use client'

import { CategoryProps } from "@/lib/types";

interface Props {
   category: Array<CategoryProps>;
}

export const CardCategory = ({ category }: Props) => {
   return (
      <section className="grid grid-cols-2 md:grid-cols-custom-category gap-4 md:gap-10 uppercase cursor-pointer select-none">
         {
            category.map(({ id, category, img: { width, height, src, alt } }) => (

               <div key={id} className="py-3 relative text-center  border-borderPrimary bg-bgCategory rounded-[2rem] min-h-[10rem] md:min-h-[20rem] hover:bg-bgLateralcolumn transition duration-300">
                  <figure className="absolute w-full h-full p-6 md:p-12">
                     <img src={src} alt={alt} width={width} height={height}
                        className="w-full h-full object-contain object-center invert-[100%] opacity-80" />
                  </figure>

                  <h3 className="font-bold md:text-xl 2xl:text-2xl relative z-10">{category}</h3>
               </div>
            ))
         }
      </section>
   )
}
