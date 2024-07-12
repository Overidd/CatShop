'use client'
import { ProductProps } from "@/lib/types"
import { CardProducts } from "../cards";
import { useFilter } from "@/hooks/useFilter";
import { ShoppingBag } from "lucide-react";

interface Props {
   dataProducts: ProductProps[];
}

export const ContentProducts = ({ dataProducts }: Props) => {
   const { filterProducts } = useFilter()
   const datafilter = filterProducts(dataProducts)
   const isProduct = datafilter.length > 0

   return (
      <section className={`flex-1 grid ${!isProduct ? 'grid-cols-1' : 'grid-cols-2 gap-4 md:grid-cols-custom1720px 2xl:grid-cols-custom1920px'}`}>
         {
            isProduct
               ? datafilter.map(item => <CardProducts className="p-2 md:p-6" key={item.id} productProps={item} />)
               : <div className="w-fit self-center justify-self-center">
                  <ShoppingBag className="mx-auto" size={70} />
                  <p className="text-lg font-medium">No hay productos disponibles</p>
               </div>
         }
      </section>
   )
}
