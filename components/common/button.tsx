import React from "react";

interface IProps {
  Icon?: any;
  text: string;
}

const Button: React.FC<IProps> = ({ Icon, text }) => {
  return (
    <button className="flex justify-center items-center min-w-[100px] outline-none px-3 py-2 rounded-xl bg-blue-700 text-white hover:bg-blue-500 transition-all">
      {Icon && <Icon className="h-5 w-5 mr-1" />}
      <div className="text-xs lg:text-md">{text}</div>
    </button>
  );
};

export default Button;
