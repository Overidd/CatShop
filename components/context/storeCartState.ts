import { ProductProps } from "@/lib/types"

export const updateCardLocalStorage = (state: Array<Object>) => {
   window.localStorage.setItem('card', JSON.stringify(state))
}
export const ACTION_TYPE = {
   ADD_CART: 'ADD_CART',
   REMOVE_CART: 'REMOVE_CART',
   CLEAR_CART: 'CLEAR_CART',
   DECREMENT_QUANTITY: 'DECREMENT_QUANTITY',
} as const;

export type Action =
   | { type: typeof ACTION_TYPE.ADD_CART; payload: ProductProps }
   | { type: typeof ACTION_TYPE.REMOVE_CART; payload: number } 
   | { type: typeof ACTION_TYPE.CLEAR_CART }
   | { type: typeof ACTION_TYPE.DECREMENT_QUANTITY; payload: number };

export function storeCartState(state: ProductProps[], action: Action): ProductProps[] {
   switch (action.type) {
      case ACTION_TYPE.ADD_CART:
         const isProduct = state.find(item => item.id === action.payload.id)

         if (isProduct) {
            const newState = state.map(item => {
               return item.id === action.payload.id
                  ? {
                     ...item,
                     quantity: (item.quantity ?? 1) + 1
                  }
                  : item
            })
            updateCardLocalStorage(newState)
            return newState
         }
         const newState = [
            ...state,
            { ...action.payload, quantity: 1 }
         ]
         updateCardLocalStorage(newState)
         return newState;

      case ACTION_TYPE.DECREMENT_QUANTITY:
         const product = state.find(item => item.id === action.payload)
         if (product && (product.quantity || 1) > 1) {

            const newState = state.map(item => {
               return item.id === action.payload
                  ? {
                     ...item,
                     quantity: (item.quantity ?? 1) - 1,
                  }
                  : item
            })
            updateCardLocalStorage(newState)
            return newState;
         }
      return state;


      case ACTION_TYPE.REMOVE_CART:
         const newStateRemove = state.filter(item => item.id !== action.payload);
         updateCardLocalStorage(newStateRemove)
         return newStateRemove;

      case ACTION_TYPE.CLEAR_CART:
         // Limpia el carrito
         updateCardLocalStorage([])
         return [];

      default:
         return state;
   }
}