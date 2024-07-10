'use client'
import { useEffect, useState } from "react";

const html = typeof window !== "undefined" ? document.documentElement : null;
const initialDarkMode = typeof window !== "undefined" && localStorage.getItem('darkMode') === 'true';

export const useDarkMode = () => {
   const [darkMode, setDarkMode] = useState(initialDarkMode);

   useEffect(() => {
      if (html) {
         if (darkMode) {
            html.classList.add('dark');
         } else {
            html.classList.remove('dark');
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
