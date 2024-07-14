'use client'
import { FavoriteContext } from "./FavoriteProvider";
import { useContext } from "react";

export const useFavoriteProducts = () => {
   const favorite = useContext(FavoriteContext);
   if (!favorite) {
      throw new Error("useFavoriteProducts debe estar usado dentro de un FavoriteProvider");
   }
   return favorite;

}
