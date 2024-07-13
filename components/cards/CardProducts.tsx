/* eslint-disable @next/next/no-img-element */
'use client'
import { ProductProps } from "@/lib/types"
import { Search, BaggageClaim, ShoppingCart } from 'lucide-react';
import { useStoreCart } from "../context/useStoreCart";
import { useEffect, useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import { SkeletonCard } from "../common/SkeletonCard";

interface Props {
   className?: string,
   productProps: ProductProps,
}

export const CardProducts = ({ productProps, className }: Props) => {
   const { id, name, price, discount, img: { alt, src, width, height } } = productProps;
   const navigation = useRouter();

   const offSale = discount !== undefined;;
   const discountPrice = price - (price * ((discount || 100) / 100));
   const toDetails = () => {
      console.log('Hola Search')
      navigation.push(`/shop/${id}`)
   }
   return (
      <div className={`text-center bg-bgCard rounded-xl flex flex-col gap-2 justify-between p-3 md:p-4 xl:p-5 ${className}`}>

         <figure className="bg-[#074f86] basis-[0%] min-h-[38%] md:min-h-[43%] 2xl:min-h-[45%] min-w-full relative cursor-pointer productImg overflow-hidden rounded-xl select-none"
            onClick={() => toDetails()}
         >

            <img className="w-full h-full object-cover object-center rounded-xl"
               src={src}
               alt={alt}
            />
            <Search className="absolute top-0 left-0 right-0 bottom-0 m-auto iconSearch"
               size={40}
            />
            {
               offSale && <div className="absolute bg-bgInput left-0 top-0 p-[0.4rem] px-3 font-bold text-xl discount">
                  <small>-{discount}%</small>
               </div>
            }
         </figure>

         <h5 className="opacity-80 text-sm md:text-xl text-balance">{name}</h5>

         {
            offSale
               ? <p className="text-base md:text-xl">
                  <small className="line-through text-lg opacity-80">{price}</small> S/ <small className=" md:text-xl">{discountPrice}</small>
               </p>
               : <small className="text-base md:text-xl">S/ {price}</small>
         }

         <ButtoIsCart product={productProps} />
      </div>
   )
}

type ButtoType = {
   product: any;
   className?: string;
   margin?: string ;
}

export const ButtoIsCart = ({ product,className,margin }: ButtoType) => {
   const { addTocart, state } = useStoreCart()

   const checkProductCart = (product: ProductProps) => {
      return state.some(item => item.id === product.id) ? true : false
   }

   // Renderiza algo diferente en el lado del servidor para evitar errores
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
   }, []);
   if (!loading) {
      return <div className={`bg-bgLateralcolumn py-3 md:py-4 rounded-xl ${className} ${margin}`}>Comprar</div>
   }
   return (
      <button className={` text-white rounded-xl w-full relative overflow-hidden ${margin}`}
         onClick={() => addTocart(product)}>

         <div className={`bg-bgLateralcolumn py-3 md:py-4 ${className}`}>Comprar</div>
         <div className={`py-3 md:py-4 bg-bgLateralcolumn absolute transition translate-y-[100%] inset-0 ${className} ${checkProductCart(product) ? 'translate-y-[1px]' : 'translate-y-full'}`}>
            <BaggageClaim className="mx-auto" />
         </div>
      </button>
   )
}

type SearchProps = {
   productId: number,
}
const SearchDetails = ({ productId }: SearchProps) => {
   const navigation = useRouter()

   const toDetails = () => {
      console.log('Hola Search')
      navigation.push(`/shop/${productId}`)
   }

   return (
      <>

      </>
   )
} 
