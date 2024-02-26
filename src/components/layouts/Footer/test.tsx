import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiWhatsappLogo,
} from "react-icons/pi";

export const Footer = () => {
  const router = useRouter();

  const ICON_SIZE = 24;
  const socials = [
    {
      name: "Instagram",
      icon: <PiInstagramLogo size={ICON_SIZE} />,
    },
    {
      name: "Whatsapp",
      icon: <PiWhatsappLogo size={ICON_SIZE} />,
    },
    {
      name: "Facebook",
      icon: <PiFacebookLogo size={ICON_SIZE} />,
    },
  ];

  const footerLinks = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "Projects",
      path: "#",
    },
    {
      name: "Team",
      path: "#",
    },
    {
      name: "About",
      path: "#",
    },
    {
      name: "Get Involved",
      path: "#",
    },
  ];

  return (
    <>
      <div className="mt-12 h-10 bg-main-orange lg:h-20" />
      <footer className="flex flex-col bg-[#121212] px-6 py-14 text-white lg:px-16">
        <div className="flex w-full grid-cols-2 flex-col items-center justify-between gap-20 border md:grid lg:flex-row">
          <section className="flex flex-col gap-y-8 border">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-x-2">
              <Image
                src={"/logo2.svg"}
                alt="logo"
                width={100}
                height={100}
                className="w-24"
              />
              <span className="text-5xl font-bold text-main-orange">SMILE</span>
            </Link>

            {/* Socials */}
            <div className="flex items-center justify-center gap-x-6">
              {socials.map((social) => (
                <Link
                  href="#"
                  className="rounded-full bg-white p-2 text-black"
                  key={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </section>

          {/* Footer Links */}
          <section className="flex flex-row gap-6 border md:flex-col">
            {footerLinks.map((link) => (
              <Link
                href={link.path}
                className={`text-xs font-medium lg:text-lg ${router.pathname === link.path ? "font-extrabold text-main-orange" : ""}`}
                key={link.name}
              >
                {link.name}
              </Link>
            ))}
          </section>
        </div>
        {/* Footer Image */}
        <figure className="order-first self-center">
          <Image src="/bro.svg" alt="bro" width={300} height={300} />
        </figure>

        {/* Copyright */}
        <div className="flex items-center justify-center gap-x-2">
          <span className="text-lg lg:text-3xl">©</span>
          <p className="text-sm font-medium lg:text-lg">
            2023 Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </footer>
    </>
  );
};
