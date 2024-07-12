/* eslint-disable @next/next/no-img-element */
// 'use client'
import { CardOfferProps } from "@/lib/types";
import { ButtonOffer } from "../button/ButtonOffer";
interface Props {
   cardOfferProps: CardOfferProps,
   className?: string,
}

export const CardOffer = ({ cardOfferProps: { category, discount, img: { src, alt } }, className }: Props) => {

   return (
      <div className={`relative w-full ${className}`}>
         <img src={src} alt={alt} className="w-full h-full object-cover object-left" width={100} height={100} />
         <ButtonOffer
            className="absolute left-2 bottom-2 px-6 py-3 bg-bgBtnPrimary text-white rounded-2xl hover:animate-bounce"
            category={category}
            discount={String(discount)}
         />
      </div>
   )
}
