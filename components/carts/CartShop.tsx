'use client'
import { useEffect, useState } from "react"
import Link from "next/link"

import { useStoreCart } from "../context/useStoreCart"
import { X, CircleX } from 'lucide-react'
import { ProductProps } from "@/lib/types"
import { Button } from "../button/Button"

export const CartShop = () => {
   const { state, openToggleCard, openCard } = useStoreCart()
   let priceCounter = 0;

   // Renderiza algo diferente en el lado del servidor para evitar errores
   const [hydrated, setHydrated] = useState(false);
   useEffect(() => {
      setHydrated(true);
   }, []);
   if (!hydrated) {
      return null;
   }

   // const toPageCart = () => {
   //    navigator.push('/cart')
   // }

   return (
      <>
         <section className={`bg-bgLateralcolumn fixed p-5 top-0 bottom-0 right-0 w-[80dvw] md:w-[20rem] z-30 transition-[transform] duration-300 flex flex-col gap-4 ${openCard ? 'translate-x-0' : 'translate-x-[120%]'}`}>
            <X className="cursor-pointer"
               size={30}
               strokeWidth={3}
               onClick={openToggleCard}
            />
            <div className="py-4 space-y-2 overflow-y-auto overflow-hidden scroll-auto">
               {
                  state.map(product => {
                     priceCounter += product.price * (product.quantity || 1)
                     return (
                        <CardCartShop key={product.id} productProps={product} />
                     )
                  })
               }
            </div>
            <small className="mt-auto text-2xl text-center">S/ {priceCounter}</small>
            <Link href={'/cart'}>
               <Button className="mt-auto"
                  bgColor="bg-bgBtnSecondary"
                  textColor="text-white"
               />
            </Link>
         </section>
         {
            openCard && <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#0003] z-20" onClick={openToggleCard}></div>
         }
      </>
   )
}

/* eslint-disable @next/next/no-img-element */
interface Props {
   productProps: ProductProps;
}
const CardCartShop = ({ productProps }: Props) => {
   const { removeCart } = useStoreCart()
   const { img: { src, alt, height, width }, name, description, id, quantity } = productProps;
   
   return (

      <div className="flex gap-2 items-center text-cente">
         <figure className="rounded-lg overflow-hidden h-full basis-[0%] min-w-[40%] md:min-w-[40%] relative">
            <img className="object-cover object-center h-full"
               src={src}
               alt={alt}
               width={width}
               height={height}
            />
         </figure>
         <span className="text-sm md:text-base">{name}</span>
         <button className="" onClick={() => removeCart(id)}>
            <CircleX size={35} strokeWidth={2} />
         </button>
      </div>
   )
}


// const cartRef = useRef()
//    useEffect(() => {
//       if (cartRef.current) {
//          cartRef.current.scrollIntoView({ behavior: 'smooth' });
//       }
//    }, [state]);

//    useEffect(() => {
//       setHydrated(true);
//    }, []);
{/* <div ref={cartRef} className="h-1"></div> */ }