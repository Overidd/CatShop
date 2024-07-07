
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
   price: number,
   discount?: number,
   description?: string;
   category: string;
   availability: boolean,
   brand: string;
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
}

export type DetailsProductAccessories = {

}
// category: 'Juguetes',
// material: 'Plástico no tóxico',
// weight: '50g',
// dimensions: '5cm x 5cm x 5cm',
// color: 'Multicolor',
// ageRecommended: 'Todos',
// benefits: 'Estimulación mental y ejercicio físico',
// careInstructions: 'Lavar con agua y jabón neutro',
// brand: 'PetToys Inc.',
// warranty: '6 meses',
// availability: 'Disponible',
