import React from "react";
import Image from "next/image";

export const OurGallery = () => {
  const gallery = [
    {
      image: "/gallery-1.png",
      alt: "gallery-1",
    },
    {
      image: "/gallery-2.png",
      alt: "gallery-2",
    },
    {
      image: "/gallery-3.png",
      alt: "gallery-3",
    },
    {
      image: "/Rectangle2880.png",
      alt: "Rectangle2880",
    },
    {
      image: "/Rectangle2881.png",
      alt: "Rectangle2881",
    },
    {
      image: "/gallery-4.png",
      alt: "gallery-4",
    },
  ];

  return (
    <article className="flex flex-col gap-y-14 py-14">
      <h2 className="text-4xl font-bold">Our Gallery</h2>
      <section className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {gallery.map(({ image, alt }) => (
          <Image key={alt} src={image} width={440} height={300} alt={alt} />
        ))}
      </section>
    </article>
  );
};
