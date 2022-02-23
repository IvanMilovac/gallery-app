import React, { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../reducers/useFormData";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

import { users } from "../../fakeData";
import { getErrorMessage } from "../utils/utils";

import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_EMAIL,
  validate,
  VALIDATOR_REQUIRE,
} from "../utils/validators";

const useLoginHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [{ email, password, isFormValid }, formDispatch] = useFormData({
    email: { value: "", isValid: true, isTouched: false },
    password: { value: "", isValid: true, isTouched: false },
    isFormValid: false,
  });
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const dispatchRef = useRef(formDispatch);
  useEffect(() => {
    dispatchRef.current = formDispatch;
  }, [formDispatch]);
  useEffect(() => {
    dispatchRef.current({
      type: "HANDLE_FORM_VALIDITY",
      payload:
        email.isValid &&
        password.isValid &&
        !!email.value.length &&
        !!password.value.length,
    });
  }, [email, password]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let validators: Validator[] =
      name === "email"
        ? [VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]
        : [
            VALIDATOR_MINLENGTH(6),
            VALIDATOR_MAXLENGTH(15),
            VALIDATOR_REQUIRE(),
          ];
    formDispatch({
      type: "HANDLE_CHANGE",
      payload: {
        name,
        value,
        isValid: validate(value, validators),
      },
    });
  };

  const handleTouch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    formDispatch({
      type: "HANDLE_TOUCH",
      payload: {
        name,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      try {
        const user = users.filter(
          (item) => item.email.toLowerCase() === email.value.toLowerCase()
        )[0];
        if (!user) {
          throw new Error("User doesn't exist.");
        }
        if (password.value !== user.password)
          throw new Error("Wrong password. Try Again.");
        toast.success("Success", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          progress: undefined,
        });
        setIsLoading(false);
        dispatch({ type: "HANDLE_LOGIN", payload: user });
        navigate("/");
      } catch (err) {
        toast.error(getErrorMessage(err), {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          progress: undefined,
        });
        setIsLoading(false);
      }
    }, 1250);
  };
  return [
    email,
    password,
    isFormValid,
    isLoading,
    handleSubmit,
    handleTouch,
    handleChange,
  ];
};

export default useLoginHook;
