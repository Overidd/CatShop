/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { Button } from "../button/Button"


export const PurchaceTrue = () => {
   return (
      <div className="fixed inset-0 w-[60%] h-[60%] m-auto space-y-4 p-4 rounded-xl bg-bgLateralcolumn flex">
         <div className="m-auto space-y-4">
            <img src="/animal_feliz.png" alt="" className="mx-auto w-[10rem] animate-bounce" />
            <p className="text-2xl text-center">
               Compra exitosa

            </p>
            <span className="block w-full text-center text-2xl font-bold">¡Gracias!
            </span>
            <Link href={'/shop'} className="block">
               <Button text="Finalizar" className="font-medium"/>
            </Link>
         </div>
      </div>
   )
}
