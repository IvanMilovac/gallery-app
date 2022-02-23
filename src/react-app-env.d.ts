/// <reference types="react-scripts" />

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

type Validator = {
  type: string;
  val?: number;
};
