'use client'
import { ChevronLeft } from 'lucide-react'
import {useRouter} from 'next/navigation'

export const ReturnBack = () => {
   const navigator = useRouter()
   const returnBack = ()=>{
      navigator.back()
   }
   return (
      <button className="w-fit block" onClick={returnBack}>
            <ChevronLeft fontSize={50} strokeWidth={3} className='inline-block'/>
         <span className="align-middle font-medium text-lg md:text-xl">Volver</span>
      </button>
   )
}
