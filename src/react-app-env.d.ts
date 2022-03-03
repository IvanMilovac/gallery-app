/// <reference types="react-scripts" />

declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

interface ILoginData {
  email: { value: string; isValid: boolean; isTouched: boolean };
  password: { value: string; isValid: boolean; isTouched: boolean };
  isFormValid: boolean;
}

interface IUser {
  name: string;
  email: string;
  password: string;
}
interface IComment {
  id: string;
  text: string;
  user: string;
}

type Validator = {
  type: string;
  val?: number;
};

interface IImage {
  id: string;
  title: string;
  user: string;
  description: string;
  imageSmall: string;
  imageLarge: string;
  comments: IComment[];
}

