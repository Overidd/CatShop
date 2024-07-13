
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { Menu, ModeDark } from "@/components/navBar";
import "./globals.css";
import { Footer } from "@/components/common";
import { ProductsProvider } from "@/components/context/ProductsProvider";
import { CartShop } from "@/components/carts/CartShop";
import {
   ClerkProvider,
} from '@clerk/nextjs'


const roboto = Roboto({
   weight: ['100', '300', '400', '500', '700', '900'],
   subsets: ['latin'],
   style: ["normal", "italic"],
});

export const metadata: Metadata = {
   title: "CatShop",
   description: "Tienda para gatos",
};

const localization = {
   signUp: {
     start: {
       title: "Crear cuenta",
       subtitle: "Ingresa tus datos para continuar",
       emailAddressLabel: "Correo electrónico",
       emailAddressPlaceholder: "Ingresa tu correo",
       passwordLabel: "Contraseña",
       passwordPlaceholder: "Ingresa tu contraseña",
       firstNameLabel: "Nombre",
       firstNamePlaceholder: "Ingresa tu nombre",
       lastNameLabel: "Apellido",
       lastNamePlaceholder: "Ingresa tu apellido",
       signUpButton: "Crear cuenta",
       alreadyHaveAnAccount: "¿Ya tienes una cuenta?",
       signInButton: "Iniciar sesión"
     }
   },
   signIn: {
     start: {
       title: "Iniciar sesión",
       subtitle: "Ingresa tus datos para continuar",
       emailAddressLabel: "Correo electrónico",
       emailAddressPlaceholder: "Ingresa tu correo",
       passwordLabel: "Contraseña",
       passwordPlaceholder: "Ingresa tu contraseña",
       signInButton: "Iniciar sesión",
       forgotPassword: "¿Olvidaste tu contraseña?",
       signUpButton: "Crear cuenta",
       noAccount: "¿No tienes una cuenta?"
     }
   }
 };

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
   return (
      <html lang="en">
         <body className={cn(roboto.className, 'text-textPrimary bg-bgSecondary dark:bg-bgSecondaryDark ')}>
            <ClerkProvider localization={localization}>

               <ModeDark>
                  <ProductsProvider>

                     <Menu hideMenu={['/', '/cart', '/login', '/register']} />

                     {children}
                     <CartShop />

                  </ProductsProvider>
                  <Footer />
               </ModeDark>

            </ClerkProvider >
         </body>
      </html >
   );
}

//Al momento de ejecutar una funcion, primero la funcion si es 'use cliente' o de lado del servidor. En el caso que sea del lado del cliente, el lugar donde se va a ejecutar debe ser de lado del cliente. De lo contrario sale un error pontente xd jejejje