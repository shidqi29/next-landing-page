import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button = ({
  children,
  className,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`w-fit bg-main-orange px-6 py-3 font-medium text-white ${className}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
