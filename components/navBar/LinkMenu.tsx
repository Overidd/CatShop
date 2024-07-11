'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
   href: string;
   children: React.ReactNode;
}

const LinkNav = ({ href, children }: Props) => {
   const pathname = usePathname();
   const isActive = pathname === href;

   return (
      <Link href={href}>
         <p className={isActive ? "opacity-100" : "opacity-60"}>
            {children}
         </p>
      </Link>
   );
};

type LinkNav = {
   closeMenu?: () => void;
}

export const LinkMenu = ({ closeMenu }:LinkNav) => {
   return (
      <>
         <li className="list-none" onClick={closeMenu}>
            <LinkNav href={'/'} >Home</LinkNav>
         </li>
         <li className="list-none" onClick={closeMenu}>
            <LinkNav href={'/blog'}>Blog</LinkNav>
         </li>
         <li className="list-none" onClick={closeMenu}>
            <LinkNav href={'/shop'}>Shop</LinkNav>
         </li>
         <li className="list-none" onClick={closeMenu}>
            <LinkNav href={'/login'}>Login</LinkNav>
         </li>
      </>
   )
}