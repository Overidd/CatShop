/* eslint-disable @next/next/no-img-element */
import { ProductProps } from "@/lib/types"
import { ButtoIsCart, IconDetails, IconFavorite } from "./ItemsCard";

interface Props {
   className?: string,
   productProps: ProductProps,
}

export const CardProducts = ({ productProps, className }: Props) => {
   const { id, name, price, discount, img: { alt, src, width, height } } = productProps;

   const offSale = discount !== undefined;
   const discountPrice = price - (price * ((discount || 100) / 100));

   return (
      <div className={`text-center bg-bgCard dark:bg-bgCardDark rounded-xl flex flex-col gap-2 justify-between p-3 md:p-4 xl:p-5 ${className}`}>

         <figure className="bg-[#074f86] dark:bg-[#e38809] basis-[0%] min-h-[38%] md:min-h-[43%] 2xl:min-h-[45%] min-w-full relative cursor-pointer productImg overflow-hidden rounded-xl select-none"
         >
            <img className="w-full h-full object-cover object-center rounded-xl"
               src={src}
               alt={alt}
               width={width}
               height={height}
            />
            <IconDetails id={id}/>
            {
               offSale
               && <div className="absolute bg-bgInput dark:bg-bgInputDark left-0 top-0 p-[0.4rem] px-3 font-bold text-xl discount">
                  <small>-{discount}%</small>
               </div>
            }
            <IconFavorite id={id}
            />
         </figure>

         <h5 className="opacity-80 text-sm md:text-xl text-balance">{name}</h5>

         {
            offSale
               ? <p className="text-base md:text-xl">
                  <small className="line-through text-lg opacity-80">{price}</small> S/ <small className=" md:text-xl">{discountPrice}</small>
               </p>
               : <small className="text-base md:text-xl">S/ {price}</small>
         }
         <ButtoIsCart product={productProps} />
      </div>
   )
}

