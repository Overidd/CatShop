/* eslint-disable @next/next/no-img-element */
import { Header } from "@/components/common";
import { CardCategory, CardOffer, CardProducts } from "@/components/cards";
import { CarouselCustom, CarouselItem, CarouselSlick } from '@/components/slider'

import { CardOfferProps, CategoryProps, ProductProps } from "@/lib/types";
import { Menu } from "@/components/navBar";
const dataCategory: CategoryProps[] = [
   {
      id: 12,
      category: 'Alimentos',
      date: '2023-01-01',
      img: {
         src: '/category/categoryAlimento.png',
         alt: 'Alimentos',
         width: 200,
         height: 200,
      }
   },

   {
      id: 13,
      category: 'Juguetes',
      date: '2023-01-01',
      img: {
         src: '/category/categoryJuguete.png',
         alt: 'Juguetes',
         width: 200,
         height: 200,
      }
   },
   {
      id: 14,
      category: 'Accesorios',
      date: '2023-01-01',
      img: {
         src: '/category/categoryAccesorios.png',
         alt: 'Accesorios',
         width: 200,
         height: 200,
      }
   },
   {
      id: 15,
      category: 'Ropa',
      date: '2023-01-01',
      img: {
         src: '/category/categoryRopa.png',
         alt: 'Ropa',
         width: 200,
         height: 200,
      }
   },
   {
      id: 16,
      category: 'Higiene',
      date: '2023-01-01',
      img: {
         src: '/category/categoryHigiene.png',
         alt: 'Higiene',
         width: 200,
         height: 200,
      }
   },
   {
      id: 17,
      category: 'Salud',
      date: '2023-01-01',
      img: {
         src: '/category/categorySalud.png',
         alt: 'Salud',
         width: 200,
         height: 200,
      }
   },
]
const dataProductsOffers: ProductProps[] = [
   {
      id: 2000,
      price: 150,
      name: 'Product',
      description: `Diversión garantizada para tu gato con nuestra pelotita juguete`,
      brand: 'marca',
      availability: true,
      category: 'Juguetes',
      date: '2023-01-01',
      img: {
         src: '/imgProducts/products1.webp',
         alt: 'Product',
         width: 300,
         height: 300,
      }
   },
   {
      id: 2001,
      price: 150,
      name: 'Product',
      description: ` Juguete Para Gato Dispensador De Croceta  Juego Resorte`,
      brand: 'marca',
      availability: true,
      category: 'Juguetes',
      date: '2023-01-01',
      img: {
         src: '/imgProducts/products2.png',
         alt: 'Product',
         width: 300,
         height: 300,
      }
   },
   {
      id: 2002,
      price: 150,
      name: 'Product',
      description: 'Product 3',
      brand: 'marca',
      availability: true,
      category: 'Juguetes',
      date: '2023-01-01',
      img: {
         src: '/imgProducts/products3.jpg',
         alt: 'Product',
         width: 300,
         height: 300,
      }
   },
   {
      id: 2003,
      price: 150,
      name: 'Product',
      description: 'Product 4',
      brand: 'marca',
      availability: true,
      category: 'Juguetes',
      date: '2023-01-01',
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
      price: 150,
      name: 'Product',
      category: 'Juguetes',
      brand: 'marca',
      availability: true,
      date: '2023-01-01',
      img: {
         src: '/imgOffers/catoffers1.png',
         alt: 'Accesorios para gatos',
      }
   },
   {
      id: 451,
      price: 150,
      name: 'Product',
      category: 'Juguetes',
      brand: 'marca',
      availability: true,
      date: '2023-01-01',
      img: {
         src: '/imgOffers/catoffers2.png',
         alt: 'Productos para gatos',
      }
   }
]

export default function Home() {

   return (
      <div className="bg-bgPrimary space-y-8">
         <Menu />

         <div className="min-h-dvh flex flex-col gap-10 w-dvw bg-bgSecondary">
            <Header className="space-y-10 pb-3">
               <CarouselSlick speed={300} className="-mb-2">
                  {
                     DataCarousel.map((item) => (
                        <CardOffer key={item.id} cardOfferProps={item} className="h-[16rem] md:h-[20rem] 2xl:h-[25rem] outline-none" />
                     ))
                  }
               </CarouselSlick>
            </Header>

            <main className="space-y-10 w-[90%] m-auto max-w-7xl" id="scrol-main">
               <CardCategory category={dataCategory} />

               <section className="space-y-10">
                  <h2 className="text-center font-bold text-xl md:text-3xl">Mejores ofertas</h2>

                  <CarouselCustom>
                     {
                        dataProductsOffers.map((item) => (
                           <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4" key={item.id}>
                              <CardProducts className="h-[17rem] md:h-[27rem]" productProps={item} />
                           </CarouselItem>
                        ))
                     }
                  </CarouselCustom>
               </section>
            </main>
         </div>
      </div>
   );
}
{/* <CarouselCustom data={DataCarousel} Element={CardOffer} className="md:h-[27rem]" /> */ }
{/* 
   <CarouselCustom data={dataProductsOffers} Element={CardProducts} className="basis-1/2 md:basis-1/3 lg:basis-1/4" /> */
}