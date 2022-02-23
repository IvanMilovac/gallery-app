import React, { ReactNode } from "react";

interface IProps {
  icon: ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputIcon = ({ icon, value, onChange }: IProps) => {
  return (
    <div className="input-icons">
      {icon}
      <input
        className="input-field"
        type="text"
        placeholder="Search showcase..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputIcon;
