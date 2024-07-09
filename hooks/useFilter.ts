'use client'
import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation';
import { ProductProps } from "@/lib/types";

export const useFilter = () => {
   const searchParams = useSearchParams();

   const [filter, setFilter] = useState({
      search: searchParams.get('search'),
      priceRange: {
         min: searchParams.get('min'),
         max: searchParams.get('max'),
      },
      category: searchParams.getAll('category'),
      brand: searchParams.getAll('brand'),
   })

   useEffect(() => {
      setFilter({
         search: searchParams.get('search'),
         priceRange: {
            min: searchParams.get('min'),
            max: searchParams.get('max'),
         },
         category: searchParams.getAll('category'),
         brand: searchParams.getAll('brand'),
      })
   }, [searchParams])

   const filterProducts = (dataProducts: ProductProps[]) => {
      return dataProducts.filter((product, index, arr) => {
         const search = filter.search === null ||
            product.name.toLowerCase().startsWith(filter.search.toLowerCase())

         const price = product.price >= parseFloat(filter.priceRange.min?? '') && product.price <= parseFloat(filter.priceRange.max?? '');

         const category = filter.category.length === 0 || filter.category.includes(product.category.toLowerCase())

         const brand = filter.brand.length === 0 || filter.brand.includes(product.brand.toLowerCase())

         return price && search && category && brand
      });
   };

   console.log('Desde useFilter: ', filter.search)
   return {
      filter,
      filterProducts
   }
}