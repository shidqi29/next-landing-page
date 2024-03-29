import React from "react";

type BoxContentProps = {
  children: React.ReactNode;
  width: string;
  className?: string;
};

export const BoxContent = ({
  children,
  width = "w-80%",
  className,
}: BoxContentProps) => {
  return (
    <div
      className={`bg-main-orange/20 bg-center bg-origin-content p-4 ${width} ${className}`}
    >
      {children}
    </div>
  );
};
