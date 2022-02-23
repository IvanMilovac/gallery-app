import "./Login.css";

import AgilnoLogo from "../../../assets/AgilnoLogo.png";
import Input from "../../elements/others/Input";
import Button from "../../elements/others/Button";

import Toast from "../../elements/others/Toast";
import useLoginHook from "../../hooks/useLoginHook";
import Loader from "../../elements/loader/Loader";

const Login = () => {
  const [
    email,
    password,
    isFormValid,
    isLoading,
    handleSubmit,
    handleTouch,
    handleChange,
  ] = useLoginHook();

  return (
    <div className="login__container">
      <Toast />
      <div className="login__logo-container">
        <img src={AgilnoLogo} alt="" />
      </div>
      <p className="login__title">Log In</p>
      <form onSubmit={handleSubmit}>
        <Input
          errorText={"Invalid email."}
          inputclass="login__input-container"
          name="email"
          label="Email address"
          type="email"
          inputValue={email}
          onChange={(e) => handleChange(e)}
          onBlur={handleTouch}
        />
        <Input
          errorText={"Password should contain between 6-15 letters."}
          inputclass="login__input-container"
          name="password"
          label="Password"
          type="password"
          inputValue={password}
          onChange={(e) => handleChange(e)}
          onBlur={handleTouch}
        />
        <div className="submission">
          <Button
            buttonclass="login__button"
            type="submit"
            disabled={!isFormValid}
          >
            Login
          </Button>
          {isLoading && <Loader />}
        </div>
      </form>
    </div>
  );
};

export default Login;
