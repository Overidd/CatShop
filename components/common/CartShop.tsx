'use client'
import { useEffect, useState } from "react"
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

   return (
      <section className={`bg-bgLateralcolumn fixed p-5 top-0 bottom-0 right-0 w-[80dvw] md:w-[20rem] z-30 transition-[transform] flex flex-col gap-2 ${openCard ? 'translate-x-0' : 'translate-x-[120%]'}`}>
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
         <div className="mt-auto text-center space-y-4">
            <small className=" text-2xl">S/ {priceCounter}</small>
            <Button className="mt-auto"
               bgColor="bg-bgBtnSecondary"
               textColor="text-white"
            />
         </div>
      </section>
   )
}

/* eslint-disable @next/next/no-img-element */
interface Props {
   productProps: ProductProps;
}
const CardCartShop = ({ productProps }: Props) => {
   const { removeCart, subtractQuantity, addTocart } = useStoreCart()
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

            <div className="absolute space-x-4 inset-0 m-auto h-fit w-fit font-bold text-2xl text-black">
               <button className="rounded-[50%] bg-white w-8" onClick={() => subtractQuantity(id)}>-</button>
               <button className="rounded-[50%] bg-white w-8" onClick={() => addTocart(productProps)}>+</button>
               <span className="block rounded-[50%] bg-white w-8 text-center">{quantity}</span>
            </div>
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
