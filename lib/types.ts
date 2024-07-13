
type ImgProps = {
   src: string;
   alt: string;
   width?: number;
   height?: number;
}
export type CategoryProps = {
   id: number;
   img: ImgProps;
   category: string;
   date: string;
}
export type CardOfferProps = {
   id: number
   name: string;
   category: string;
   discount: number;
   description?: string;
   availability: boolean,
   date: string;
   img: ImgProps;
}

export type ProductProps = {
   id: number;
   name: string;
   price: number;
   discount?: number,
   description: string;
   category: string;
   availability: boolean,
   brand: string;
   date: string;
   img: ImgProps;
   quantity?: number
   weight?: string,
   dimensions?: string,
   color?: string,
   benefits?: string,
   careInstructions?: string,
   warranty?: string,
   img2?: ImgProps
   
}

export type DetailsProductAccessories = {

}
// category: 'Juguetes',
// material: 'Plástico no tóxico',
// availability: 'Disponible',


// weight: '50g',
// dimensions: '5cm x 5cm x 5cm',
// color: 'Multicolor',
// benefits: 'Estimulación mental y ejercicio físico',
// careInstructions: 'Lavar con agua y jabón neutro',
// warranty: '6 meses',
