/* eslint-disable @next/next/no-img-element */
// 'use client'
import { Button } from '@/components/button/Button'
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
      <section className='flex flex-col md:flex-row gap-4'>
         <figure className='basis-[0%] min-w-[40%] rounded-xl overflow-hidden'>
            <img
               className='w-full h-full object-cover object-center'
               src={src} alt={alt} width={width} height={height} />
         </figure>
         <div className='text-center flex-1 flex flex-col gap-4'>
            <h1 className='text-lg md:text-2xl font-medium'>{name}</h1>
            <small className='text-bgMenu font-bold text-xl'>S/ {price}</small>
            <p>{description}</p>

            <Button text='Agregar al carrito' className='mt-auto'/>
         </div>
      </section>
   )
}