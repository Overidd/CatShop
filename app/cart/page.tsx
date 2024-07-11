import { CartPay } from "@/components/carts/CartPay"
import { ChevronLeft } from 'lucide-react'
import LogoCatshop from '@/public/LogoCatshop.png'
import Image from "next/image"
import Link from 'next/link'
import { CartPayMethod } from "@/components/carts/CartPayMethod"
import { CartPayDireccion } from "@/components/carts/CartPayDireccion"

const page = () => {
   return (
      <div className="min-h-dvh w-[90%] m-auto space-y-5" >

         <header className="bg-bgMenu basis-[30%] rounded-lg mt-4 p-2">
            <Image className="cursor-pointer"
               src={LogoCatshop}
               alt="Logo"
               width={100}
            />
         </header>

         <Link className="w-fit block" href={'/shop'}>
            <button className="align-middle">
               <ChevronLeft fontSize={50} strokeWidth={3} />
            </button>
            <span className="align-middle font-medium text-lg md:text-xl">Volver</span>
         </Link>

         <main>
            {/* <CartPay /> */}
            {/* <CartPayMethod/> */}
            <CartPayDireccion/>
         </main>

      </div>
   )
}

export default page
