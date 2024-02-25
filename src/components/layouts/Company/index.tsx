import Image from "next/image";
import React from "react";

export const Company = () => {
  const companies = [
    {
      image: "/company-1.svg",
      alt: "company-1",
    },
    {
      image: "/company-2.svg",
      alt: "company-2",
    },
    {
      image: "/company-3.svg",
      alt: "company-3",
    },
    {
      image: "/company-4.svg",
      alt: "company-4",
    },
  ];
  return (
    <section className="grid grid-cols-1 gap-12 px-8 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-24">
      {companies.map((company) => (
        <Image
          key={company.alt}
          src={company.image}
          alt={company.alt}
          width={300}
          height={120}
        />
      ))}
    </section>
  );
};
