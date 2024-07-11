import { Button } from "../button/Button"
import { Input, InputRadio, Select  } from "../common/Inputs"



export const CartPayDireccion = () => {
   return (
      <section className="bg-bgPrimary p-5 rounded-xl space-y-8 w-fit m-auto texttext-lg ">
         <form action="" className="space-y-4 md:space-x-10">
            <InputRadio
               className="inline-block"
               id="pick"
               name="option"
               text="Recoger en una tienda"
            />
            <InputRadio
               className="inline-block"
               id="sending"
               name="option"
               text="Envio por delivery"
            />
         </form>

         <form action="" className="space-y-4">
            <p className="text-center text-xl font-medium">Ingresa tus datos</p>
            <Input type="text" placeHolder="Departamento" />
            <Input type="text" placeHolder="Provincia" />
            <Input type="text" placeHolder="Distrito" />
            <Input type="text" placeHolder="Direccion" />
            {/* <Input type="text" placeHolder="referencia" /> */}
            <Select/>
            <Input type="text" placeHolder="Documento" />
         </form>

         <form action="" className="space-y-4">
            <p className="text-center text-xl font-medium">Selecciona la tienda</p>
            <InputRadio
               className="block"
               id="address1"
               name="address"
               text="Olivos, av Carrion Los  2321"
            />
            <InputRadio
               className="block"
               id="address2"
               name="address"
               text="Olivos, av Carrion Los  2321"
            />
         </form>
         <Button text="Contunar con el pago" />
         <p className="text-center">✅Safe Payment Powered By SecureIMP™</p>
      </section>
   )
}
