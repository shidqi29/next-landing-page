import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { PiList, PiX } from "react-icons/pi";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const router = useRouter();

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navLink = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "#",
    },
    {
      name: "Blog",
      path: "#",
    },
    {
      name: "Campaigns",
      path: "#",
    },
    {
      name: "Connect Us",
      path: "#",
    },
  ];

  const navMobile = () => {
    return (
      <nav className="absolute left-0 w-full bg-white lg:hidden">
        <ul className="flex flex-col gap-y-1 pb-4 text-lg">
          {navLink.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`font-medium transition-all hover:text-main-orange ${router.pathname === link.path ? "text-main-orange" : ""}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <>
      <header className="sticky top-0 z-10 max-h-72 w-full bg-white">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-x-2">
            <Image
              src={"/logo.svg"}
              alt="logo"
              width={50}
              height={50}
              className="w-8 md:w-12"
            />
            <span className="text-base font-bold text-main-orange md:text-2xl">
              SMILE
            </span>
          </Link>
          <ul className="hidden gap-x-4 text-lg lg:flex">
            {navLink.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className={`font-medium transition-all hover:text-main-orange ${router.pathname === link.path ? "text-main-orange" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/*Mobile Menu Button */}
          <button onClick={handleClick} className="lg:hidden">
            {isMenuOpen ? <PiX size={24} /> : <PiList size={24} />}
          </button>
        </nav>

        {/* Mobile Navbar */}
        {isMenuOpen && navMobile()}
      </header>
    </>
  );
};
