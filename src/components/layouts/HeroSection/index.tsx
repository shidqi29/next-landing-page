import Image from "next/image";
import React from "react";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiWhatsappLogo,
} from "react-icons/pi";

export const HeroSection = () => {
  const ICON_SIZE = 24;
  const socials = [
    {
      name: "Instagram",
      icon: <PiInstagramLogo size={ICON_SIZE} />,
      isActive: true,
    },
    {
      name: "Whatsapp",
      icon: <PiWhatsappLogo size={ICON_SIZE} />,
      isActive: false,
    },
    {
      name: "Facebook",
      icon: <PiFacebookLogo size={ICON_SIZE} />,
      isActive: false,
    },
  ];
  return (
    <section className="py-14">
      <div className="flex flex-col items-center gap-y-12">
        <div className="grid w-full grid-cols-1 place-items-center gap-y-12 md:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:justify-between">
          <p className="hidden w-80 font-medium lg:block">
            Inventore ratione tenetur sit in quos unde ex sunt dolores.
            Aspernatur minus sed harum ut eos et at omnis. Laborum non nihil
            rerum aliquam sint assumenda.
          </p>
          <div className="text-5xl font-bold">
            <h1 className="font-outline-2 text-transparent">The Cute Smile</h1>
            <span className="text-main-orange">Charity</span>
          </div>
          <div className="relative flex w-fit">
            <Image
              src="arrow.svg"
              alt="Arrow"
              width={155}
              height={59}
              className="translate-y-1/4 overflow-hidden md:absolute md:bottom-0 md:-translate-x-40 md:translate-y-1/3 lg:-translate-x-40 lg:translate-y-1/2"
            />
            <Image src="/donate.svg" alt="Donate" width={144} height={144} />
          </div>
          <ul className="flex translate-x-0 items-center gap-8 md:translate-x-56 lg:translate-x-0 lg:flex-col">
            {socials.map((social) => (
              <li
                key={social.name}
                className={`${
                  social.isActive
                    ? "text-main-orange"
                    : "text-[#DDDDDD] hover:text-main-orange"
                }`}
              >
                {social.icon}
              </li>
            ))}
          </ul>
        </div>
        <Image src="/begging.png" alt="Begging" width={674} height={440} />
      </div>
    </section>
  );
};
