export enum ACTION_TYPE {
   ADD_FAVORITE = 'ADD_FAVORITE',
   REMOVE_FAVORITE = 'REMOVE_FAVORITE',
   ADD_REMOVE_FAVORITE = 'ADD_REMOVE_FAVORITE',
}

type Action =
   | { type: typeof ACTION_TYPE.ADD_FAVORITE; payload: number }
   | { type: typeof ACTION_TYPE.REMOVE_FAVORITE; payload: number }
   | { type: typeof ACTION_TYPE.ADD_REMOVE_FAVORITE; payload: number };

   const updateCardLocalStorage = (state: Array<Object>) => {
   window.localStorage.setItem('favorite', JSON.stringify(state))
}

export const favoriteProducts = (state: number[], action: Action): number[] => {
   switch (action.type) {
      case ACTION_TYPE.ADD_FAVORITE:
         const newState = [...state, action.payload];
         updateCardLocalStorage(newState);
         return newState

      case ACTION_TYPE.REMOVE_FAVORITE:
         const newStateRemove = state.filter(item => item !== action.payload)
         updateCardLocalStorage(newStateRemove);
         return newStateRemove
      default:
         return state;
   }
}