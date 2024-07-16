'use client'
import { MenuIcon, ShoppingCart, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LinkMenu } from "./LinkMenu";
import Image from "next/image";

import { SignedIn, UserButton } from '@clerk/nextjs';
import { useFavoriteProducts, useStoreCart } from "@/components/context";
import { SwitchModo } from "./SwitchModo";

import LogoCatshop from '@/public/LogoCatshop.png';
import Link from "next/link";
// import 'animate.css';

interface MenuProps {
   hideMenu?: string[];
}

export const Menu = ({ hideMenu = [] }: MenuProps) => {
   const pathname = usePathname();
   const { IconFavorite, IconCart } = ItemsMenu()
   const pathCurrent = pathname === '/' ? '/' : `/${pathname.split('/').filter(Boolean)[0]}`;
   const { openToggleCard, state } = useStoreCart();
   const [openMenu, setOpenMenu] = useState(false);

   const handleOpenMenu = () => {
      setOpenMenu((open) => !open);
   };

   const hiddenMenu = hideMenu.includes(pathCurrent);

   return (
      !hiddenMenu && (
         <nav className="bg-bgMenu dark:bg-bgMenuDark flex px-4 py-2 gap-4 z-20 w-[91%] m-auto mt-4 mb-10 items-center rounded-2xl select-none sticky top-2">
            <Link href={'/'} className="w-[6rem]">
               <img className="cursor-pointer"
                  src='/LogoCatshop.png'
                  alt="Logo"
                  width={100}
                  height={100}
               />
            </Link>

            <div className="align-middle ml-auto flex items-center justify-center">
               <SignedIn >
                  <UserButton />
               </SignedIn>
            </div>

            <IconFavorite />

            <button className=" md:order-1 cursor-pointer relative" onClick={() => openToggleCard()} title="carrito">
               <IconCart />
               {
                  state.length > 0 && <CounterState counter={state.length} />
               }
            </button>

            <MenuIcon className="cursor-pointer md:hidden"
               onClick={handleOpenMenu}
               strokeWidth={2}
               size={30}
            />

            <ul
               className={`absolute bg-bgLateralcolumn md:dark:bg-transparent dark:bg-bgCategoryDark text-center text-xl py-8 md:p-0 flex items-center flex-col top-[110%] right-0 left-0 gap-4 rounded-2xl transition-[transform] duration-300 md:static md:flex-row md:bg-transparent md:w-full ${openMenu ? 'flex' : 'hidden md:flex'}`}
            >
               <LinkMenu closeMenu={() => setOpenMenu((close) => !close)} />
               <SwitchModo className='mx-auto md:mx-0 md:ml-auto' />
            </ul>
         </nav>
      )
   );
};

type CounterProps = {
   counter: number;
}

const ItemsMenu = () => {
   // Renderiza algo diferente en el lado del servidor para evitar errores
   const [loading, setLoading] = useState(false);
   useEffect(() => {
      setLoading(true);
   }, []);

   const IconFavorite = () => {
      const { favoriteItems } = useFavoriteProducts();
      const existsFavorite = favoriteItems.length > 0;

      return (

         <Link href={'/favorite'} title="favoritos" className="md:order-1">
            <Heart
               size={30}
               strokeWidth={2}
               fill={loading && existsFavorite ? '#fff' : 'none'}
            />
         </Link>
      )
   }

   const IconCart = () => {
      const { state } = useStoreCart();

      return (
         <ShoppingCart
            size={30}
            strokeWidth={2}
            fill={loading && (state.length > 0) ? '#fff' : 'none'}
         />
      )
   }

   return {
      IconFavorite,
      IconCart
   }
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
      <small className="absolute font-semibold top-[50%] bg-bgLateralcolumn dark:bg-bgLateralcolumnDark  rounded-[50%] py-[0.12rem] px-[0.42rem] text-xs">
         {counter}
      </small>
   )
}

