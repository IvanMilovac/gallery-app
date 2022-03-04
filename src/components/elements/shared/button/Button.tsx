import React, { ReactNode } from "react";

import "./Button.css";

interface IProps {
  children?: ReactNode;
  id?: string;
  leftIcon?: any;
  rightIcon?: any;
  buttonClass?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  children,
  id,
  buttonClass = "btn",
  leftIcon,
  rightIcon,
  type = "button",
  disabled = false,
  onClick = () => {},
}: IProps) => {
  return (
    <button
      className={buttonClass}
      id={id}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

export default Button;
