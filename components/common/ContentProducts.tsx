'use client'
import { ProductProps } from "@/lib/types"
import { CardProducts } from "../cards";
import { useFilter } from "@/hooks/useFilter";

interface Props {
   dataProducts: ProductProps[];
}

export const ContentProducts = ({ dataProducts }: Props) => {
   const { filterProducts } = useFilter()
   const datafilter = filterProducts(dataProducts)

   console.log('DataFilter', datafilter)
   return (
      <section className="flex-1 grid grid-cols-2 gap-4 md:grid-cols-custom-products">
         {
            datafilter.map(product => (
               <CardProducts key={product.id} productProps={product} className="p-2 md:p-6" />
            ))
         }
      </section>
   )
}
