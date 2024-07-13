
import { ProductsProvider } from "@/components/context/ProductsProvider";
import { Menu, ModeDark } from "@/components/navBar";
import { CartShop } from "@/components/carts/CartShop";
import { Footer } from "@/components/common";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import {
   ClerkProvider,
} from '@clerk/nextjs'
import { ProvideLoading } from "@/components/context/ProvideLoading";

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
               <ProvideLoading>
                  <ModeDark>
                     <ProductsProvider>

                        <Menu hideMenu={['/', '/cart', '/login', '/register']} />

                        {children}
                        <CartShop />

                     </ProductsProvider>
                     <Footer />
                  </ModeDark>
               </ProvideLoading>
            </ClerkProvider >
         </body>
      </html >
   );
}