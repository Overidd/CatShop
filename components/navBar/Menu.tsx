
'use client'
import { MenuIcon, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { SwitchModo } from "./SwitchModo"

import LogoCatshop from '@/public/LogoCatshop.png'
import { LinkMenu } from "./LinkMenu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { OpenCardtIcon } from "../context/OpenCardtIcon"
import { useStoreCart } from "../context/useStoreCart"

interface MenuProps {
   hideMenu?: string[];
}



export const Menu = ({ hideMenu = [] }: MenuProps) => {
   const pathname = usePathname();
   const { openToggleCard, openCard } = useStoreCart()

   const [openMenu, setOpenMenu] = useState(false);
   const handleOpenMenu = () => {
      setOpenMenu((open) => !open);
   };
   const hiddenMenu = hideMenu.includes(pathname);
   console.log(openCard, 'Desde mnu')

   return (
      !hiddenMenu && (
         <nav className="bg-bgMenu flex p-4 gap-4 relative z-20 w-[90%] m-auto mt-4 items-center rounded-2xl select-none">
            <Link href={'/'}>
               <Image
                  src={LogoCatshop}
                  alt="Logo"
                  width={80}
                  className="cursor-pointer"
               />
            </Link>
            <ShoppingCart className="ml-auto md:order-1 cursor-pointer" onClick={openToggleCard} />
            <MenuIcon onClick={handleOpenMenu} className="cursor-pointer md:hidden" />

            <ul
               className={`bg-bgLateralcolumn text-center absolute text-xl py-8 md:p-0 flex items-center flex-col top-[110%] right-0 left-0 gap-4 rounded-2xl transition-[transform] duration-300 md:static md:flex-row md:bg-transparent md:w-full md:translate-x-[0%] ${openMenu ? 'translate-x-[0%]' : 'translate-x-[150%]'}`}
            >
               <LinkMenu closeMenu={() => setOpenMenu((close) => !close)} />
               <SwitchModo className='mx-auto md:mx-0 md:ml-auto' />
            </ul>
         </nav>
      )
   );
};