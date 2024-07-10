'use client'
import { useContext } from "react"
import { ProductContext } from "./ProductsProvider"

export const useStoreCart = () => {
   const contexto = useContext(ProductContext)

   if (!contexto) {
      throw new Error("useStoreCart debe estar ser usado dentro de un ContextoProvider")
   }
   return contexto
}