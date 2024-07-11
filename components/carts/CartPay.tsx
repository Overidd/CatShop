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
         <section className="basis-[75%] space-y-4" >
            <div className="bg-bgLateralcolumn hidden md:grid gridColsCartHeader py-3 justify-items-center text-lg rounded-lg font-medium">
               <span></span>
               <span>Producto</span>
               <span>Precio</span>
               <span>Cantidad</span>
               <span>Subtotal</span>
               <span>Eliminar</span>
            </div>
            {
               state.map(product => {
                  priceCounter += product.price * (product.quantity || 1)
                  return <CartProducts key={product.id} productProps={product} />
               })
            }
         </section >

         <section className="bg-bgPrimary rounded-xl flex-1 p-8 gap-8 flex flex-col h-fit">
            <h2 className="text-center text-2xl font-medium">Resumen de compra</h2>
            <p className="">
               <span className="font-medium text-xl ">SubTotal</span>
               <span className="float-right font-medium text-xl">S/ {priceCounter}</span>
            </p>

            <p className="">
               <span className="font-medium text-xl">Descuento</span>
               <span className="float-right font-medium text-xl">S/ 0.00</span>
            </p>
            <p className="">
               <span className="font-medium text-xl">Total</span>
               <span className="float-right font-medium text-xl">S/ {priceCounter}</span>
            </p>
            <div className="mt-auto space-y-4">
               <Button text="Iniciar pago" className="text-xl" />
               <Button text="Volver a la tienda" bgColor="bg-bgLateralcolumn" className="text-xl" />
            </div>
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
      <div className="bg-bgPrimary relative grid grid-cols-2 gap-4 p-3 md:p-0 md:gap-0 justify-items-center md:gridColsCart rounded-xl">
         <figure className="md:w-[70%] w-full">
            <img src={src} alt={alt} className="w-full h-full object-cover object-center rounded-xl md:rounded-none" />
         </figure>
         <p className="self-center text-lg text-balance 2xl:text-[1.4rem]">{name}</p>
         <small className="self-center font-medium text-xl md:col-auto">S/ {price}</small>

         <div className="self-center space-x-2 md:col-auto row-span-1 ">
            <button className="bg-bgLateralcolumn rounded-[50%] py-[0.6rem] px-[0.6rem]"
               onClick={() => subtractQuantity(id)}
            >
               <Minus size={16} />
            </button>
            <small className="text-xl">{quantity}</small>
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
            <X className="self-center" size={35}></X>
         </button>
      </div>
   )
}


