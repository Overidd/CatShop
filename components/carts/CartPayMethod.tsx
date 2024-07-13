'use client'
import { useRouter } from "next/navigation"
import { Button } from "../button"
import { InputRadio } from "../common"
import { useStoreCart } from "../context/useStoreCart"

export const CartPayMethod = () => {
   const { state } = useStoreCart()
   const priceTotal = state.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);

   const navigation = useRouter()

   const handelNextPage = () => {
      navigation.push('/cart/paydireccion')
   }

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
            <p>Total: S/ {priceTotal}</p>
         </div>
         <Button
            bgColor="bg-bgBtnSecondary dark:bg-bgBtnSecondaryDark"
            text="Continuar con el pago"
            onChange={handelNextPage}
         />
         <p className="text-center text-base">✅Safe Payment Powered By SecureIMP™</p>
      </section>
   )
}
