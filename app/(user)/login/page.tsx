/* eslint-disable @next/next/no-img-element */

import { Button, ButtonGoogle } from "@/components/button/Button"
import { Input } from "@/components/common/Inputs"
import Link from "next/link"


const page = () => {
   return (
      <section className="min-h-[60dvh] grid grid-cols-1 md:auto-rows-[28rem] 2xl:auto-rows-[40rem] md:grid-cols-2 animate__animated animate__slideInRight">
         <figure className="rounded-xl max-h-full overflow-hidden hidden md:block">
            <img className="w-full h-full object-cover object-" src="/imgLogin.jpeg" alt="img"/>
         </figure>
         <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="font-bold text-xl md:text-2xl">Login</h1>
            <p className="font-medium text-xl">Ingresa tus datos</p>
            <form action="" className="space-y-5 w-[70%] text-lg">
               <Input
                  type="email"
                  placeHolder="Ingresa tu correo"
                  bg="bg-transparent"
                  bgPlaceHolder="bg-bgSecondary"
               />
               <Input
                  type="password"
                  placeHolder="Contraseña"
                  bg="bg-transparent"
                  bgPlaceHolder="bg-bgSecondary"
               />
               <Button text="Login" type="submit" className="p-3" />
               <ButtonGoogle type="submit" text="Login con google" />
            </form>
            <div className="mt-4 text-center text-lg">
               ¿No tienes una cuenta?{" "}
               <Link href="/register" className="underline hover:opacity-80">
                  Clic aquí para ingresar
               </Link>
            </div>
         </div>
      </section>
   )
}

export default page
