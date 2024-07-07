/* eslint-disable @next/next/no-img-element */
'use client'
import { Header, Category, CardOffer, Footer } from "@/components/common";
import {CarouselCustom, CarouselItem} from '@/components/slider'
import { CardOfferProps, CategoryProps, ProductProps } from "@/lib/types";
import { CardProducts } from "@/components/common/CardProducts";
import { CarouselSlick } from "@/components/slider/CarouselSlick";

const dataCategory: CategoryProps[] = [
   {
      id: 12,
      text: 'Alimentos',
      img: {
         src: '',
         alt: 'Alimentos',
         width: 200,
         height: 200,
      }
   },

   {
      id: 13,
      text: 'Juguetes',
      img: {
         src: '',
         alt: 'Juguetes',
         width: 200,
         height: 200,
      }
   },
   {
      id: 14,
      text: 'Accesorios',
      img: {
         src: '',
         alt: 'Accesorios',
         width: 200,
         height: 200,
      }
   },
   {
      id: 15,
      text: 'Ropa',
      img: {
         src: '',
         alt: 'Ropa',
         width: 200,
         height: 200,
      }
   },
   {
      id: 16,
      text: 'Higiene',
      img: {
         src: '',
         alt: 'Higiene',
         width: 200,
         height: 200,
      }
   },
   {
      id: 17,
      text: 'Salud',
      img: {
         src: '',
         alt: 'Salud',
         width: 200,
         height: 200,
      }
   },
]
const dataProductsOffers: ProductProps[] = [
   {
      id: 2000,
      description: `Diversión garantizada para tu gato con nuestra pelotita juguete`,
      price: 150,
      textBtn: 'Buy',
      img: {
         src: '/imgProducts/products1.webp',
         alt: 'Product',
         width: 300,
         height: 300,
      }
   },
   {
      id: 2001,
      description: ` Juguete Para Gato Dispensador De Croceta  Juego Resorte`,
      price: 150,
      textBtn: 'Buy',
      img: {
         src: '/imgProducts/products2.png',
         alt: 'Product',
         width: 300,
         height: 300,
      }
   },
   {
      id: 2002,
      description: 'Product 3',
      price: 150,
      textBtn: 'Buy',
      img: {
         src: '/imgProducts/products3.jpg',
         alt: 'Product',
         width: 300,
         height: 300,
      }
   },
   {
      id: 2003,
      description: 'Product 4',
      price: 150,
      textBtn: 'Buy',
      img: {
         src: '/imgProducts/products4.jpg',
         alt: 'Product',
         width: 300,
         height: 300,
      }
   },
]
const DataCarousel: CardOfferProps[] = [
   {
      id: 154,
      img: '/imgOffers/catoffers1.png',
      alt: 'Accesorios para gatos',
      textBtn: 'buy',
   },
   {
      id: 451,
      img: '/imgOffers/catoffers2.png',
      alt: 'Productos para gatos',
      textBtn: 'buy',
   }
]

export default function Home () {

   return (
      <div className="bg-bgSecondary space-y-10 overflow-hidden">
         <Header className="space-y-10 pb-3">
            <CarouselSlick speed={300} className="">
               {
                  DataCarousel.map((item) => (
                     <CardOffer key={item.id} cardOfferProps={item} className="h-[16rem] md:h-[20rem] 2xl:h-[25rem] outline-none" />
                  ))
               }
            </CarouselSlick>
         </Header>

         <main className="space-y-10 w-[90%] m-auto max-w-7xl" id="scrol-main" >
            <Category category={dataCategory} />

            <section className="space-y-10">
               <h2 className="text-center font-bold text-xl md:text-3xl">Mejores ofertas</h2>

               <CarouselCustom>
                  {
                     dataProductsOffers.map((item) => (
                        <CarouselItem key={item.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                           <CardProducts productProps={item} className="h-[22rem] md:h-[27rem] p-2 md:p-6" />
                        </CarouselItem>
                     ))
                  }
               </CarouselCustom>
               {/* {
                  } */}
            </section>
         </main>

         <Footer />
      </div>
   );
}
{/* <CarouselCustom data={DataCarousel} Element={CardOffer} className="md:h-[27rem]" /> */ }
{/* 
   <CarouselCustom data={dataProductsOffers} Element={CardProducts} className="basis-1/2 md:basis-1/3 lg:basis-1/4" /> */
}