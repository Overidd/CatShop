'use client';
import { useDarkMode } from "@/hooks";

export const ModeDark = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
   useDarkMode()
   return (
      <>
         {children}
      </>
   )
}
