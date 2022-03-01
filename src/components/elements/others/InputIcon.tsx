import React, { ReactNode } from "react";

import "./InputIcon.css";

interface IProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  value: string;
  placeholder?: string;
  type?: string;
  inputClass?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputIcon = ({
  leftIcon,
  rightIcon,
  value,
  onChange,
  onKeyUp,
  placeholder="",
  type = "text",
  inputClass,
}: IProps) => {
  return (
    <div className="input-icons">
      {leftIcon}
      <input
        className={inputClass}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      {rightIcon}
    </div>
  );
};

export default InputIcon;
