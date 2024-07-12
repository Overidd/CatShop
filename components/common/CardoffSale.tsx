interface PriceProps {
   price: number,
   discount: number,
}

export const PriceDiscount = ({ discount, price }: PriceProps) => {
   const discountPrice = price - (price * ((discount || 100) / 100))
   return (
      <>
         <p className="font-medium text-base md:text-lg self-center ">
            <small className="line-through text-lg opacity-80">{price}</small> S/ <small className=" md:text-xl">{discountPrice}</small>
         </p>

      </>
   )
}

interface ImgProps {
   discount: number,
}
export const ImgDiscount = ({ discount }: ImgProps) => {
   return (
      <div className="absolute bg-bgInput left-0 top-0 p-[0.4rem] px-3 font-bold text-xl discount">
         <small>-{discount}%</small>
      </div>
   )
}