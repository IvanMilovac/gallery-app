import React, { createContext, useReducer, ReactNode } from "react";

type AppState = typeof initialState;
type Action =
  | { type: "HANDLE_LOGIN"; payload: IUser }
  | { type: "HANDLE_LOGOUT" };

interface IProviderProps {
  children: ReactNode;
}

const initialState = {
  user: { name: "", email: "", password: "" },
};

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "HANDLE_LOGIN":
      return { user: { ...action.payload } };
    case "HANDLE_LOGOUT":
      return { ...initialState };
    default:
      return state;
  }
};

const AuthContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function AuthContextProvider({ children }: IProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
