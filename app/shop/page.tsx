'use client'
import { CardProducts } from "@/components/cards"
import { ProductProps } from "@/lib/types"
import { ListFilter } from 'lucide-react'
import { useState } from "react"

const dataProductsOffers: ProductProps[] = [
   {
      id: 2000,
      price: 150,
      name: 'Product',
      description: `Diversión garantizada para tu gato con nuestra pelotita juguete `,
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
   {
      id: 2004,
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
      id: 2005,
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
      id: 2006,
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
      id: 2007,
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
   {
      id: 2008,
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
      id: 2009,
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
   {
      id: 2010,
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
      id: 2011,
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
   {
      id: 2012,
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
      id: 2013,
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
      id: 2014,
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
      id: 2015,
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
   {
      id: 2016,
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
      id: 2017,
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
   {
      id: 2018,
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
      id: 2019,
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
   {
      id: 2020,
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

]
export default function Shop() {
   const [openFilter, setOpenFilter] = useState(true)

   return (
      <main className="w-[90%] max-w-7xl mx-auto flex gap-4">

         <section className={`bg-bgLateralcolumn rounded-md`}>
            <div className={` transition-all ${openFilter ? 'w-[20rem]' : 'w-[5rem]'}`}>
               <button className="p-2" onClick={() => setOpenFilter(!openFilter)}>
                  <ListFilter strokeWidth={'3'} size={'2rem'} />
               </button>
            </div>
         </section>

         <section className="flex-1 grid grid-cols-2 gap-4 md:grid-cols-custom-products">
            {
               dataProductsOffers.map(product => (
                  <CardProducts key={product.id} productProps={product} className="p-2 md:p-6" />
               ))
            }
         </section>
      </main>
   )
}

