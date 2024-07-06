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

export const LinkMenu = () => {
   return (
      <>
         <li className="list-none"><LinkNav href={'/'} >Home</LinkNav></li>
         <li className="list-none"><LinkNav href={'/blog'}>Blog</LinkNav></li>
         <li className="list-none"><LinkNav href={'/shop'}>Shop</LinkNav></li>
         <li className="list-none"><LinkNav href={'/login'}>Login</LinkNav></li>
      </>
   )
}
