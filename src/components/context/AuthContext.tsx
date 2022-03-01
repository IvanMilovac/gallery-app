import React, { createContext, useReducer, ReactNode } from "react";

import { images } from "../../fakeData";

type Action =
  | { type: "HANDLE_LOGIN"; payload: IUser }
  | { type: "HANDLE_LOGOUT" }
  | {
      type: "ADD_COMMENT";
      payload: { id: string; image: IImage; text: string; user: IUser };
    }
  | {
      type: "DELETE_COMMENT";
      payload: { id: string; image: IImage };
    }
  | {
      type: "SELECT_IMAGE";
      payload: { image: IImage };
    };

interface IProviderProps {
  children: ReactNode;
}

const initialState = {
  user: {} as IUser,
  images,
  selectedImage: images[0],
};
type AppState = typeof initialState;

const addNewComment = (
  id: string,
  imagesState: IImage[],
  image: IImage,
  comment: string,
  user: IUser
) => {
  return imagesState.map((item) => {
    if (item.title !== image.title) return item;
    return {
      ...item,
      comments: [...item.comments, { id: id, user: user.name, text: comment }],
    };
  });
};

const deleteComment = (id: string, image: IImage, images: IImage[]) => {
  return images.map((img) => {
    if (img.id !== image.id) return img;
    return { ...img, comments: img.comments.filter((c) => c.id !== id) };
  });
};

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "HANDLE_LOGIN":
      return { ...state, user: { ...action.payload } };
    case "HANDLE_LOGOUT":
      return { ...state, user: initialState.user };
    case "SELECT_IMAGE":
      return { ...state, selectedImage: action.payload.image };
    case "ADD_COMMENT":
      return {
        ...state,
        images: addNewComment(
          action.payload.id,
          state.images,
          action.payload.image,
          action.payload.text,
          action.payload.user
        ),
        selectedImage: {
          ...state.selectedImage,
          comments: [
            ...state.selectedImage.comments,
            {
              id: action.payload.id,
              user: action.payload.user.name,
              text: action.payload.text,
            },
          ],
        },
      };
    case "DELETE_COMMENT":
      return {
        ...state,
        images: deleteComment(
          action.payload.id,
          action.payload.image,
          state.images
        ),
        selectedImage: {
          ...state.selectedImage,
          comments: state.selectedImage.comments.filter(
            (c) => c.id !== action.payload.id
          ),
        },
      };
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
