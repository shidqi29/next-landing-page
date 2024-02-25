import Image from "next/image";
import React from "react";

export const Achievements = () => {
  const achievements = [
    {
      icon: "/rised-icon.svg",
      number: "4597+",
      text: "People Rised",
    },
    {
      icon: "/volunteer-icon.svg",
      number: "8945+",
      text: "Volunteer",
    },
    {
      icon: "/saved-icon.svg",
      number: "10M+",
      text: "Poor People Saved",
    },
    {
      icon: "/country-icon.svg",
      number: "100+",
      text: "Country Member",
    },
  ];
  
  return (
    <article className="grid grid-cols-1 gap-6 py-10 md:grid-cols-2 lg:grid-cols-4">
      {achievements.map((achievement) => (
        <section
          key={achievement.text}
          className="flex flex-col items-center gap-y-8 bg-soft-orange p-8"
        >
          <Image
            src={achievement.icon}
            width={120}
            height={120}
            alt={achievement.text}
          />
          <div className="flex flex-col items-center gap-y-4">
            <p className="text-5xl font-bold">{achievement.number}</p>
            <p className="font-semibold text-black/70">{achievement.text}</p>
          </div>
        </section>
      ))}
    </article>
  );
};
