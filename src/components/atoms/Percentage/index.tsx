import React from "react";

type PercentageProps = {
  title: string;
  progress: number;
};

export const Percentage = ({ title, progress }: PercentageProps) => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex justify-between font-bold">
        <p>{title}</p>
        <p>{progress}%</p>
      </div>
      <div className="relative">
        <div className="h-3 w-full bg-soft-orange" />
        <div className={`absolute top-0 h-3 w-[${progress}%] bg-main-orange`} />
      </div>
    </div>
  );
};
