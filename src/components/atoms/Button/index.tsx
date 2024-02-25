import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={`w-fit bg-main-orange px-6 py-3 font-medium text-white ${className}`}
    >
      {children}
    </button>
  );
};
