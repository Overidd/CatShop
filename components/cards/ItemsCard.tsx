'use client'
import { Search, BaggageClaim, Heart, Loader2 } from 'lucide-react';
import { ProductProps } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFavoriteProducts, useStoreCart } from "@/components/context";

type ButtoType = {
   product: any;
   className?: string;
   margin?: string;
}
export const ButtoIsCart = ({ product, className, margin }: ButtoType) => {
   const { addTocart, state } = useStoreCart();

   const checkProductCart = (product: ProductProps) => {
      return state.some(item => item.id === product.id) ? true : false;
   }

   // Renderiza algo diferente en el lado del servidor para evitar errores
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
   }, []);
   if (!loading) {
      return <div className={`bg-bgLateralcolumn dark:bg-bgLateralcolumnDark py-3 md:py-4 rounded-xl ${className} ${margin}`}>Comprar</div>
   }
   return (
      <button className={` text-white rounded-xl w-full relative overflow-hidden ${margin}`}
         onClick={() => addTocart(product)}>

         <div className={`bg-bgLateralcolumn dark:bg-bgLateralcolumnDark py-3 md:py-4 ${className}`}>Comprar</div>
         <div className={`py-3 md:py-4 bg-bgLateralcolumn dark:bg-bgLateralcolumnDark absolute transition translate-y-[100%] inset-0 ${className} ${checkProductCart(product) ? 'translate-y-[1px]' : 'translate-y-full'}`}>
            <BaggageClaim className="mx-auto" />
         </div>
      </button>
   )
}

type FavoriteType = {
   id: number;
   className?: string;
   size?: number;
   color?: string;
}
export const IconFavorite = ({ id, className, size = 30, color = '#ef8221' }: FavoriteType) => {
   const { addRemoveFavorite, isFavorite } = useFavoriteProducts();

   // Renderiza algo diferente en el lado del servidor para evitar errores
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
   }, []);
   return (
      <Heart
         className={`active:animate-ping ${className} ${color}`}
         onClick={() => addRemoveFavorite(id)}
         size={size}
         strokeWidth={2}
         fill={loading && isFavorite(id) ? color : 'none'}
      />
   )
}

type IconDetailsType = {
   className?: string;
   id: number;
}
export const IconDetails = ({ id, className }: IconDetailsType) => {
   const navigation = useRouter();
   const [iconLoading, setIconLoading] = useState(false)

   const toDetails = () => {
      navigation.push(`/shop/${id}`);
   }
   return (
      <>
         <button
            className={`w-fit h-fit absolute top-0 left-0 right-0 bottom-0 m-auto iconSearch transition hover:scale-110 ${className} ${iconLoading ? 'opacity-100' : ''}`}
            onClick={() => setIconLoading(!iconLoading)}
         >
            {
               iconLoading
                  ? <Loader2 className='animate-spin'
                     size={35}
                  />
                  : <Search
                     size={35}
                     onClick={() => toDetails()}
                  />
            }
         </button>
      </>
   )
}