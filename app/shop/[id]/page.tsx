/* eslint-disable @next/next/no-img-element */
'use client'
import { Button } from '@/components/button/Button'
import { ButtoIsCart } from '@/components/cards'
import { ImgDiscount, NumbrerDiscount } from '@/components/common/CardoffSale'
import { useStoreCart } from '@/components/context/useStoreCart'
import { CarouselCustom, CarouselItem } from '@/components/slider'
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
      <section className='flex flex-col md:flex-row gap-16'>

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

         {/* <CustomPaging /> */}
         <div className='text-left min-w-[47%] flex-col md:space-y-10 bg-bgPrimary rounded-xl p-5'>
            <h1 className='text-lg md:text-2xl font-bold text-center'>{name}</h1>
            <div className='space-y-8'>
               <p className='space-x-10'>
                  <small className='text-bgMenu font-bold text-3xl'>S/ {price - (price * ((discount || 1) / 100))}</small>
                  <small className='font-bold text-3xl bg-bgLateralcolumn p-2 rounded-xl'>{discount}%</small>
               </p>
               <small className='line-through text-xl opacity-70 text-left t'>{price}</small>
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
               <p className='font-medium'>Características</p>
               <p className='opacity-90'>{careInstructions}</p>
            </div>
            <div className=''>
               <ButtoIsCart product={product} className='bg-bgMenu text-xl' />
            </div>
         </div>
      </section >
   )
}
// ion, price, dimensions, color, benefits, careInstructions,

// ];

// import React, { Component } from "react";
// import Slider from "react-slick";

// function CustomPaging() {
//    const settings = {
//       customPaging: function (i: number) {
//          return (
//             <a>
//                <img src='/champuAntipulgas.webp' />
//             </a>
//          );
//       },
//       dots: true,
//       dotsClass: "slick-dots slick-thumb",
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//    };
//    return (
//       <div className="slider-container border">
//          <Slider {...settings}>
//             <div>
//                <img src={'/champuAntipulgas.webp'} />
//             </div>
//             <div>
//                <img src={'/champuAntipulgas.webp'} />
//             </div>
//             <div>
//                <img src={'/champuAntipulgas.webp'} />
//             </div>
//             <div>
//                <img src={'/champuAntipulgas.webp'} />
//             </div>
//          </Slider>
//       </div>
//    );
// }

