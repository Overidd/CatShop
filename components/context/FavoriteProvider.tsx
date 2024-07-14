'use client'
import React, { createContext, useReducer } from 'react';
import { favoriteProducts, ACTION_TYPE } from './favoriteProducts';

export const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined)

type FavoriteContextType = {
   addFavorite: (itemId: number) => void;
   removeFavorite: (itemId: number) => void;
   addRemoveFavorite: (itemId: number) => void;
   isFavorite: (itemId: number) => boolean;
   favoriteItems: number[];
}

const init = () => {
   const favorite = typeof window !== 'undefined' && window.localStorage.getItem('favorite');
   return favorite ? JSON.parse(favorite) : [];
}

interface Prop {
   children: React.ReactNode;
}
export const FavoriteProvider: React.FC<Prop> = ({ children }) => {
   const [favoriteItems, dispatch] = useReducer(favoriteProducts, [], init)

   const addFavorite = (itemId: number) => {
      dispatch({
         type: ACTION_TYPE.ADD_FAVORITE,
         payload: itemId,
      })
   }
   const removeFavorite = (itemId: number) => {
      dispatch({
         type: ACTION_TYPE.REMOVE_FAVORITE,
         payload: itemId,
      })
   }
   const addRemoveFavorite = (itemId: number) => {
      const index = favoriteItems.indexOf(itemId);
      if (index === -1) {
         addFavorite(itemId);
      } else {
         removeFavorite(itemId);
      }
   }
   const isFavorite = (itemId: number) => {
      return favoriteItems.includes(itemId);
   }
   return (
      <FavoriteContext.Provider value={{
         addFavorite,
         removeFavorite,
         favoriteItems,
         addRemoveFavorite,
         isFavorite
      }}>
         {children}
      </FavoriteContext.Provider>
   )
}
