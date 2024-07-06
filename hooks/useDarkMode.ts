'use client'
import { useEffect, useState } from "react";

const body = typeof window !== "undefined" ? document.body : null;
const initialDarkMode = typeof window !== "undefined" && localStorage.getItem('darkMode') === 'true';

export const useDarkMode = () => {
   const [darkMode, setDarkMode] = useState(initialDarkMode);

   useEffect(() => {
      if (body) {
         if (darkMode) {
            body.classList.add('dark');
         } else {
            body.classList.remove('dark');
         }
         localStorage.setItem('darkMode', darkMode.toString());
      }
   }, [darkMode]);

   const toggleDarkMode = () => {
      setDarkMode(prevMode => !prevMode);
   }

   return {
      darkMode,
      toggleDarkMode
   }
}
