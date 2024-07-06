import { Header, Category, CarouselOfert } from "@/components/common";
import { CardOfferProps, CategoryProps, ProductProps } from "@/lib/types";
import Image from "next/image";
import LogoCatshop from '@/public/LogoCatshop.png'
import { LinkMenu } from "@/components/navBar";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"

import { Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { CardProducts } from "@/components/common/CardProducts";


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
      description: ` Diversión garantizada para tu gato con nuestra pelotita juguete`,
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


export default function Home() {
   return (
      <div className="bg-bgSecondary">
         <Header>
            <CarouselOfert card={DataCarousel} className="md:h-[27rem]"/>
         </Header>

         <main className="w-[90%] m-auto py-10  space-y-6">
            <Category category={dataCategory} />

            <section className="pb-20 md:pb-60 space-y-4">
               <h2 className="text-center font-bold text-xl md:text-3xl">Mejores ofertas</h2>

               <Carousel
                  opts={{
                     align: "start",
                  }}
                  className="w-full"
               >
                  <CarouselContent className="flex">
                     {dataProductsOffers.map((product) => (

                        <CarouselItem key={product.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">

                           <CardProducts {...product} />

                        </CarouselItem>
                     ))}
                  </CarouselContent>
                  {/* <CarouselPrevious /> */}
                  {/* <CarouselNext /> */}
               </Carousel>
            </section>
         </main>

         <footer className="bg-bgPrimary relative pb-4">
            <div className="w-full absolute bottom-[99%]">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#e7770f" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,144C672,181,768,235,864,234.7C960,235,1056,181,1152,160C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
               </svg>
            </div>
            <div className="space-y-4 w-[90%] m-auto">
               <img src={'/LogoCatshop.png'} alt="Logo" width={180} />

               <ul className="space-y-2">
                  <h4 className="text-3xl font-medium" >Contactos</h4>
                  <li className="space-x-2 text-lg">
                     <span className="inline-block align-middle bg-white rounded-[50%] p-2 ">
                        <Mail className="text-bgPrimary" />
                     </span>
                     <span className="align-middle ">
                        contacts@gmail.com
                     </span>
                  </li>
                  <li className="space-x-2 text-lg">
                     <span className="inline-block align-middle bg-white rounded-[50%] p-2 ">
                        <Phone className="text-bgPrimary" />
                     </span>
                     <span className="align-middle ">
                        +51 912345656
                     </span>
                  </li>
               </ul>

               <h4 className="text-3xl font-medium">Menu</h4>
               <ul className="space-y-2">
                  <LinkMenu />
               </ul>

               <ul className="space-x-2 m-auto w-fit">
                  <li className="inline-block align-middle bg-white rounded-[50%] p-2 ">
                     <Facebook className="text-bgPrimary" />
                  </li>
                  <li className="inline-block align-middle bg-white rounded-[50%] p-2 ">
                     <Instagram className="text-bgPrimary" />
                  </li>
                  <li className="inline-block align-middle bg-white rounded-[50%] p-2 ">
                     <Twitter className="text-bgPrimary" />
                  </li>
               </ul>
               <p className="text-center text-white text-sm">
                  &copy; 2023 Catshop. Todos los derechos reservados.
               </p>
            </div>

         </footer>
      </div>
   );
}
