/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from "react"
import { useStoreCart } from "../context/useStoreCart"
import { X, CircleX } from 'lucide-react'
import { ProductProps } from "@/lib/types"
import { Button } from "../button/Button"

export const CartShop = () => {
   const { state, openToggleCard, openCard } = useStoreCart()

   const [hydrated, setHydrated] = useState(false);

   useEffect(() => {
      setHydrated(true);
   }, []);

   if (!hydrated) {
      // Renderiza algo diferente en el lado del servidor para evitar la discrepancia
      return null;
   }
   console.log(state, 'desde car')
   return (
      <section className={`fixed p-3 top-0 bottom-0 right-0 bg-bgLateralcolumn w-[60dvw] md:w-[20dvw] z-30 transition-[transform] flex flex-col gap-2 ${openCard ? 'translate-x-0' : 'translate-x-[120%]'}`}>
         <X className="cursor-pointer" size={30} strokeWidth={3} onClick={openToggleCard} />
         <div className="overflow-y-auto">
            {
               state.map(product => (
                  <CardCartShop key={product.id} productProps={product} id={product.id} />
               ))
            }
         </div>
         <Button bgColor="bg-bgBtnSecondary" textColor="text-white" className="mt-auto" />
      </section>
   )
}


interface Props {
   productProps: ProductProps;
   id: number
}

const CardCartShop = ({ productProps: { img: { src, alt, height, width }, name, description }, id }: Props) => {
   const { removeCart } = useStoreCart()
   return (

      <div className="flex gap-2 items-center px-4 text-cente">
         <figure className="rounded-lg overflow-hidden ">
            <img src={src} alt={alt} width={width} height={height} className="object-cover object-center" />
         </figure>

         <span className="">{name}</span>
         <button className="" onClick={() => removeCart(id)}>
            <CircleX size={35} strokeWidth={2} />
         </button>
      </div>
   )
}