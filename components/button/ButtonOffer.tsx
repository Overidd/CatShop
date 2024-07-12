'use client'
import { useRouter } from "next/navigation"

interface Props {
   category: string;
   className: string;
   discount: string;
}

export const ButtonOffer = ({ category, discount, className }: Props) => {
   const navigator = useRouter()
   const navigateToShop = (category: string) => {
      navigator.push(`/shop/?category=${category}&discount=${discount}`)
   }
   return (
      <button
         className={` ${className}`}
         onClick={() => navigateToShop(category)}
      >
         Ir a comprar
      </button>
   )
}
