import { ProductProps } from "@/lib/types";

export const dataProducts: ProductProps[] = [
  {
    id: 2000,
    price: 172,
    discount: 12,
    name: "Suéter cálido para gato",
    description: "Mantén a tu gato abrigado y cómodo con este suéter cálido de lana.",
    brand: "catsoup",
    availability: true,
    category: "ropa",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/sueterCalidoGato.jpg",
      alt: "Suéter cálido para gato",
      width: 300,
      height: 300,
    },
    img2: {
      src: "/imgProducts/sueterCalidoGato.jpg",
      alt: "Suéter cálido para gato",
      width: 300,
      height: 300,
    },
    weight: "0.3kg",
    dimensions: "30cm x 20cm x 5cm",
    color: "Azul",
    benefits: "Ideal para el invierno",
    careInstructions: "Lavar con agua y jabón neutro",
  },
  {
    id: 2001,
    price: 56,
    name: "Champú anti-pulgas",
    description: "Elimina pulgas y garrapatas con este efectivo champú para gatos.",
    brand: "delmeow",
    availability: true,
    category: "higiene",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/champuAntipulgas.webp",
      alt: "Champú anti-pulgas",
      width: 300,
      height: 300,
    },
    weight: "0.5L",
    dimensions: "10cm x 10cm x 25cm",
    color: "Blanco",
    benefits: "Elimina pulgas y garrapatas",
    careInstructions: "Usar una vez por semana",
  },
  {
    id: 2002,
    price: 95,
    name: "Croquetas premium para gatos",
    description: "Nutrición completa y balanceada para gatos de todas las edades.",
    brand: "whiskers",
    availability: true,
    category: "alimento",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/croquetaspremiumCat.jpg",
      alt: "Croquetas premium para gatos",
      width: 300,
      height: 300,
    },
    weight: "2kg",
    dimensions: "30cm x 20cm x 10cm",
    color: "Marrón",
    benefits: "Nutrición completa",
    careInstructions: "Almacenar en lugar fresco y seco",
  },
  {
    id: 2003,
    price: 112,
    discount: 30,
    name: "Collar con cascabel",
    description: "Elegante collar con cascabel para gatos, ajustable y seguro.",
    brand: "gaty",
    availability: true,
    category: "accesorio",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/collarCascabel.webp",
      alt: "Collar con cascabel",
      width: 300,
      height: 300,
    },
    weight: "50g",
    dimensions: "15cm x 2cm x 2cm",
    color: "Rojo",
    benefits: "Ajustable y seguro",
    careInstructions: "Limpiar con un paño húmedo",
  },
  {
    id: 2004,
    price: 123,
    name: "Pelota interactiva para gatos",
    description: "Diviértete viendo a tu gato jugar con esta pelota interactiva.",
    brand: "catsoup",
    availability: true,
    category: "juguete",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/pelotaInteractiva.webp",
      alt: "Pelota interactiva para gatos",
      width: 300,
      height: 300,
    },
    weight: "200g",
    dimensions: "10cm x 10cm x 10cm",
    color: "Verde",
    benefits: "Estimula el ejercicio",
    careInstructions: "Limpiar con agua y jabón",
  },
  {
    id: 2005,
    price: 43,
    name: "Abrigo impermeable para gatos",
    description: "Protege a tu gato de la lluvia con este abrigo impermeable.",
    brand: "delmeow",
    availability: true,
    category: "ropa",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/abrigoImpermeable.jpg",
      alt: "Abrigo impermeable para gatos",
      width: 300,
      height: 300,
    },
    weight: "0.4kg",
    dimensions: "35cm x 25cm x 5cm",
    color: "Amarillo",
    benefits: "Protege de la lluvia",
    careInstructions: "Lavar a mano",
  },
  {
    id: 2006,
    price: 87,
    discount: 50,
    name: "Cepillo desenredante para gatos",
    description: "Mantén el pelaje de tu gato suave y libre de nudos con este cepillo.",
    brand: "whiskers",
    availability: true,
    category: "higiene",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/cepilloSesenredante.png",
      alt: "Cepillo desenredante para gatos",
      width: 300,
      height: 300,
    },
    weight: "150g",
    dimensions: "20cm x 5cm x 5cm",
    color: "Negro",
    benefits: "Desenreda el pelaje",
    careInstructions: "Limpiar después de cada uso",
  },
  {
    id: 2007,
    price: 155,
    name: "Vitaminas para gatos",
    description: "Suplemento multivitamínico para la salud y vitalidad de tu gato.",
    brand: "gaty",
    availability: true,
    category: "salud",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/vitaminas.jpg",
      alt: "Vitaminas para gatos",
      width: 300,
      height: 300,
    },
    weight: "0.3kg",
    dimensions: "10cm x 10cm x 15cm",
    color: "Blanco",
    benefits: "Mejora la salud y vitalidad",
    careInstructions: "Almacenar en lugar fresco y seco",
  },
  {
    id: 2008,
    price: 45,
    discount: 15,
    name: "Alimento húmedo para gatos",
    description: "Delicioso alimento húmedo en gelatina para gatos exigentes.",
    brand: "catsoup",
    availability: true,
    category: "alimento",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/alimentoHumedo.webp",
      alt: "Alimento húmedo para gatos",
      width: 300,
      height: 300,
    },
    weight: "0.4kg",
    dimensions: "12cm x 12cm x 12cm",
    color: "Gris",
    benefits: "Alta palatabilidad",
    careInstructions: "Refrigerar después de abrir",
  },
  {
    id: 2009,
    price: 98,
    name: "Rascador de cartón para gatos",
    description: "Rascador ecológico de cartón para el entretenimiento de tu gato.",
    brand: "delmeow",
    availability: true,
    category: "accesorio",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/rascadorCarton.jpeg",
      alt: "Rascador de cartón para gatos",
      width: 300,
      height: 300,
    },
    weight: "1kg",
    dimensions: "45cm x 30cm x 5cm",
    color: "Marrón",
    benefits: "Ecológico y duradero",
    careInstructions: "Reemplazar cuando esté desgastado",
  },
  {
    id: 2010,
    price: 67,
    discount: 7,
    name: "Ratón de juguete para gatos",
    description: "Ratón de juguete con sonido para estimular el instinto cazador de tu gato.",
    brand: "whiskers",
    availability: true,
    category: "juguete",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/ratonJuguete.jpg",
      alt: "Ratón de juguete para gatos",
      width: 300,
      height: 300,
    },
    weight: "100g",
    dimensions: "8cm x 5cm x 5cm",
    color: "Gris",
    benefits: "Estimula el instinto cazador",
    careInstructions: "Limpiar con un paño húmedo",
  },

  //Otras imagenes
  {
    id: 2011,
    price: 67,
    discount: 7,
    name: "Suéter cálido para gato",
    description:
      "Mantén a tu gato abrigado y cómodo con este suéter cálido de lana.",
    brand: "catsoup",
    availability: true,
    category: "ropa",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/sueterParaGatos.jpg",
      alt: "Product",
      width: 300,
      height: 300,
    },
    weight: 'null',
    dimensions: "5cm x 5cm x 5cm",
    color: "Blue",
    benefits: "Ideal para el invierno",
    careInstructions: "Lavar con agua y jabón neutro",
  },
  {
    id: 2012,
    price: 56,
    name: "Shampoo anti-pulgas",
    description: "Champú de espuma en seco para para gatos",
    brand: "delmeow",
    availability: true,
    category: "higiene",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/shampooParaGatos.jpg",
      alt: "Product",
      width: 300,
      height: 300,
    },
    weight: '500',
    dimensions: 'null',
    color: "Pink",
    benefits: "Pelaje suave, lizo y proteje de las pulgas",
    careInstructions:
      "Enjuagar con bastante agua y evitar el contacto con los ojos",
  },
  {
    id: 2013,
    price: 95,
    name: "Croquetas premium para gatos",
    description:
      "Pro Plan Sterilized Cat Alimento Seco para Gato Esterilizado es una opción completa y balanceada diseñada específicamente para satisfacer las necesidades nutricionales de los gatos adultos castrados o esterilizados. Esta fórmula ayuda a controlar el peso y a mantener la salud del tracto urinario, brindando a tu gato una nutrición óptima para su estilo de vida. ¡Compra ahora y brinda a tu gato esterilizado una alimentación equilibrada y deliciosa con Pro Plan!",
    brand: "Purina",
    availability: true,
    category: "alimento",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/croquetasGatos.jpg",
      alt: "Product",
      width: 300,
      height: 300,
    },
    weight: '10',
    dimensions: "20cm x 45cm x 58cm",
    color: 'null',
    benefits:
      "Ayuda a controlar el peso y a mantener la salud del tracto urinario",
    careInstructions: 'null',
  },
  {
    id: 2014,
    price: 39,
    discount: 15,
    name: "Collar para gato",
    description:
      "Collar suave, seguro y ajustable para gatos de todas las edades. Cuenta con colores nítidos y brillantes.",
    brand: "Zeecat",
    availability: true,
    category: "accesorio",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/collarParagatos.jpg",
      alt: "Product",
      width: 300,
      height: 300,
    },
    weight: 'null',
    dimensions: "1cm x 30cm",
    color: 'null',
    benefits: "Textura suave y sedosa para dar más confort.",
    careInstructions: 'null',
  },
  {
    id: 2015,
    price: 6,
    name: "Pelota de bocadillos para gatos",
    description: "Pelota dispensadora de premios de the cat band.",
    brand: "catsoup",
    availability: true,
    category: "juguete",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/pelotaaraGatos.jpg",
      alt: "Product",
      width: 300,
      height: 300,
    },
    weight: '5',
    dimensions: "1cm x 30cm",
    color: 'null',
    benefits: "Premia a su mascota.",
    careInstructions: 'null',
  },
  {
    id: 2016,
    price: 60,
    name: "Abrigo impermeable para gatos",
    description:
      "Ropa cómoda en polera para el invierno de material french terry suave con RIB en cuellos y mangas para gatos de todas razas y edades.",
    brand: "delmeow",
    availability: true,
    category: "ropa",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/impermeableParaGatos.jpg",
      alt: "Product",
      width: 300,
      height: 300,
    },
    weight: 'null',
    dimensions: "16 x 20",
    color: "Blue",
    benefits: "Evita enfermedades",
    careInstructions: 'null',
  },
  {
    id: 2017,
    price: 21,
    discount: 10,
    name: "Pet care cepillo para mascotas",
    description:
      "Mantén el pelaje de tu mascota suave, brillante y libre de enredos con el Cepillo para Mascotas de Pet Care. Este cepillo de alta calidad es una herramienta esencial para el cuidado diario de tu amigo peludo, ayudando a mantener su pelaje en óptimas condiciones y fortaleciendo vuestro vínculo.",
    brand: "PetCare",
    availability: true,
    category: "higiene",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/cepilloParaGatos.jpg",
      alt: "Product",
      width: 300,
      height: 300,
    },
    weight: '5',
    dimensions: "16 x 20",
    color: "Gris",
    benefits:
      "Con el Cepillo para Mascotas de Pet Care, puedes mantener a tu mascota con un pelaje hermoso y saludable mientras disfrutas de momentos de unión y cuidado juntos.",
    careInstructions: 'null',
  },
  {
    id: 2018,
    price: 250,
    name: "Vitaminas para gatos",
    description:
      "APETICAT es un suplemento formulado especialmente para gatos a base de Taurina y Carnitina, complementado con aminoácidos, vitaminas y Calcio. Su fórmula aumenta las ganas de comer de su mascota, actuando bioenergizante y mejorador de las funciones metabólicas del organismo.",
    brand: "APETICAT",
    availability: true,
    category: "salud",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/VitaminasParaGatos.jpg",
      alt: "Product",
      width: 300,
      height: 300,
    },
    weight: '125',
    dimensions: "5 x 20",
    color: 'null',
    benefits:
      "La Taurina es un aminoácido que los gatos sólo sintetizan en cantidades muy pequeñas, no suficiente para satisfacer en su totalidad las necesidades fisiológicas del animal, su presencia en cantidad adecuada es esencial en la dieta para mantener la salud de su mascota.",
    careInstructions: 'null',
  },
  {
    id: 2019,
    price: 45,
    name: "Alimento húmedo para gatos",
    discount: 15,
    description:
      "Alimento húmedo Super Premium con abundantes trozos de carne con un toque de salsa jugosa y ligera para gatos adultos de todas las razas.",
    brand: "Purina",
    availability: true,
    category: "alimento",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/comidaHumedaParaGatos.jpg",
      alt: "Product",
      width: 300,
      height: 300,
    },
    weight: '125',
    dimensions: "5 x 20",
    color: 'null',
    benefits:
      "LEleva su experiencia gastronómica con Fancy Feast® Goulash con Pavo, abundantes trozos de pavo con un toque de salsa jugosa y ligera.",
    careInstructions: 'null',
  },
  {
    id: 2020,
    price: 45,
    name: "Rascador rampa gris",
    description:
      "Rascador en forma de rampa, tiene una pelotita colgante en el interior para todas las edades y razas de gatos.",
    brand: "delmeow",
    availability: true,
    category: "accesorio",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/RascadorParaGatos.jpg",
      alt: "Product",
      width: 300,
      height: 300,
    },
    weight: '20',
    dimensions: "39 x 19 x 23",
    color: "Gris",
    benefits:
      "Rascador en forma de rampa, tiene una pelotita colgante en el interior para todas las edades y razas de gatos. Evitar que rasquen en otras partes de la casa y dañen los muebles. Rascador interno reversible.",
    careInstructions: 'null',
  },
  {
    id: 2021,
    price: 4,
    name: "Ratón de juguete para gatos",
    description:
      "Ratón de peluche. Colores disponibles: blanco, negro y gris. Recibirás un color y/o diseño al azar según stock.",
    brand: "Te Cat Band",
    availability: true,
    category: "juguete",
    date: "2023-01-01",
    img: {
      src: "/imgProducts/juegoParaGatos.jpg",
      alt: "Product",
      width: 300,
      height: 300,
    },
    weight: '20',
    dimensions: 'null',
    color: "Black",
    benefits:
      "Juguete de ratón de felpa para gatos.Que los ratones son uno de los juguetes favoritos de los gatos no es ningún secreto. Por eso da igual que ya le hayas regalado uno a tu felino, siempre querrá más y más. Obsequiar a tu gato con un pequeño ratón es un acierto seguro. En cuanto lo lances o lo dejes caer al suelo, no dudará en acecharlo y abalanzarse sobre él como si de una auténtica presa se tratase.",
    careInstructions: 'null',
  },
];
