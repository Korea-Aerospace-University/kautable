import React from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  text: string;
  className: string;
  Icon?: any;
}

const OutlineButton: React.FC<ButtonProps> = ({ className, text, Icon }) => {
  return (
    <button
      className={`flex justify-center text-xs lg:text-base items-center p-2 border-2 rounded-xl ${className} transition-colors`}
    >
      {Icon && <Icon className="h-5 w-5 mr-1" />}
      <span>{text}</span>
    </button>
  );
};

export default OutlineButton;
