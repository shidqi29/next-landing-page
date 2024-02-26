import React from "react";
import Image from "next/image";

export const OurGallery = () => {
  const gallery = [
    {
      image: "/gallery-1.png",
      alt: "gallery-1",
      width: 400,
      height: 300,
    },
    {
      image: "/gallery-2.png",
      alt: "gallery-2",
      width: 300,
      height: 300,
    },
    {
      image: "/gallery-3.png",
      alt: "gallery-3",
      width: 400,
      height: 300,
    },
    {
      image: "/Rectangle2880.png",
      alt: "Rectangle2880",
      width: 300,
      height: 300,
    },
    {
      image: "/Rectangle2882.png",
      alt: "Rectangle2882",
      width: 300,
      height: 300,
    },
    {
      image: "/Rectangle2881.png",
      alt: "Rectangle2881",
      width: 300,
      height: 300,
    },
    {
      image: "/gallery-4.png",
      alt: "gallery-4",
      width: 300,
      height: 300,
    },
  ];

  return (
    <article className="flex flex-col gap-y-14 py-14">
      <h2 className="text-4xl font-bold">Our Gallery</h2>
      <section className="flex flex-wrap justify-center gap-6">
        {gallery.map(({ image, alt, width, height }) => (
          <Image
            key={alt}
            src={image}
            width={width}
            height={height}
            alt={alt}
            className={`w-[${width}px] h-[${height}px]`}
          />
        ))}
      </section>
    </article>
  );
};
