import { Input, InputRadio, Select } from "../common/Inputs"
import { Button } from "../button/Button"
import { useRouter } from "next/navigation"

export const CartPayDireccion = () => {
   const navigation = useRouter()

   const handelNextPage = () => {
      navigation.push('/cart/paymetohod')
   }

   return (
      <section className="bg-bgPrimary dark:bg-bgPrimaryDark p-5 rounded-xl m-auto grid md:grid w-full max-w-3xl md:grid-cols-2 gap-10 texttext-lg animate__animated animate__slideInRight">

         <form action="" className="space-y-4">
            <InputRadio
               className="inline-block bg-bgInput dark:bg-bgInputDark w-full py-2"
               id="pick"
               name="option"
               text="Envio por delivery"
            />

            <p className="text-xl font-medium text-left">Ingresa tus datos</p>
            <Input type="text" placeHolder="Departamento" />
            <Input type="text" placeHolder="Provincia" />
            <Input type="text" placeHolder="Distrito" />
            <Input type="text" placeHolder="Direccion" />
            <Select />
            <Input type="text" placeHolder="Documento" />
         </form>

         <form action="" className="space-y-4">
            <InputRadio
               className="inline-block bg-bgInput dark:bg-bgInputDark w-full py-2"
               id="sending"
               name="option"
               text="Recoger en una tienda"
            />
            <p className="text-xl font-medium text-left">Selecciona la tienda</p>
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
         <Button text="Continuar con el pago" className="mx-auto py-[0.9rem] md:col-span-2 md:w-[40%]" onChange={handelNextPage} />
         <p className="text-center md:col-span-2">✅Safe Payment Powered By SecureIMP™</p>

      </section>
   )
}
