'use client'
import { ProductProps } from "@/lib/types"
import { CardProducts } from "../cards";
import { useFilter } from "@/hooks/useFilter";
import { useStoreCart } from "../context/useStoreCart";

interface Props {
   dataProducts: ProductProps[];
}

export const ContentProducts = ({ dataProducts }: Props) => {
   const { filterProducts } = useFilter()
   const datafilter = filterProducts(dataProducts)
   const { state } = useStoreCart()

   const checkProductCart = (product: ProductProps) => {
      return state.some(item => item.id === product.id)
   }
   console.log('DataFilter',)
   return (
      <section className="flex-1 grid grid-cols-2 gap-4 md:grid-cols-custom1720px 2xl:grid-cols-custom1920px ">
         {
            datafilter.map(item => {
               const isProductCart = checkProductCart(item)
               return <CardProducts className="p-2 md:p-6" key={item.id} productProps={item} isProductCart={isProductCart}/>
            }
            )
         }
      </section>
   )
}
