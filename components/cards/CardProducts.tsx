/* eslint-disable @next/next/no-img-element */
'use client'
import { ProductProps } from "@/lib/types"
import { Search, BaggageClaim } from 'lucide-react';
import { useStoreCart } from "../context/useStoreCart";
import { useEffect, useState } from "react";

interface Props {
   className?: string,
   productProps: ProductProps,
}

export const CardProducts = ({ productProps, className }: Props) => {

   const { name, price, img: { alt, src, width, height } } = productProps


   return (
      <div className={`text-center bg-bgCard rounded-xl flex flex-col gap-2 justify-between p-3 md:p-4 xl:p-5 ${className}`}>

         <figure className="bg-[#074f86] basis-[0%] min-h-[38%] md:min-h-[43%] 2xl:min-h-[45%] min-w-full relative cursor-pointer productImg overflow-hidden rounded-xl">
            <img className="w-full h-full object-cover object-center rounded-xl"
               src={src}
               alt={alt}
            />
            <Search className="absolute top-0 left-0 right-0 bottom-0 m-auto iconSearch"
               size={40} />
         </figure>

         <h5 className="opacity-80 text-sm md:text-xl text-balance">{name}</h5>
         <small className="text-base md:text-xl">S/ {price}</small>
         <ButtoIsCart product={productProps} />
      </div>
   )
}

type ButtoType = {
   product: any
}

const ButtoIsCart = ({ product }: ButtoType) => {
   const { addTocart, state } = useStoreCart()

   const checkProductCart = (product: ProductProps) => {
      return state.some(item => item.id === product.id)
   }

   // Renderiza algo diferente en el lado del servidor para evitar errores
   const [hydrated, setHydrated] = useState(false);
   useEffect(() => {
      setHydrated(true);
   }, []);


   return (
      <button className=" text-white rounded-xl w-full relative overflow-hidden"
         onClick={() => addTocart(product)}>

         <div className="bg-bgLateralcolumn py-3 md:py-4">Comprar</div>
         <div className={`py-3 md:py-4 bg-bgLateralcolumn absolute transition translate-y-[100%] inset-0 ${hydrated && checkProductCart(product) ? 'translate-y-[0%]' : 'translate-y-[100%]'}`}>
            <BaggageClaim className="mx-auto" />
         </div>

      </button>
   )
}
