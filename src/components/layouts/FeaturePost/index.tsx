import Image from "next/image";
import React from "react";

import { BoxContent, Percentage } from "@/components/atoms";

export const FeaturePost = () => {
  const features = [
    {
      text: "Together, we're going to make the future",
      isActive: true,
    },
    {
      text: "Children where we are able to fulfill all",
      isActive: false,
    },
    {
      text: "Their requirements to keep them safe from withered world",
      isActive: false,
    },
    {
      text: "We have already stepped out and start changing the world",
      isActive: false,
    },
    {
      text: "Keeping safe them from war, inhumanity",
      isActive: false,
    },
  ];

  const goals = [
    {
      icon: "/Group3181.svg",
      title: "Our Mission",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    },
    {
      icon: "/Group3180.svg",
      title: "Our Vission",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    },
  ];

  return (
    <article className="grid grid-cols-1 place-items-center gap-24 py-10 lg:grid-cols-2">
      <section className="order-last flex flex-col justify-center gap-y-4 lg:order-first">
        <h2 className="text-lg font-semibold">Welcome To Charity</h2>
        <h3 className="text-4xl font-bold">
          Let Us Come Together To Make a Difference
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo.
        </p>
        <div className="grid grid-cols-2 gap-x-4">
          {goals.map((goal) => (
            <div
              key={goal.title}
              className="flex w-fit flex-col gap-y-2 bg-soft-orange p-4"
            >
              <div className="flex items-center gap-x-4">
                <Image
                  src={goal.icon}
                  alt={goal.title}
                  width={32}
                  height={28}
                />
                <p className="text-xl font-bold text-main-orange">
                  {goal.title}
                </p>
              </div>
              <p className="text-sm">{goal.text}</p>
            </div>
          ))}
        </div>
        <Percentage title="Donations" progress={75} />
        <Percentage title="Medical Help" progress={90} />
      </section>
      <section className="relative mb-14 lg:mb-0">
        <BoxContent width="w-[80%]">
          <Image
            src="/Rectangle2880.png"
            width={440}
            height={450}
            alt="Rectangle2880"
          />
        </BoxContent>
        <BoxContent
          width="w-[70%]"
          className="absolute -bottom-20 right-0 z-10"
        >
          <ul className="flex list-disc flex-col gap-y-1 bg-white px-6 py-2 md:gap-y-2">
            {features.map((feature) => (
              <li
                key={feature.text}
                className={`text-xs tracking-tight md:text-sm md:tracking-normal ${feature.isActive ? "text-main-orange" : ""}`}
              >
                {feature.text}
              </li>
            ))}
          </ul>
        </BoxContent>
      </section>
    </article>
  );
};
