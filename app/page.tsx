/* eslint-disable @next/next/no-img-element */
import { Header } from "@/components/common";
import { CardCategory, CardOffer, CardProducts } from "@/components/cards";
import { CarouselCustom, CarouselItem, CarouselSlick } from '@/components/slider'

import { CardOfferProps, CategoryProps, ProductProps } from "@/lib/types";
import { Menu } from "@/components/navBar";
import { dataProducts } from "../data/dataProducts";
const dataCategory: CategoryProps[] = [
   {
      id: 12,
      category: 'alimento',
      date: '2023-01-01',
      img: {
         src: '/imgcategory/categoryAlimento.png',
         alt: 'Alimentos',
         width: 520,
         height: 520,
      }
   },

   {
      id: 13,
      category: 'juguete',
      date: '2023-01-01',
      img: {
         src: '/imgcategory/categoryJuguete.png',
         alt: 'Juguetes',
         width: 520,
         height: 520,
      }
   },
   {
      id: 14,
      category: 'accesorio',
      date: '2023-01-01',
      img: {
         src: '/imgcategory/categoryAccesorios.png',
         alt: 'Accesorios',
         width: 520,
         height: 520,
      }
   },
   {
      id: 15,
      category: 'ropa',
      date: '2023-01-01',
      img: {
         src: '/imgcategory/categoryRopa.png',
         alt: 'Ropa',
         width: 520,
         height: 520,
      }
   },
   {
      id: 16,
      category: 'higiene',
      date: '2023-01-01',
      img: {
         src: '/imgcategory/categoryHigiene.png',
         alt: 'Higiene',
         width: 520,
         height: 520,
      }
   },
   {
      id: 17,
      category: 'salud',
      date: '2023-01-01',
      img: {
         src: '/imgcategory/categorySalud.png',
         alt: 'Salud',
         width: 520,
         height: 520,
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
      <div className="bg-bgPrimary space-y-10">
         <Menu />

         <div className="bg-bgSecondary space-y-10">
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
                  <h2 className="text-center font-bold text-xl md:text-3xl uppercase">MEJORES OFERTAS</h2>

                  <CarouselCustom>
                     {
                        dataProducts.map((item) => (
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