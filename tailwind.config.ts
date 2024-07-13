import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        textPrimary: '#fff', // Color de Texto principal

        bgMenu: '#4487ba', // Color de Fondo del menú

        bgPrimary: '#e7770f', // Color de Fondo primario
        bgSecondary: '#ffa742', // Color de Fondo secundario

        bgLateralcolumn: '#de5d00',    // Color de Fondo terciario

        borderPrimary: '#de5d00', // Color de Borde primario

        bgCard: '#e7770f', // Color de Fondo de tarjetas
        bgCategory: '#ed8120', // Color de Fondo de categorías

        bgBtnPrimary: '#7dd957', // Color de Fondo del botón primario
        bgBtnSecondary: '#4487ba', // Color de Fondo del botón secundario

        bgInput: '#ef8221', // Color de Fondo de los imputs

        bgQuestion: '#de5d00', // Color de Fondo de preguntas y respuestas

        //Dark mode colors//

        textPrimaryDark: '#fff', // Color de Texto principal

        bgMenuDark: '#E48900', // Color de Fondo del menú

        bgPrimaryDark: '#18051C', // Color de Fondo primario
        bgSecondaryDark: '#36004C', // Color de Fondo secundario

        bgLateralcolumnDark: '#9D00C5',    // Color de Fondo terciario

        borderPrimaryDark: '#9D00C5', // Color de Borde primario

        bgCardDark: '#18051C', // Color de Fondo de tarjetas
        bgCategoryDark: '#520F60', // Color de Fondo de categorías

        bgBtnPrimaryDark: '#E48900', // Color de Fondo del botón primario
        bgBtnSecondaryDark: '#E48900', // Color de Fondo del botón secundario

        bgInputDark: '#520F60', // Color de Fondo de los imputs

        bgQuestionDark: '#9D00C5', // Color de Fondo de preguntas y respuestas
      
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

//:3 :D//
//miau//
//ESTO ES UN COMENTARIO WONS//
//XD//