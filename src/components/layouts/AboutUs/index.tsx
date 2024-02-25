import { BoxContent, Button } from "@/components/atoms";
import Image from "next/image";
import React from "react";

export const AboutUs = () => {
  return (
    <article className="grid grid-cols-1 place-items-center gap-14 py-10 md:px-12 lg:grid-cols-2 lg:px-24">
      <div className="relative mb-14 lg:mb-0">
        <BoxContent width="75%">
          <Image
            src="/Rectangle2881.png"
            width={440}
            height={450}
            alt="Rectangle2881"
          />
        </BoxContent>
        <BoxContent width="50%" className="absolute -bottom-20 right-0 z-10">
          <Image
            src="/Rectangle2882.png"
            width={330}
            height={348}
            alt="Rectangle2882"
          />
        </BoxContent>
      </div>
      <section className="flex flex-col justify-center gap-y-4">
        <h2 className="text-lg font-semibold">About Us</h2>
        <h3 className="text-4xl font-bold">Your Support is Really Powerful.</h3>
        <p>
          Voluptatem necessitatibus et id quia eos. Sequi accusantium
          repellendus. Voluptas sit natus. Est in aut nostrum in dolor.
          Inventore eius qui est sunt et exercitationem neque placeat aut.
          Architecto debitis cupiditate.
        </p>
        <Button>Read More</Button>
      </section>
    </article>
  );
};
