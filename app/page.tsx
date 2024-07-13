/* eslint-disable @next/next/no-img-element */
import { Header } from "@/components/common";
import { CardCategory, CardOffer, CardProducts } from "@/components/cards";
import { CarouselCustom, CarouselItem, CarouselSlick } from '@/components/slider'
import { dataCategory, dataProducts, dataPromotion } from "@/data";
import { Menu } from "@/components/navBar";


export default function Home() {
   return (
      <div className="bg-bgPrimary dark:bg-bgPrimaryDark space-y-10 border-t border-transparent">
         <Menu />

         <div className="bg-bgSecondary dark:bg-bgSecondaryDark space-y-10">
            <Header className="space-y-10 pb-3">
               <CarouselSlick speed={300} className="-mb-2">
                  {
                     dataPromotion.map((item) => (
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