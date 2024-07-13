/* eslint-disable @next/next/no-img-element */
'use client'
import { Button } from '@/components/button/Button'
import { CarouselCustom, CarouselItem } from '@/components/slider'
import { dataProducts } from '@/data/dataProducts'
import { ProductProps } from '@/lib/types'
// import { useRouter } from 'next/navigation'

const page = ({ params }: { params: { id: string } }) => {
   // const navigation = useRouter()
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
   const { name, description, price, img: { alt, src, width, height } } = product

   return (
      <section className='flex flex-col md:flex-row gap-8'>
         {/* 
         <CarouselCustom className='border'>
            <CarouselItem className='basis-full h-full'>
               <figure className='basis-[0%] h-[29rem] rounded-xl overflow-hidden'>
                  <img
                     className=' object-cover object-center w-full'
                     src={src} alt={alt} width={width} height={height} />
               </figure>
            </CarouselItem>
            <CarouselItem className='basis-full h-full'>
               <figure className='basis-[0%] h-[29rem] rounded-xl overflow-hidden'>
                  <img
                     className=' object-cover object-center w-full'
                     src={src} alt={alt} width={width} height={height} />
               </figure>
            </CarouselItem>
            <CarouselItem className='basis-full h-full'>
               <figure className='basis-[0%] h-[29rem] rounded-xl overflow-hidden'>
                  <img
                     className=' object-cover object-center w-full'
                     src={src} alt={alt} width={width} height={height} />
               </figure>
            </CarouselItem>

         </CarouselCustom> */}

         <CustomPaging />
         <div className='text-center min-w-[50%] flex-col gap-4'>
            <h1 className='text-lg md:text-2xl font-medium'>{name}</h1>
            <small className='text-bgMenu font-bold text-xl'>S/ {price}</small>
            <p>{description}</p>

            <Button text='Agregar al carrito' className='mt-auto' />
         </div>
      </section >
   )
}

{/* <CarouselCustom> */ }
{/* </CarouselItem> */ }

const productos = [
   {
      id: 2010,
      price: 67,
      name: "Ratón de juguete para gatos",
      description: "Ratón de juguete con sonido para estimular el instinto cazador de tu gato.",
      brand: "whiskers",
      availability: true,
      category: "juguete",
      date: "2023-01-01",
      img: {
         src: "/imgProducts/ratonJuguete.jpg",
         alt: "Product",
         width: 300,
         height: 300
      },
      weight: "50g",
      dimensions: "5cm x 5cm x 5cm",
      color: "Multicolor",
      benefits: "Estimulación mental y ejercicio físico",
      careInstructions: "Lavar con agua y jabón neutro"
   },
   {
      id: 2011,
      price: 120,
      name: "Cama para gatos",
      description: "Cama cómoda y suave para el descanso de tu gato.",
      brand: "cosycat",
      availability: true,
      category: "accesorio",
      date: "2023-02-10",
      img: {
         src: "/imgProducts/camaGato.jpg",
         alt: "Product",
         width: 400,
         height: 300
      },
      weight: "500g",
      dimensions: "50cm x 40cm x 20cm",
      color: "Gris",
      benefits: "Confort y descanso",
      careInstructions: "Lavar a máquina"
   },
   {
      id: 2012,
      price: 35,
      name: "Pelota de goma para perros",
      description: "Pelota de goma duradera para horas de diversión con tu perro.",
      brand: "doggyplay",
      availability: true,
      category: "juguete",
      date: "2023-03-15",
      img: {
         src: "/imgProducts/pelotaGoma.jpg",
         alt: "Product",
         width: 300,
         height: 300
      },
      weight: "200g",
      dimensions: "10cm x 10cm x 10cm",
      color: "Rojo",
      benefits: "Ejercicio físico y entretenimiento",
      careInstructions: "Lavar con agua y jabón"
   },
   {
      id: 2013,
      price: 250,
      name: "Rascador para gatos",
      description: "Rascador alto con múltiples plataformas para el entretenimiento de tu gato.",
      brand: "felinefun",
      availability: true,
      category: "accesorio",
      date: "2023-04-20",
      img: {
         src: "/imgProducts/rascadorGato.jpg",
         alt: "Product",
         width: 400,
         height: 600
      },
      weight: "3000g",
      dimensions: "150cm x 50cm x 50cm",
      color: "Beige",
      benefits: "Ejercicio y diversión",
      careInstructions: "Limpiar con paño húmedo"
   },
   {
      id: 2014,
      price: 80,
      name: "Collar luminoso para perros",
      description: "Collar luminoso para la seguridad de tu perro durante paseos nocturnos.",
      brand: "brightpaws",
      availability: true,
      category: "accesorio",
      date: "2023-05-30",
      img: {
         src: "/imgProducts/collarLuminoso.jpg",
         alt: "Product",
         width: 300,
         height: 300
      },
      weight: "100g",
      dimensions: "40cm x 2cm x 1cm",
      color: "Azul",
      benefits: "Seguridad y visibilidad",
      careInstructions: "Limpiar con paño húmedo"
   }
];

import React, { Component } from "react";
import Slider from "react-slick";

function CustomPaging() {
   const settings = {
      customPaging: function (i: number) {
         return (
            <a>
               <img src='/champuAntipulgas.webp' />
            </a>
         );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
   };
   return (
      <div className="slider-container border">
         <Slider {...settings}>
            <div>
               <img src={'/champuAntipulgas.webp'} />
            </div>
            <div>
               <img src={'/champuAntipulgas.webp'} />
            </div>
            <div>
               <img src={'/champuAntipulgas.webp'} />
            </div>
            <div>
               <img src={'/champuAntipulgas.webp'} />
            </div>
         </Slider>
      </div>
   );
}



