
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const dataQA = [
  {
    'id': 1,
    'question': `¿Pregunta numero uno que nos suelen hacer?`,
    'answer': ` Respuesta elavorada para la pregunta que se seleccionó, junto con pautas para asegurarle al cliente que su pregunta ha sido domada en cuenta`,
  },
  {
    'id': 2,
    'question': `¿Pregunta numero dos que nos suelen hacer?`,
    'answer': ` Respuesta`,
  },
  {
    'id': 3,
    'question': `¿Pregunta numero dos que nos suelen hacer?`,
    'answer': ` Respuesta`,
  },
  {
    'id': 4,
    'question': ` ¿Pregunta numero dos que nos suelen hacer?`,
    'answer': ` Respuesta`,
  },

]


const page = () => {
  return (
    <div className="w-[90%] max-w-7xl m-auto text-white space-y-4">
      <h1 className="text-xl md:text-2xl text-center font-medium">Preguntas Frecuentes</h1>
      <Accordion type="single" collapsible className="w-full space-y-4">
        
        {
          dataQA.map(item => (
            <AccordionItem key={item.id} value={`item-${item.id}`} className="bg-bgPrimary rounded-xl p-4 border-none">
              <AccordionTrigger className="decoration-bgPrimary	">{item.question}</AccordionTrigger>
              <AccordionContent className="opacity-80">{item.answer}</AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>
    </div>
  )
}

export default page
