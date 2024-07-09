/* eslint-disable @next/next/no-img-element */

import { Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { LinkMenu } from '../navBar';

export const Footer = () => {
   return (
      <footer className="mt-auto">

         <div className="w-full bottom-[99%] md:bottom-[80%] -mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 146 1440 100">
               <path fill="#e7770f" fillOpacity="1" d="M0,160L80,154.7C160,149,320,139,480,154.7C640,171,800,213,960,218.7C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </svg>
         </div>
         <div className='bg-bgPrimary pb-5'>
            <div className="w-[90%] m-auto flex gap-x-14 gap-y-5 flex-col items-baseline flex-wrap md:flex-row md:text-xl">

               <figure className="basis-[100%] -mb-6">
                  <img src={'/LogoCatshop.png'} alt="Logo" width={180} className="md:w-[18rem]" />
               </figure>

               <ul className="space-y-2">
                  <h4 className="text-2xl md:text-3xl font-medium" >Contactos</h4>
                  <li className="space-x-2 text-lg">
                     <span className="inline-block align-middle bg-white rounded-[50%] p-2">
                        <Mail className="text-bgPrimary" />
                     </span>
                     <span className="align-middle">
                        contacts@gmail.com
                     </span>
                  </li>
                  <li className="space-x-2 text-lg">
                     <span className="inline-block align-middle bg-white rounded-[50%] p-2">
                        <Phone className="text-bgPrimary" />
                     </span>
                     <span className="align-middle ">
                        +51 912345656
                     </span>
                  </li>
               </ul>

               <ul className="space-y-2">
                  <h4 className="text-2xl md:text-3xl font-medium">Menu</h4>
                  <LinkMenu />
               </ul>

               <ul className="space-x-2 w-fit m-auto self-center md:m-0 md:ml-auto">
                  <li className="inline-block align-middle bg-white rounded-[50%] p-2 ">
                     <Facebook className="text-bgPrimary" />
                  </li>
                  <li className="inline-block align-middle bg-white rounded-[50%] p-2 ">
                     <Instagram className="text-bgPrimary" />
                  </li>
                  <li className="inline-block align-middle bg-white rounded-[50%] p-2 ">
                     <Twitter className="text-bgPrimary" />
                  </li>
               </ul>
               <p className="text-center w-full text-white text-sm basis-[100%]">
                  &copy; 2023 Catshop. Todos los derechos reservados.
               </p>
            </div>
         </div>
      </footer>
   )
}
