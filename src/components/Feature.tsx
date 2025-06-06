"use client";
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import EcosystemIcon from '../assets/icons/ecosystem.svg'
import { useEffect, useRef } from 'react';

interface FeatureProps {
        title: string;
        description: string;
}


export const Feature = ({title, description} : FeatureProps) => {
    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
    const border = useRef<HTMLDivElement>(null);
    useEffect(() => {
       const updateMousePosition = (e: MouseEvent) => {
           //e.x
           //e.y
           if (!border.current) return;
           const borderRect = border.current?.getBoundingClientRect();
           offsetX.set(e.x - borderRect.x);
           offsetY.set(e.y - borderRect.y);
       }
       window.addEventListener('mousemove', updateMousePosition);
       return () => {
        window.removeEventListener('mousemove', updateMousePosition);
       } 
}, []);

    return (
        <div className='border border-white/30 px-5 
            py-10 text-center rounded-xl sm:flex-1 relative'>
                <motion.div className='absolute inset-0 border-2 border-purple-400 rounded-xl'
                style={{
                    WebkitMaskImage: maskImage as unknown as string,
                    maskImage: maskImage as unknown as string,
                }}
                ref={border}
                >
                    </motion.div>
              <div className='inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg'>
                <EcosystemIcon />
              </div>
              <h3 className='mt-6 font-bold'>{title}</h3>
              <p className='mt-2 text-white'>{description}</p>
            </div>
    );
}