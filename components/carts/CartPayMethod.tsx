'use client'
import { Button } from "../button/Button"
import { InputRadio } from "../common/Inputs"
import { useStoreCart } from "../context/useStoreCart"


export const CartPayMethod = () => {
   const { state } = useStoreCart()
   const priceTotal = state.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);

   return (
      <section className="bg-bgPrimary p-5 rounded-xl space-y-8 w-fit m-auto text-base md:text-lg ">
         <h1 className=" text-xl md:text-2xl font-medium text-center">Elige el método de pago</h1>

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
            <p>Total: S/ {priceTotal}</p>
         </div>
         <Button bgColor="bg-bgBtnSecondary" text="Continuar con el pago" />
         <p className="text-center">✅Safe Payment Powered By SecureIMP™</p>
      </section>
   )
}
