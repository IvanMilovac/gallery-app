import React from "react";

import "../../../style/components/InputField.css";

interface IProps {
  inputValue: any;
  errorText?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: any) => void;
  name: string;
  type?: string;
  label?: string;
  required?: boolean;
  inputclass: string;
  autoComplete?: boolean;
}

const Input = ({
  inputValue,
  onChange,
  onBlur,
  name,
  type = "text",
  label,
  required = false,
  inputclass,
  autoComplete = false,
  errorText,
}: IProps) => {
  const { value, isValid, isTouched } = inputValue;
  return (
    <div className={inputclass}>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        className={!isValid && isTouched ? "invalid" : ""}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete ? "on" : "off"}
      />
      {!isValid && isTouched && <p className="error-text">{errorText}</p>}
    </div>
  );
};

export default Input;
