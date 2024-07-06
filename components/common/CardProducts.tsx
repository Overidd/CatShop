/* eslint-disable @next/next/no-img-element */

import { ProductProps } from "@/lib/types"
import Image from "next/image"

// className=" w-full h-[37%] md:h-[50%] lg:h-[60%] rounded-md" />

export const CardProducts = ({ description, img: { alt, src, width, height }, textBtn }: ProductProps) => {
   return (
      <div className={`p-4 md:p-6 text-center bg-bgCard rounded-xl h-[22rem] xl:h-[26rem] flex flex-col justify-between`}>
         <img src={src} alt={alt} className="rounded-xl h-[50%] md:h-[60%]" />

         <p className="opacity-80 ">{description}</p>
         <button className="bg-bgLateralcolumn text-white py-4 rounded-xl w-full">{textBtn}</button> 
      </div>
   )
}
