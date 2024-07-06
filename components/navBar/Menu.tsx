
'use client'
import { MenuIcon, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { SwitchModo } from "./SwitchModo"

import LogoCatshop from '@/public/LogoCatshop.png'
import { LinkMenu } from "./LinkMenu"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface Props {
   className?: string,
}

const ListMenu = ({ className }: Props) => {
   return (
      <ul className={`bg-bgLateralcolumn text-center ${className}`}>
         <LinkMenu />
         <SwitchModo className='mx-auto md:mx-0 md:ml-auto' />
      </ul >
   )
}

interface MenuProps {
   path?: string;
}
export const Menu = ({ path }: MenuProps) => {
   const pathname = usePathname();

   const [openMenu, setOpenMenu] = useState(false)
   const handleOpenMenu = () => {
      setOpenMenu(open => !open)
   }
   const hiddenMenu = pathname !== path;

   console.log(pathname)
   return (
      <nav className={`bg-bgMenu mt-4 flex p-4 gap-4 relative z-10 w-[90%] m-auto items-center rounded-2xl select-none ${hiddenMenu? '':'hidden'}`}>
         <Link href={'/'}>
            <Image src={LogoCatshop} alt="Logo" width={80} className="cursor-pointer" />
         </Link>
         <ShoppingCart className="ml-auto md:order-1 cursor-pointer" />
         <MenuIcon onClick={handleOpenMenu} className="cursor-pointer md:hidden" />
         <ListMenu
            className={`absolute text-xl py-8 md:p-0 flex items-center flex-col top-[110%] right-0 left-0 gap-4 rounded-2xl transition-[transform] duration-300 md:static md:flex-row md:bg-transparent md:w-full md:translate-x-[0%] ${openMenu ? 'translate-x-[0%]' : 'translate-x-[150%]'}`} />
      </nav>
   )
}



