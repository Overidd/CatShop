/* eslint-disable @next/next/no-img-element */
import { ProductProps } from "@/lib/types"


interface Props {
   className?: string,
   productProps: ProductProps,
}

export const CardProducts = ({ productProps: { description, img: { alt, src, width, height } }, className }: Props) => {
   return (
      <div className={`text-center bg-bgCard rounded-xl flex flex-col gap-2 justify-between p-3 md:p-4 xl:p-5 ${className}`}>

         <figure className="rounded-xl basis-[0%] min-h-[38%] md:min-h-[43%] 2xl:min-h-[45%] min-w-full overflow-hidden">
            <img src={src} alt={alt} className="w-full h-full object-cover object-center" />
         </figure>

         <p className="opacity-80 text-sm md:text-base ">{description}</p>
         <button className="bg-bgLateralcolumn text-white py-2 sm:py-3 md:py-4 rounded-xl w-full">
            Buy
         </button>
      </div>
   )
}
{/* <img src={src} alt={alt} className="rounded-xl min-h-[40%] md:h-[60%] object-cover object-center" /> */ }