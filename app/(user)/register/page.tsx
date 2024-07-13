/* eslint-disable @next/next/no-img-element */
'use client'
import { SignUp } from '@clerk/nextjs';
import React from 'react';
const appearance = {
  elements: {
    formButtonPrimary: "bg-bgPrimary dark:bg-bgPrimaryDark py-3  transition hover:bg-[#48b] border-none",
    formFieldInput: "rounded-md py-4 px-3 ",
    formFieldLabel: "", 
    card: "shadow-lg  rounded-xl p-6",
    formButtonSecondary: " transition hover:bg-[#48b]",
  },
};

const Register = () => {
  return (
    <section className="min-h-[60dvh] grid grid-cols-1 md:auto-rows-[36rem] 2xl:auto-rows-[40rem] md:grid-cols-2 animate__animated animate__slideInRight">
      <figure className="rounded-xl max-h-full overflow-hidden hidden md:block">
        <img className="w-full h-full object-cover object-center" src="/imagenRegister.png" alt="img" />
      </figure>
      <div className="flex flex-col justify-center items-center gap-4">
        <SignUp path="/register" routing="path" signInUrl="/login" appearance={appearance} />
      </div>
    </section>
  );
}

export default Register;
