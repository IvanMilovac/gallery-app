import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Toast, { toasty } from "../../elements/shared/toast/Toast";
import Input from "../../elements/shared/input/Input";
import Button from "../../elements/shared/button/Button";
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
    }, 750);
  };

  return (
    <div className="login">
      <Toast />
      <div className="login-logo">
        <img src={AgilnoLogo} alt="" className="login-logo__image" />
      </div>
      <p className="login-title">Log In</p>
      <form className="login-form" onSubmit={handleSubmit(handleFormSubmit)} noValidate>
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
