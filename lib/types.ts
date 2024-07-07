
type ImgProps = {
   src: string;
   alt: string;
   width?: number;
   height?: number;
}
export type CategoryProps = {
   id: number;
   text: string;
   img: ImgProps;
}
export type CardOfferProps = {
   id: number
   name: string;
   price: number,
   discount?: number,
   description?: string;
   img: ImgProps;
}

export type ProductProps = {
   id: number;
   name: string;
   price: number;
   discount?: number,
   description: string;
   img: ImgProps;
}