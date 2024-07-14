'use client'
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation"
import { useState } from "react";

interface Props {
   category: string;
   className: string;
   discount: string;
}

export const ButtonOffer = ({ category, discount, className }: Props) => {
   const navigator = useRouter()
   const [iconLoading, setIconLoading] = useState(false)
   const navigateToShop = (category: string) => {
      navigator.push(`/shop/?category=${category}&discount=${discount}`)
   }
   const handelFuncion = () => {
      setIconLoading(!iconLoading)
      navigateToShop(category)
   }
   return (
      <button
         className={` ${className}`}
         onClick={() => handelFuncion()}
      >
         {iconLoading ?
            <Loader2 className='animate-spin'
               size={25}
            />
            : 'Ir a comprar'
         }

      </button>
   )
}
