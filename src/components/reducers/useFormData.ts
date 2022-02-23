import { useReducer } from "react";

type PayloadType = { name: string; value: string; isValid: boolean };

type FormActions =
  | { type: "HANDLE_CHANGE"; payload: PayloadType }
  | { type: "HANDLE_FORM_VALIDITY"; payload: boolean }
  | { type: "HANDLE_TOUCH"; payload: { name: string } }
  | { type: "DELETE_DATA" };

const reducer = (state: any, action: FormActions): any => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return {
        ...state,
        [action.payload.name]: {
          ...state[action.payload.name],
          value: action.payload.value,
          isValid: action.payload.isValid,
        },
      };
    case "HANDLE_FORM_VALIDITY": {
      return { ...state, isFormValid: action.payload };
    }
    case "HANDLE_TOUCH": {
      return {
        ...state,
        [action.payload.name]: {
          ...state[action.payload.name],
          isTouched: true,
        },
      };
    }
    case "DELETE_DATA":
      return {} as ILoginData;
    default:
      return state;
  }
};

export const useFormData = (initialState: ILoginData) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};
