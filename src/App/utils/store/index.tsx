import React, { createContext, useContext, useReducer } from 'react';
import { CHANGE_MATERIAL, SET_ITEM_IDX, SET_PROGRESS } from './actions';

type ActionType = {
  payload: number;
  type: string;
};
type StateType = {
  itemIdx: number;
  progress: number;
  matIdx: number;
};
type StoreContext = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

const initialState: StateType = { itemIdx: 0, matIdx: 0, progress: 0 };
const store: React.Context<StoreContext> = createContext<StoreContext>({
  state: initialState,
  dispatch: () => null,
});

const stateReducer: (state: StateType, action: ActionType) => StateType = (
  state,
  action
) => {
  switch (action.type) {
    case CHANGE_MATERIAL:
      return { ...state, matIdx: action.payload };
    case SET_PROGRESS:
      return { ...state, progress: action.payload };
    case SET_ITEM_IDX:
      return { ...state, itemIdx: action.payload };
    default:
      return state;
  }
};

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<
    (state: StateType, action: ActionType) => StateType
  >(stateReducer, initialState);

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};

export const useStore: () => StoreContext = () => useContext(store);

export default store;
