import { ScrollButton } from "../button"
import { Menu } from "../navBar"
import React from "react"

const textHeader = {
   title: 'Tienda de Gatos en Lima accesorios',
   text: ` ¡Consigue todos los productos y accesorios para
 gatos en un solo lugar! En nuestra nueva tienda
 de gatos en Lima, podrás engreírlo y atenderlo
 de mil formas. Además consigue increíbles
 productos de gatos para amantes gatunos (La
 Familia Miaulovers).`,
}
interface Props {
   className?: string,
   children: React.ReactNode,
}


export const Header = ({ children, className }: Props) => {
   return (
      <header className={`bg-bgPrimary text-center overflow-hidden ${className}`}>

         <div className={`w-[90%] mx-auto md:max-w-7xl ${className}`}>
            {/* Carousel */}
            {children}

            <h1 className="text-xl font-semibold md:w-[50rem] m-auto md:text-3xl">
               {textHeader.title}
               <span className="text-bgLateralcolumn font-extrabold uppercase"> para gatos</span>
            </h1>
            <p className="opacity-70 text-sm md:w-[50rem] m-auto md:text-xl">
               {textHeader.text}
            </p>
            <ScrollButton targetId="scrol-main" />
         </div>
      </header>
   )
}
