import React, { createContext, useContext, useReducer } from 'react';

type ActionType = {
  payload: any;
  type: string;
};
type StateType = {
  progress: number;
  matIdx: number;
};
type StoreContext = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};

const initialState: StateType = { progress: 0, matIdx: 0 };
const store: React.Context<StoreContext> = createContext<StoreContext>({
  state: initialState,
  dispatch: () => null,
});

const stateReducer: (state: StateType, action: ActionType) => StateType = (
  state,
  action
) => {
  switch (action.type) {
    case 'CHANGE_MAT':
      return { ...state, matIdx: action.payload };
    case 'SET_PROGRESS':
      console.log('STORE progres now is: ', action.payload);
      return { ...state, progress: action.payload };
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
