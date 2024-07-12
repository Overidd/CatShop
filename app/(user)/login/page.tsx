/* eslint-disable @next/next/no-img-element */

import { Button, ButtonGoogle } from "@/components/button/Button"
import { Input } from "@/components/common/Inputs"
import Link from "next/link"


const page = () => {
   return (
      <section className="min-h-[65dvh] grid grid-cols-1 md:grid-cols-2 w-[90%] max-w-7xl m-auto mt-20">
         <figure className="rounded-xl overflow-hidden h-[28rem]">
            <img className="w-full h-full object-cover object-left" src="/imgLogin.jpeg" alt="img"/>
         </figure>
         <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="font-bold text-xl md:text-2xl">Login</h1>
            <p>Ingresa tus datos</p>
            <form action="" className="space-y-5 w-[70%] text-lg">
               <Input
                  type="email"
                  placeHolder="ingresa tu correo"
                  bg="bg-transparent"
                  bgPlaceHolder="bg-bgSecondary"
               />
               <Input
                  type="password"
                  placeHolder="contraseña"
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

import React from 'react';

const GoogleIcon = () => (
   <div className="w-fit inline-block mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
         <path fill="#4285F4" d="M24 9.5c3.8 0 6.4 1.6 8.2 2.9l6-6C34.4 3.2 29.8 1 24 1 14.8 1 7.4 6.7 4 14.5l7 5.5c2-5.9 7.4-10.5 13-10.5z" />
         <path fill="#34A853" d="M44.5 20H24v8.5h11.6C33 33 29 35 24 35c-5.6 0-10.4-3.4-12.2-8.2l-7 5.5C9 38.4 16 43 24 43c8.4 0 15.5-5.9 17.9-14.1C42.8 26 44.5 23.3 44.5 20z" />
         <path fill="#FBBC05" d="M11.8 27c-.5-1.5-.8-3.1-.8-4.7s.3-3.2.8-4.7L4.8 12c-1.4 2.8-2.3 5.9-2.3 9.3s.8 6.5 2.3 9.3l7-5.6z" />
         <path fill="#EA4335" d="M24 10c3.5 0 6.2 1.4 8 3.4L38 6.5C34.6 3 29.8 1 24 1 16 1 9.4 5.8 6.2 12.5l7 5.6C15.6 12 19.4 10 24 10z" />
      </svg>
   </div>
);
