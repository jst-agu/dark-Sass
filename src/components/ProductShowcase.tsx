"use client";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end start"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b 
    from-[#000] to-[#5D2CAB] sm:py-24 py-[72px] overflow-hidden">
      <div className="container mx-auto">
        <h2 className="font-bold sm:text-6xl text-5xl text-center tracking-tighter">
          Intuitive interface
          </h2>
        <div className="max-w-xl mx-auto">
        <p className="text-white/70 text-xl text-center mt-5">
          Celebrate the joy of complishment with an app to track
          your progress, motivate your efforts, and celebrate your
          successes, one task at a time.
        </p>
        </div>
        <motion.div
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "800px", 
        }}
        >
        <Image 
        src={appScreen} 
        alt="App Screen"
        className="mt-14 mx-auto" 
        ref={appImage} />
        </motion.div>
      </div>
    </div>
  );
};
