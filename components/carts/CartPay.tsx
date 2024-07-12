/* eslint-disable @next/next/no-img-element */
'use client'
import { ProductProps } from "@/lib/types"
import { useStoreCart } from "../context/useStoreCart"
import { X, Plus, Minus } from "lucide-react"
import { Button } from "../button/Button"
import { useState, Suspense, useEffect } from "react"
import { SkeletonCart, SkeletonCard } from "../common/SkeletonCard"
import { useRouter } from "next/navigation"
import { PriceDiscount,ImgDiscount } from "../common/CardoffSale"

export const CartPay = () => {
   const { state } = useStoreCart()
   const navigation = useRouter()
   let priceCounter = 0;
   const handelNextPage = () => {
      navigation.push('/cart/paymetohod')
   }
   const backShop = () => {
      navigation.push('/shop')
   }

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

         <section className="bg-bgPrimary rounded-xl flex-1 p-8 gap-8 flex flex-col h-fit font-medium md:text-lg">
            <h2 className="text-center text-xl md:text-2xl">Resumen de compra</h2>
            <p className="">
               <span>SubTotal</span>
               <span className="float-right ">S/ {priceCounter}</span>
            </p>

            <p>
               <span>Descuento</span>
               <span className="float-right ">S/ 0.00</span>
            </p>
            <p>
               <span>Total</span>
               <span className="float-right ">S/ {priceCounter}</span>
            </p>
            <div className="mt-auto space-y-4">
               <Button text="Iniciar pago" onChange={handelNextPage} />
               <Button text="Volver a la tienda" bgColor="bg-bgLateralcolumn" onChange={backShop} />
            </div>
         </section>
      </div>
   )
}


interface Props {
   productProps: ProductProps;
}
const CartProducts = ({ productProps }: Props) => {
   const { img: { src, alt, height, width }, name, description, id, quantity, price, discount } = productProps;
   const { addTocart, subtractQuantity, removeCart } = useStoreCart()
   const offSale = discount !== undefined
   const [loagind, setloagind] = useState(false)
   useEffect(() => {
      const carga = setInterval(() => {

         setloagind(true)
      }, 800)
      return () => {
         clearInterval(carga)
      }
   }, [])
   if (!loagind) {
      return <SkeletonCart />
   }

   return (
      <div className="bg-bgPrimary relative grid grid-cols-2 gap-4 p-3 md:p-0 md:gap-0 justify-items-center md:gridColsCart rounded-xl">
         <figure className="md:w-[70%] w-full">
            <img src={src} alt={alt} className="w-full h-full object-cover object-center rounded-xl md:rounded-none" />

            {
               offSale && <ImgDiscount discount={discount}/>
            }
         </figure>
         <p className="self-center text-lg text-balance">{name}</p>
         {/* <small className="self-center font-medium text-lg md:col-auto">S/ {price}</small> */}
         {
            offSale
               ? <PriceDiscount  discount={discount} price={price}/>
               : <small className=" font-medium md:text-lg self-center ">S/ {price}</small>
         }

         <div className="self-center space-x-2 md:col-auto row-span-1 ">
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

         <small className="hidden md:block self-center font-medium text-lg">
            S/ {(quantity || 1) * price}
         </small>

         <button className="cursor-pointer absolute top-2 right-2 md:static"
            onClick={() => removeCart(id)}
         >
            <X className="self-center" size={27}></X>
         </button>
      </div>
   )
}


