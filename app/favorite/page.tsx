/* eslint-disable @next/next/no-img-element */
'use client'
import { CardProducts } from "@/components/cards"
import { useFavoriteProducts } from "@/components/context"
import { dataProducts } from "@/data"
import { ProductProps } from "@/lib/types"
import { useEffect, useState } from "react"
import { HeartOff } from 'lucide-react';

const page = () => {
   return (
      <div className="w-[90%] max-w-7xl mx-auto space-y-4">
         <h1 className="font-medium text-2xl">Productos favoritos</h1>
         <hr />
         <main className="min-h-[50dvh] grid relative gap-5 md:grid-cols-custom1720px 2xl:grid-cols-custom1920px">
            <Favorite />
         </main>
      </div>
   )
}
export default page

const Favorite = () => {
   const { favoriteItems } = useFavoriteProducts();
   const [isFavorite, setIsFavorite] = useState<ProductProps[]>([]);

   useEffect(() => {
      const product = dataProducts.filter(item => favoriteItems.includes(item.id));
      setIsFavorite(product);
   }, [favoriteItems]);

   console.log(isFavorite);

   return (
      <>
         {
            isFavorite.length > 0
               ? isFavorite.map(item => (
                  <CardProducts key={item.id} productProps={item} />
               ))
               : <div className="absolute w-fit h-fit inset-0 m-auto">
                  <HeartOff size={100}/>
               </div>
         }
      </>
   );
};

