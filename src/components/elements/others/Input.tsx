import React from "react";

import "./Input.css";

interface IProps {
  inputClass?: string;
  label?: string;
  error?: string;
  leftIcon?: string;
  rightIcon?: string;
  type?: "text" | "checkbox" | "email" | "password";
  placeholder?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref: React.Ref<any>;
}

const Input: React.FC<IProps> = React.forwardRef((props, ref) => {
  const {
    inputClass = "input-field",
    label,
    error,
    leftIcon,
    rightIcon,
    ...rest
  } = props;
  return (
    <div className={inputClass}>
      {label && <label htmlFor={rest.name}>{label}</label>}
      {leftIcon}
      <input {...rest} ref={ref} />
      {rightIcon}
      {error && <p className="error">{error}</p>}
    </div>
  );
});

export default Input;
