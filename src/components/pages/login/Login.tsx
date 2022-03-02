import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Toast, { toasty } from "../../elements/others/Toast";
import Input from "../../elements/others/Input";
import Button from "../../elements/others/Button";
import Loader from "../../elements/loader/Loader";

import { AppContext } from "../../context/AppContext";

import {
  EmailFieldValidation,
  PasswordFieldValidation,
} from "./LoginValidation";
import { getErrorMessage } from "../../../utils";

import AgilnoLogo from "../../../assets/AgilnoLogo.png";

import "./Login.css";

interface ILoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    dispatch,
    state: { users },
  } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const { email, password } = errors;

  const navigate = useNavigate();

  const handleFormSubmit = (data: ILoginForm) => {
    const { email, password } = data;
    setIsLoading(true);
    setTimeout(() => {
      try {
        const user = users.find(
          (item) => item.email.toLowerCase() === email.toLowerCase()
        );
        if (!user) {
          throw new Error("User doesn't exist.");
        }
        if (password !== user.password)
          throw new Error("Wrong password. Try Again.");
        toasty("success", "Success", "top-center", 3000);
        dispatch({ type: "HANDLE_LOGIN", payload: user });
        navigate("/");
      } catch (err) {
        toasty("error", getErrorMessage(err), "top-center", 2000);
      } finally {
        setIsLoading(false);
      }
    }, 1250);
  };

  return (
    <div className="login__container">
      <Toast />
      <div className="login__logo-container">
        <img src={AgilnoLogo} alt="" />
      </div>
      <p className="login__title">Log In</p>
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <Input
          label="Email address"
          error={email?.message}
          type="email"
          {...register("email", EmailFieldValidation)}
        />
        <Input
          label="Password"
          error={password?.message}
          type="password"
          {...register("password", PasswordFieldValidation)}
        />
        <Button type="submit">
          <>
            Log In
            {isLoading && <Loader />}
          </>
        </Button>
      </form>
    </div>
  );
};

export default Login;
