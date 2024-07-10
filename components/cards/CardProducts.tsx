/* eslint-disable @next/next/no-img-element */
'use client'
import { ProductProps } from "@/lib/types"
import { Search, BaggageClaim } from 'lucide-react';
import { useStoreCart } from "../context/useStoreCart";
import { useEffect, useState } from "react";

interface Props {
   className?: string,
   productProps: ProductProps,
   isProductCart?: boolean,
}

export const CardProducts = ({ productProps, className, isProductCart }: Props) => {

   const { addTocart } = useStoreCart()
   const { name, price, img: { alt, src, width, height } } = productProps

   // Renderiza algo diferente en el lado del servidor para evitar errores
   const [hydrated, setHydrated] = useState(false);
   useEffect(() => {
      setHydrated(true);
   }, []);

   if (!hydrated) {
      return null;
   }

   return (
      <div className={`text-center bg-bgCard rounded-xl flex flex-col gap-2 justify-between p-3 md:p-4 xl:p-5 ${className}`}>

         <figure className="basis-[0%] min-h-[38%] md:min-h-[43%] 2xl:min-h-[45%] min-w-full relative cursor-pointer productImg">
            <img className="w-full h-full object-cover object-center rounded-xl"
               src={src}
               alt={alt}
            />
            <Search className="absolute top-0 left-0 right-0 bottom-0 m-auto iconSearch" size={40} />
         </figure>

         <h5 className="opacity-80 text-sm md:text-base ">{name}</h5>
         <small className="text-base md:text-xl">S/ {price}</small>
         <button className="bg-bgLateralcolumn text-white py-2 sm:py-3 md:py-4 rounded-xl w-full flex justify-center"
            onClick={() => addTocart(productProps)}>
            {
               isProductCart
                  ? <BaggageClaim />
                  : 'Buy'
            }
         </button>
      </div>
   )
}
{/* <img src={src} alt={alt} className="rounded-xl min-h-[40%] md:h-[60%] object-cover object-center" /> */ }