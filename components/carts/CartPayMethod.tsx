'use client'
import { Button } from "../button"
import { InputRadio, PurchaceTrue } from "../common"
import { useStoreCart } from "../context/useStoreCart"
import { useEffect, useState } from "react"

export const CartPayMethod = () => {
   const { state } = useStoreCart()
   const [purchace, setPurchace] = useState(false)
   const priceTotal = state.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
   const [client, setclient] = useState(false)

   useEffect(() => {
      setclient(!client)
   }, [])


   return (
      <section className="bg-bgPrimary dark:bg-bgPrimaryDark p-5 rounded-xl space-y-8 w-fit m-auto text-base md:text-lg animate__animated animate__slideInRight">
         <h1 className="text-xl md:text-xl font-medium text-center">Elige el método de pago</h1>

         <form action="" className="space-y-4">
            <InputRadio
               className="block"
               id="card"
               name="method"
               text="Tarjeta de (creadio o debito)"
            />
            <InputRadio
               className="block"
               id="Yape"
               name="method"
               text="Yape"
            />
            <InputRadio
               className="block"
               id="plin"
               name="method"
               text="Plin"
            />
            <InputRadio
               className="block"
               id="cash"
               name="method"
               text="En efectivo (Delivery)"
            />
         </form>

         <div className="text-center space-y-2">
            <h2 className="text-xl md:text-2xl">Detalles</h2>
            <p>Total: S/ {client && priceTotal}</p>
         </div>
         <Button
            bgColor="bg-bgBtnSecondary dark:bg-bgBtnSecondaryDark"
            text="Continuar con el pago"
            onChange={() => setPurchace(!purchace)}
         />
         <p className="text-center text-base">✅Safe Payment Powered By SecureIMP™</p>

         {
            purchace && (
               <PurchaceTrue />
            )
         }
      </section>
   )
}
