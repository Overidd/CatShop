/* eslint-disable @next/next/no-img-element */
import { ProductProps } from "@/lib/types"
import { Search } from 'lucide-react';

interface Props {
   className?: string,
   productProps: ProductProps,
}

export const CardProducts = ({ productProps: { name, price, img: { alt, src, width, height } }, className }: Props) => {
   return (
      <div className={`text-center bg-bgCard rounded-xl flex flex-col gap-2 justify-between p-3 md:p-4 xl:p-5 ${className}`}>

         <figure className="basis-[0%] min-h-[38%] md:min-h-[43%] 2xl:min-h-[45%] min-w-full relative cursor-pointer productImg">
            <img
               src={src}
               alt={alt}
               className="w-full h-full object-cover object-center rounded-xl" />
            <Search size={40} className="absolute top-0 left-0 right-0 bottom-0 m-auto iconSearch"/>
         </figure>
         {/* <div className="absolute z-10 "> */}
         {/* </div> */}


         <h5 className="opacity-80 text-sm md:text-base ">{name}</h5>
         <small className="text-base md:text-xl">S/ {price}</small>
         <button className="bg-bgLateralcolumn text-white py-2 sm:py-3 md:py-4 rounded-xl w-full">
            Buy
         </button>
      </div>
   )
}
{/* <img src={src} alt={alt} className="rounded-xl min-h-[40%] md:h-[60%] object-cover object-center" /> */ }