/* eslint-disable @next/next/no-img-element */
'use client'
import { ImgDiscount, NumbrerDiscount } from '@/components/common/CardoffSale'
import { useStoreCart } from '@/components/context/useStoreCart'
import { CarouselCustom, CarouselItem } from '@/components/slider'
import { Button } from '@/components/button/Button'
import { ButtoIsCart } from '@/components/cards'
import { dataProducts } from '@/data/dataProducts'
import { ProductProps } from '@/lib/types'

const page = ({ params }: { params: { id: string } }) => {
   const id = parseInt(params.id)
   console.log(id)
   const product = dataProducts.filter(item => item.id === id)

   if (!id || product) {
   }
   return (
      <div className='w-[90%] m-auto max-w-7xl'>
         {
            product.map(item => (
               <DetailsProduct product={item} key={item.id} />
            ))
         }
      </div>
   )
}

export default page

type Props = {
   product: ProductProps
}
const DetailsProduct = ({ product }: Props) => {
   const { img2, name, description, price, dimensions, color, benefits, careInstructions, discount, weight, img: { alt, src, width, height } } = product
   const { removeCart } = useStoreCart()
   const offSale = discount !== undefined


   return (
      <section className='grid grid-cols-1 md:grid-cols-2  gap-16 md:items-start'>

         <CarouselCustom className=''>
            <CarouselItem className='basis-full h-full'>
               <figure className='basis-[0%] h-full rounded-xl overflow-hidden relative'>
                  <img
                     className=' object-cover object-center w-full'
                     src={src} alt={alt} width={width} height={height} />
                  {
                     offSale &&
                     <NumbrerDiscount discount={discount} price={price} />
                  }
               </figure>
            </CarouselItem>
            {
               img2 &&
               <CarouselItem className='basis-full h-full'>
                  <figure className='basis-[0%] h-full rounded-xl overflow-hidden relative'>
                     <img
                        className=' object-cover object-center w-full'
                        src={img2.src} alt={alt} width={width} height={height} />
                     {
                        offSale &&
                        <NumbrerDiscount discount={discount} price={price} />
                     }
                  </figure>
               </CarouselItem>
            }

         </CarouselCustom>

         <div className='text-left flex-col space-y-5 md:space-y-10 bg-bgPrimary dark:bg-bgPrimaryDark rounded-xl p-5'>
            <h1 className='text-lg md:text-2xl font-bold text-center'>{name}</h1>
            <div className='space-y-8'>
               <p className='space-x-10'>
                  <small className='text-bgMenu dark:bg-bgMenuDark font-bold text-3xl'>S/
                     {
                        discount
                           ? price - (price * ((discount || 1) / 100))
                           : price
                     }</small>
                  {
                     discount &&
                     <small className='font-bold text-3xl bg-bgLateralcolumn dark:bg-bgLateralcolumnDark p-2 rounded-xl'>{discount}%</small>
                  }
               </p>
               {discount && <small className='line-through text-xl opacity-70 text-left'>{price}</small>
               }
            </div>

            <hr className='opacity-50' />
            <div className='grid grid-cols-2 gap-4'>

               <p className='font-medium'> Descripción </p>
               <p className='opacity-90'>{description}</p>

               <p className='font-medium'> Color </p>
               <p className='opacity-90'>{color}</p>

               <p className='font-medium'> Beneficios </p>
               <p className='opacity-90'>{benefits}</p>

               <p className='font-medium'> Dimencion </p>
               <p className='opacity-90' >{dimensions}</p>

               <p className='font-medium'>Peso</p>
               <p className='opacity-90'>{weight}</p>
               {
                  careInstructions !== 'null' && <p className='font-medium'>Características</p>
               }
               {
                  careInstructions !== 'null' && <p className='opacity-90'>{careInstructions}</p>
               }

            </div>
            <div className=''>
               <ButtoIsCart product={product} className='bg-bgMenu dark:bg-bgMenuDark text-xl' />
            </div>
         </div>
      </section >
   )
}