export type CardOfferProps = {
   id: number
   img: string;
   alt: string;
   textBtn: string;
}
type ImgProps = {
   src: string;
   width?: number;
   height?: number;
   alt: string;
}
export type CategoryProps = {
   id: number;
   text: string;
   img: ImgProps;
}

export type ProductProps = {
   id: number;
   description: string;
   price: number;
   textBtn: string;
   img: ImgProps;
}