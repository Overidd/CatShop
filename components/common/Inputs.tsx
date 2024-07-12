import './input.css'

type TypoInput = 'text' | 'email'
interface Props {
   placeHolder: string;
   type: TypoInput;
   className?: string;
}

export const Input = ({ placeHolder, type, className }: Props) => {
   return (
      <label className="form_label border-2 border-[#ef8221] rounded-xl">
         <input type={type} placeholder=" " className={`form_input bg-transparent outline-none py-[0.7rem] px-[1rem] ${className}`} />
         <span className="form_text opacity-85 bg-bgPrimary">{placeHolder}</span>
      </label>
   )
}

export const Select = () => {
   return (
      <select name="" id="" className="bg-transparent border-2 border-[#ef8221] w-full p-2 py-3 rounded-xl outline-none">
         <option value="" className="bg-bgPrimary">Seleccione una opción</option>
         <option value="option1" className='bg-bgPrimary'>DNI</option>
         <option value="option2" className='bg-bgPrimary '>Pasaporte</option>
      </select>
   )
}

interface InputRadioProps {
   id: string;
   text: string;
   className?: string;
   name: string;
}
export const InputRadio = ({ id, text, className, name }: InputRadioProps) => {
   return (
      <label htmlFor={id} className={`space-x-2 cursor-pointer ${className}`}>
         <input type="radio" name={name} id={id} className="checkboxStyle align-middle"/>
         <span className="align-middle">{text} </span>
      </label>
   )
}




// export const Input = ({ placeHolder, type, className }: Props) => {
//    return (
//       <label className="form_label bg-[#ef8221] rounded-xl">
//          <input type={type} placeholder=" " className={`form_input bg-transparent outline-none py-[0.7rem] px-[1rem] ${className}`} />
//          <span className="form_text opacity-85">{placeHolder}</span>
//       </label>
//    )
// }