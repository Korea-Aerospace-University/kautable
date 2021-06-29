import React from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  Icon?: any;
  text: string;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({ Icon, text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} flex justify-center items-center min-w-[100px] outline-none px-3 py-2 rounded-xl bg-[#40368a] text-white hover:bg-blue-700 transition-all`}
    >
      {Icon && <Icon className="h-5 w-5 mr-1" />}
      <div className="text-xs lg:text-sm">{text}</div>
    </button>
  );
};

export default Button;
