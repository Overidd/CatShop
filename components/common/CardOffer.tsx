/* eslint-disable @next/next/no-img-element */
import { CardOfferProps } from "@/lib/types";
interface Props {
   cardOfferProps: CardOfferProps,
   className?: string,
}

export const CardOffer = ({ cardOfferProps: { img, alt, textBtn }, className }: Props) => {
   return (
      <div className={`relative w-full h-full ${className}`}>
         <img src={img} alt={alt} className="w-full h-full object-cover object-center" width={100} height={100} />
         <button className="absolute right-2 bottom-2 px-4 py-2 bg-bgBtnPrimary text-white rounded-2xl">{textBtn}</button>
      </div>
   )
}
