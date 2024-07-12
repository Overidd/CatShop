
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const dataQA = [
  {
    'id': 1,
    'question': `¿Qué puedo hacer si mi compra no puede ser procesada?`,
    'answer': ` Generalmente los problemas a la hora de comprar se dan por fallos en la conexión a internet. 
      Te recomentamos verificar si tu red de wifi está disponible e intentar de nuevo. Si no es este el caso, 
      puede que tu método de pago no sea válido. Prueba con otro método de pago o contáctate con tu banco para 
      más información.`,
  },
  {
    'id': 2,
    'question': `¿Cuál es la diferencia entre las marcas de comida que la tienda ofrece?`,
    'answer': ` Las marcas que ofrecemos son confiables y saludables para tu mascota. La principal diferencia 
    entre una marca y otra es los ingredientes que se encuentras listados en las bolsas. La mayoria tienen como 
    base algún tipo de carne seca que es molida para obtener una masa firme, luego se le agrega probióticos y vitaminas que 
    enriquesen la dieta de tu amigo felino. Algunas opciones tienen más concentrado de proteínas y otros tienen
    más fibra para ayudarlo a ir al baño. Te recomendamos seguir las indicaciones de tu veterinario de confianza 
    y alimentarlo según su edad, raza y necesidades individuales.`,
  },
  {
    'id': 3,
    'question': `¿Qué distritos reciben delivery y cuánto cuesta en cada caso?`,
    'answer': ` Hacemos delivery a todos los distritos de Lima, desde San Juan de Lurigancho hasta Comas. El costo 
    para distritos de Lima es de 7 soles por 1 a 4 productos, 15 soles por 5 a 9 y 25 soles de 10 a más. Toma en cuenta 
    que los productos pequeños los llevan por bicicleta o moto, pero cantitades más grandes de productos o productos que 
    sean pesados son llevados en mototaxi y/o automobil. Actualmente, no hacemos delivery a provincia pero estamos 
    trabajando activamente para llegar a tantos lugares del Perú como sea posible.`,
  },
  {
    'id': 4,
    'question': ` ¿Se hace devolución de productos si ya lo abrí?`,
    'answer': ` No, solo se pueden regresar productos sin abrir, ni rotos.`,
    'imagen': `/gatosinpregunta.jpg`

  },
  {
    'id': 5,
    'question': ` ¿Porqué la tienda tiene tan pocos productos y tanta interfaz si ni se puede comprar?`,
    'answer': ` Es una tienda de mentiritas xd`,
    'imagen': `/gatopregunta.jpg`
  },
]


const page = () => {
  return (
    <div className="w-[90%] max-w-7xl m-auto text-white space-y-4">
      <figure className='w-[40%] mx-auto rounded-xl overflow-hidden'><img src='/preguntasyrespuestas.jpg' alt='Gato con signo de interrogacion' className='w-full h-full object-cover object-center' /></figure>
      <h1 className="text-2xl md:text-2xl text-center font-medium py-6">Preguntas Frecuentes</h1>
      <Accordion type="single" collapsible className="w-full space-y-4">

        {
          dataQA.map((item) => (
            <AccordionItem key={item.id} value={`item-${item.id}`} className="bg-bgPrimary rounded-xl p-4 border-none">
              <AccordionTrigger className="decoration-bgPrimary	">{item.question}</AccordionTrigger>
              <AccordionContent className="opacity-80">
                {
                  (item.id === 5 || item.id === 4)
                  && <img src={item.imagen} />
                }
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>
    </div>
  )
}

export default page
