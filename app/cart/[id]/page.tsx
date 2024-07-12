'use client'
import { CartPayDireccion } from "@/components/carts/CartPayDireccion"
import { CartPayMethod } from "@/components/carts/CartPayMethod"
import { useRouter } from "next/navigation"


const Page = ({ params }: { params: { id: string } }) => {
   const { id } = params;
   const navigation = useRouter()
   const paymetohod = 'paymetohod' === id;
   const paydireccion = 'paydireccion' === id
   if (id !== 'paymetohod' && id !== 'paydireccion') {
      navigation.back()
   }
   return (
      <>
         {
            paymetohod && <CartPayMethod />
         }
         {
            paydireccion && <CartPayDireccion />
         }
      </>
   )
}

export default Page