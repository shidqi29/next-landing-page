import Image from "next/image";
import React from "react";

export const OurFeatures = () => {
  const features = [
    {
      icon: "/home-icon.svg",
      title: "Food & Homeless Charity",
      subtitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy  tempor invidunt ut labore et magna aliquyam erat, sed diam voluptua.....",
      mission: [
        "Join your hand with us for a better life",
        "Let's do the right thing now",
      ],
    },
    {
      icon: "/donation-icon.svg",
      title: "Make A Donation",
      subtitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy  tempor invidunt ut labore et magna aliquyam erat, sed diam voluptua.....",
      mission: [
        "Join your hand with us for a better life",
        "Let's do the right thing now",
        "Lorem Ipsu Dolor Sit Amet",
      ],
    },
    {
      icon: "/handshake-icon.svg",
      title: "Non Profit NGO",
      subtitle:
        "Lorem ipsum dolor sit amet, consetetur sadipscing sed diam nonumy  tempor invidunt ut labore et magna aliquyam erat, sed diam voluptua.....",
      mission: [
        "Join your hand with us for a better life",
        "Let's do the right thing now",
        "Lorem Ipsu Dolor Sit Amet",
        "Lorem Ipsu Dolor Sit Amet",
      ],
    },
  ];

  return (
    <article className="hidden flex-col gap-y-14 py-10 lg:flex">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-xl font-semibold">About</h2>
        <h3 className="text-4xl font-bold">Our Features</h3>
      </div>
      <section className="grid grid-cols-3 gap-x-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col gap-y-4 bg-soft-orange px-4 py-8"
          >
            <Image src={feature.icon} width={90} height={90} alt="icon" />
            <h4 className="text-xl font-bold">{feature.title}</h4>
            <p className="text-sm text-black/70">{feature.subtitle}</p>
            <ol className="list-inside list-decimal font-medium">
              {feature.mission.map((mission) => (
                <li key={mission}>{mission}</li>
              ))}
            </ol>
          </div>
        ))}
      </section>
    </article>
  );
};
