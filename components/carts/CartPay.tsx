/* eslint-disable @next/next/no-img-element */
'use client'
import { ProductProps } from "@/lib/types"
import { useStoreCart } from "../context/useStoreCart"
import { X, Plus, Minus } from "lucide-react"
import { Button } from "../button/Button"


export const CartPay = () => {
   const { state } = useStoreCart()
   let priceCounter = 0;

   return (
      <div className="flex gap-4 flex-col md:flex-row text-[#fffd]">
         <section className="basis-[70%] space-y-4" >
            <div className="bg-bgPrimary hidden md:grid gridColsCart py-3 justify-items-center text-lg rounded-lg font-medium">
               <span></span>
               <span>Producto</span>
               <span>Precio</span>
               <span>Cantidad</span>
               <span>Subtotal</span>
               <span>Cerrar</span>
            </div>
            {
               state.map(product => {
                  priceCounter += product.price * (product.quantity || 1)
                  return <CartProducts key={product.id} productProps={product} />
               })
            }
         </section >

         <section className="bg-bgPrimary rounded-xl flex-1 p-4 space-y-4">
            <h2 className="text-center text-xl font-medium">Resumen de compra</h2>
            <p className="">
               <span className="font-medium">SubTotal</span>
               <span className="float-right font-medium">S/ {priceCounter}</span>
            </p>

            <p className="">
               <span className="font-medium">Descuento</span>
               <span className="float-right font-medium">S/ 0.00</span>
            </p>
            <p className="">
               <span className="font-medium">Total</span>
               <span className="float-right font-medium">S/ {priceCounter}</span>
            </p>

            <Button text="Iniciar pago" />
            <Button text="Volver ala tienda" bgColor="bg-bgLateralcolumn" />
         </section>
      </div>
   )
}


interface Props {
   productProps: ProductProps;
}
const CartProducts = ({ productProps }: Props) => {
   const { img: { src, alt, height, width }, name, description, id, quantity, price } = productProps;
   const { addTocart, subtractQuantity, removeCart } = useStoreCart()
   return (
      <div className="bg-bgPrimary relative grid grid-cols-2 gap-4 p-4 md:p-2 md:gap-0 justify-items-center md:gridColsCart rounded-xl">
         <figure className="rounded-xl overflow-hidden ">
            <img src={src} alt={alt} className="w-full h-full object-cover object-center" />
         </figure>
         <p className="self-center">{name}</p>
         <small className="self-center font-medium text-xl col-span-2 md:col-auto">S/ {price}</small>

         <div className="self-center space-x-2 col-span-2 md:col-auto">
            <button className="bg-bgLateralcolumn rounded-[50%] py-[0.6rem] px-[0.6rem]"
               onClick={() => subtractQuantity(id)}
            >
               <Minus size={16} />
            </button>
            <small className="text-lg">{quantity}</small>
            <button className="bg-bgLateralcolumn rounded-[50%] py-[0.6rem] px-[0.6rem]"
               onClick={() => addTocart(productProps)}
            >
               <Plus size={16} />
            </button>
         </div>

         <small className="hidden md:block self-center font-medium text-xl">S/ {(quantity || 1) * price}</small>
         <button className="cursor-pointer absolute top-2 right-2 md:static"
            onClick={() => removeCart(id)}
         >
            <X className="self-center"></X>
         </button>
      </div>
   )
}


