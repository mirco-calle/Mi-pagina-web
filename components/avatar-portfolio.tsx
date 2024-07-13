"use client";
import MotionTransition from "./transition-component";
import Image from "next/image";

export const AvatarPortfolio = () => {
  return (
    <MotionTransition
      position="botton"
      className="bottom-0 left-0 hidden md:inline-block md:absolute"
    >
      <Image
        src="/avatar-works.png"
        width={300}
        height={300}
        className="w-full h-full"
        alt="Avatar portfolio"
      />
    </MotionTransition>
  );
};
