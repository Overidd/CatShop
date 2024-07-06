/* eslint-disable @next/next/no-img-element */

import { ProductProps } from "@/lib/types"
import Image from "next/image"


export const CardProducts = ({ description, img: { alt, src, width, height }, textBtn }: ProductProps) => {
   return (
      <div className={`p-4 space-y-4 text-center bg-bgCard rounded-lg h-[22rem]`}>
         <Image src={src} alt={alt} width={40} height={40}
            className=" w-full h-[40%] rounded-md" />
            
         <p className="opacity-80">{description}</p>
         <button className="bg-bgLateralcolumn text-white py-2 px-4 rounded-md w-full">{textBtn}</button>  {/* Link to product page */}
      </div>
   )
}
