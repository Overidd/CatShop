'use client'
import { ACTION_TYPE, storeCartState } from './storeCartState'
import { ProductProps } from '@/lib/types';
import React, { createContext, useReducer, useState } from 'react'

type ShoppingCartState = ProductProps[];

type ProductContextType = {
   state: ShoppingCartState;
   addTocart: (product: ProductProps) => void;
   removeCart: (productId: number) => void;
   clearCart: () => void;
   openToggleCard: (boolean?: boolean) => void;
   openCard: boolean;
   subtractQuantity: (productId: number) => void;
};

export const ProductContext = createContext<ProductContextType | undefined>(undefined)

const init = () => {
   const storedCart = typeof window !== 'undefined' && localStorage.getItem('card');
   return storedCart ? JSON.parse(storedCart) : [];
};

interface Prop {
   children: React.ReactNode;
}

export const ProductsProvider: React.FC<Prop> = ({ children }) => {
   const [state, dispatch] = useReducer(storeCartState, [], init);
   const [openCard, setOpenCard] = useState(false)
   const addTocart = (product: ProductProps) => {
      // Añadir al carrito
      dispatch({
         type: ACTION_TYPE.ADD_CART,
         payload: product,
      });
   }
   const removeCart = (productId: number) => {
      // Elimina un producto del carrito
      dispatch({
         type: ACTION_TYPE.REMOVE_CART,
         payload: productId,
      });
   };

   const clearCart = () => {
      // Limpia el carrito
      dispatch({
         type: ACTION_TYPE.CLEAR_CART
      })
   }

   const subtractQuantity = (productId: number) => {
      // Disminuye la cantidad de un producto en el carrito
      dispatch({
         type: ACTION_TYPE.DECREMENT_QUANTITY,
         payload: productId,
      });
   }
   const openToggleCard = (boolean?: boolean) => {
      if (boolean !== undefined) {
         setOpenCard(boolean);
      } else {
         setOpenCard((opencard) => !opencard);
      }
   };


   return (
      <ProductContext.Provider value={{
         state,
         addTocart,
         removeCart,
         clearCart,
         openToggleCard,
         openCard,
         subtractQuantity,
      }}>
         {children}
      </ProductContext.Provider>
   );
};
