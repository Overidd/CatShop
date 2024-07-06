import { CardOfferProps } from "@/lib/types"
import { Menu } from "../navBar"
import { CarouselOfert } from "./Carousel"

const textHeader = {
   title: 'Tienda de Gatos en Lima accesorios para gatos',
   text: ` ¡Consigue todos los productos y accesorios para
 gatos en un solo lugar! En nuestra nueva tienda
 de gatos en Lima, podrás engreírlo y atenderlo
 de mil formas. Además consigue increíbles
 productos de gatos para amantes gatunos (La
 Familia Miaulovers).`,
}

const infoCarousel: CardOfferProps[] = [
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


export const Header = () => {
   return (
      <header className="bg-bgPrimary text-balance text-center overflow-hidden pb-12">
         <Menu />

         <div className="space-y-5 w-[90%] mx-auto mt-5">
            <CarouselOfert card={infoCarousel} />

            <h1 className="text-lg font-semibold">
               {textHeader.title}
            </h1>
            <p className="opacity-70 text-sm">
               {textHeader.text}
            </p>
         </div>
      </header>
   )
}
