import React, { ReactNode } from "react";

import "./Input.css";

interface IProps {
  inputClass?: string;
  label?: string;
  error?: string;
  icon?: ReactNode;
  type?: "text" | "checkbox" | "email" | "password" | "file";
  placeholder?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  ref?: React.Ref<any>;
  value?: string;
}

const Input: React.FC<IProps> = React.forwardRef((props, ref) => {
  const {
    inputClass = "input-field",
    label,
    error,
    onKeyUp,
    icon,
    ...rest
  } = props;
  return (
    <div className={inputClass}>
      {label && <label htmlFor={rest.name}>{label}</label>}
      {icon}
      <input {...rest} ref={ref} onKeyUp={onKeyUp} />
      {error && <p className="error">{error}</p>}
    </div>
  );
});

export default Input;
