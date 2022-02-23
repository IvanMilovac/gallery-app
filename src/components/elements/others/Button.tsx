import React from "react";

import "../../../style/components/Button.css";

interface IProps {
  children: string;
  icon?: React.ReactElement<any>;
  isLoading?: boolean;
  buttonclass: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
  children,
  buttonclass,
  icon,
  isLoading,
  type = "button",
  disabled = false,
  onClick = () => {},
}: IProps) => {
  return (
    <button
      className={`btn ${buttonclass}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
