import React from "react";

interface Props {
  className: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ className, children, onClick, ...rest }) => {
  return (
    <button
      className={`text-white bg-slate-700 w-full block appearance-none px-5 py-2.5 uppercase rounded ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
