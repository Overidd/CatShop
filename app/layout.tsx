
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { Menu, ModeDark } from "@/components/navBar";
import "./globals.css";
import { Footer } from "@/components/common";
import { ProductsProvider } from "@/components/context/ProductsProvider";
import { CartShop } from "@/components/carts/CartShop";


const roboto = Roboto({
   weight: ['100', '300', '400', '500', '700', '900'],
   subsets: ['latin'],
   style: ["normal", "italic"],
});
export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
   return (
      <html lang="en">
         <body className={cn(roboto.className, 'text-textPrimary bg-bgSecondary min-h-dvh flex flex-col gap-10')}>
            <ModeDark>
               <ProductsProvider>

                  <Menu hideMenu={['/', '/cart']} />

                  {children}
                  <CartShop />

               </ProductsProvider>
               <Footer />
            </ModeDark>
         </body>
      </html >
   );
}

//Al momento de ejecutar una funcion, primero la funcion si es 'use cliente' o de lado del servidor. En el caso que sea del lado del cliente, el lugar donde se va a ejecutar debe ser de lado del cliente. De lo contrario sale un error pontente xd jejejje