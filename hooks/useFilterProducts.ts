import { ProductProps } from "@/lib/types"
import { useFilter } from "./useFilter"
import { useState } from "react"

export const useFilterProducts = (dataProducts: ProductProps) => {
   const [firstProdcts, setFirstProdcts] = useState()
   const {filter} = useFilter()

   
   const filterProducts = (dataProducts:ProductProps) => {
      
      
   }
   return {

   }
}
