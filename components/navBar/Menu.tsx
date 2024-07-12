
'use client'
import { MenuIcon, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { SwitchModo } from "./SwitchModo"

import LogoCatshop from '@/public/LogoCatshop.png'
import { LinkMenu } from "./LinkMenu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useStoreCart } from "../context/useStoreCart"
// import 'animate.css';

interface MenuProps {
   hideMenu?: string[];
}

export const Menu = ({ hideMenu = [] }: MenuProps) => {
   const pathname = usePathname();
   const pathCurrent = pathname === '/' ? '/' : `/${pathname.split('/').filter(Boolean)[0]}`
   const { openToggleCard, state } = useStoreCart()
   const [openMenu, setOpenMenu] = useState(false);

   const handleOpenMenu = () => {
      setOpenMenu((open) => !open);
   };
   console.log(pathCurrent)

   const hiddenMenu = hideMenu.includes(pathCurrent);

   return (
      !hiddenMenu && (
         <nav className="bg-bgMenu flex px-4 py-2 gap-4 z-20 w-[91%] m-auto mt-4 mb-10 items-center rounded-2xl select-none sticky top-2 menuStyles">
            <Link href={'/'}>
               <Image className="cursor-pointer"
                  src={LogoCatshop}
                  alt="Logo"
                  width={100}
               />
            </Link>
            <button className="ml-auto md:order-1 cursor-pointer relative" onClick={() => openToggleCard()}>
               <ShoppingCart
                  size={30}
                  strokeWidth={2}
               />
               <CounterState counter={state.length} />
            </button>
            <MenuIcon className="cursor-pointer md:hidden"
               onClick={handleOpenMenu}
               strokeWidth={2}
               size={30}
            />

            <ul
               className={`bg-bgLateralcolumn text-center absolute text-xl py-8 md:p-0 flex items-center flex-col top-[110%] right-0 left-0 gap-4 rounded-2xl transition-[transform] duration-300 md:static md:flex-row md:bg-transparent md:w-full ${openMenu ? 'flex' : 'hidden md:flex'}`}
            >
               <LinkMenu closeMenu={() => setOpenMenu((close) => !close)} />
               <SwitchModo className='mx-auto md:mx-0 md:ml-auto'/>
            </ul>
         </nav>
      )
   );
};

type CounterProps = {
   counter: number;
}

const CounterState = ({ counter }: CounterProps) => {

   // Renderiza algo diferente en el lado del servidor para evitar errores
   const [hydrated, setHydrated] = useState(false);
   useEffect(() => {
      setHydrated(true);
   }, []);
   if (!hydrated) {
      return null;
   }

   return (

      <small className="absolute font-semibold top-[50%] bg-bgLateralcolumn rounded-[50%] py-[0.12rem] px-[0.42rem] text-xs">
         {counter}
      </small>
   )
}