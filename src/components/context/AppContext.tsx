import React, { createContext, useReducer, ReactNode } from "react";

import { images, users } from "../../fakeData";

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
      type: "UPDATE_COMMENT";
      payload: { id: string; newComment: string };
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
  users: users,
  images,
  selectedImage: images[0],
};

type AppState = typeof initialState;

const selectImage = (images: IImage[], image: IImage) => {
  return images.filter((i) => i.id === image.id)[0];
};

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

const updateComment = (id: string, newComment: string, image: IImage) => {
  console.log({ image });
  return {
    ...image,
    comments: image.comments.map((c) => {
      if (c.id !== id) return c;
      return { ...c, text: newComment };
    }),
  };
};

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "HANDLE_LOGIN":
      return { ...state, user: { ...action.payload } };
    case "HANDLE_LOGOUT":
      return { ...state, user: initialState.user };
    case "SELECT_IMAGE":
      return {
        ...state,
        selectedImage: selectImage(state.images, action.payload.image),
      };
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
    case "UPDATE_COMMENT":
      return {
        ...state,
        images: images.map((img) => {
          if (img.id !== state.selectedImage.id) return img;
          return updateComment(
            action.payload.id,
            action.payload.newComment,
            img
          );
        }),
        selectedImage: updateComment(
          action.payload.id,
          action.payload.newComment,
          state.selectedImage
        ),
      };
    default:
      return state;
  }
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

function AppContextProvider({ children }: IProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
