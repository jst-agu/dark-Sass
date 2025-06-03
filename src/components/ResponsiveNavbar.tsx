"use client";
import { useEffect, useRef } from "react";
import { navLinks } from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";

interface ResponsiveNavbarProps {
  open: boolean;
  onClose: () => void;
}

export const ResponsiveNavbar = ({ open, onClose }: ResponsiveNavbarProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black backdrop-blur-sm z-20 sm:hidden"
          />

          {/* Side panel */}
          <motion.div
            ref={panelRef}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-[70%] w-[378px] bg-black/70 z-30 flex flex-col items-start mt-32  px-6 gap-6 sm:hidden shadow-xl"
          >
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                onClick={onClose}
                className="text-white text-xl font-semibold hover:text-purple-400 transition relative group"
              >
                {item.link}
                {/* Active indicator effect */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 transition-all group-hover:w-full"></span>
              </a>
            ))}

            <button className="bg-white px-4 py-2 rounded-lg">Free Demo</button>

            {/* Gradient border button */}
            <button
                onClick={onClose}
                className="mt-6 px-4 py-2 rounded-lg bg-black text-white 
                relative overflow-hidden border-2 border-transparent hover:text-black 
                hover:bg-white/80 transition-all duration-300"
                >
                Close X
          </button>

            <div>
              <p className="text-white text-sm mt-6">
                © Made By Agu | +2347051149394
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
