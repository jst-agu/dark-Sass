'use client';
import helixImage from '../assets/images/helix2.png';
import emojiStarImage from '../assets/images/emojistar.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center overflow-hidden"
    ref={containerRef}>
      <div className="container max-w-[375px] sm:max-w-3xl relative mx-auto">
        <motion.div
        style={{
          translateY
        }}
        >
        <Image src={helixImage} alt="Helix Logo" className="absolute 
        top-6 left-[calc(100%+36px)]" />
        </motion.div>
        <motion.div
        style={{
          translateY
        }}
        >
        <Image src={emojiStarImage} alt="Emoji Star" className="absolute 
        -top-[120px] right-[calc(100%+24px)]" />
        </motion.div>
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
          </h2>
          <p className="mt-5 text-xl text-white/70">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
          <form className="gap-2.5 mt-10 flex flex-col max-w-sm sm:flex-row mx-auto">
            <input type="text" placeholder="Enter your email"
            className="h-12 px-5 rounded-lg bg-white/20 font-medium 
            placeholder:text-[#9CA3AF] sm:flex-1" />
            <button className='h-12 rounded-lg bg-white text-black px-5'>
              Get Started
              </button>
          </form>
      </div>
    </div>
  );
};
