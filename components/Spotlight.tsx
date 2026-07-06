"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  "/work-1.jpeg", 
  "/work-2.jpeg",
  "/work-3.jpeg",
];
export default function Spotlight() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (IMAGES.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="work"
      className="max-w-max-width mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin-desktop py-stack-lg"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
         {/* Kontainer Gambar */}
        <div className="md:col-span-8 relative h-[400px] md:h-[600px] overflow-hidden group bg-surface-variant">
          
          {/* Track yang bergeser */}
          <motion.div
            className="flex h-full w-full"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {IMAGES.map((src, index) => (
              <div key={index} className="relative min-w-full h-full">
                <Image
                  src={src}
                  alt={`Project ${index + 1}`}
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover transition-all duration-700"
                  priority={index === 0}
                />
              </div>
            ))}
          </motion.div>

          {/* Indikator Titik Kecil (Opsional, agar user tahu ada berapa foto) */}
          <div className="absolute bottom-6 left-6 flex gap-2">
            {IMAGES.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-300 ${i === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"}`}
              />
            ))}
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col justify-start p-8 bg-surface-container-low border border-surface-variant">
          <h2 className="font-primary-heading text-primary-heading mb-4">
            Uncompromising Quality
          </h2>
          <p className="text-on-surface-variant leading-relaxed">
            We believe that quality is not only reflected in a visually appealing final result, but also in every step of the process behind it. By combining technical precision with creative intuition, we create digital experiences that are modern, meaningful, and designed to leave a lasting impression on every audience.
          </p>
        </div>
      </div>
    </section>
  );
}
