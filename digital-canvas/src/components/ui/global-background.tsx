
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedShaderBackground from './animated-shader-background';

const MarqueeText = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none flex flex-col items-center justify-center gap-32 opacity-[0.05]">
    <motion.div
      className="whitespace-nowrap text-[15vh] font-black uppercase text-foreground/20 leading-none"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 40,
      }}
      style={{ rotate: -15, scale: 1.5 }}
    >
      Creative Technologist • Designer • Developer • Visionary • Architect • Creative Technologist • Designer • Developer • Visionary • Architect •
    </motion.div>
    <motion.div
      className="whitespace-nowrap text-[15vh] font-black uppercase text-foreground/20 leading-none"
      animate={{ x: ["-50%", "0%"] }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 45,
      }}
      style={{ rotate: -15, scale: 1.5 }}
    >
      Innovation • Experience • Interface • Interaction • Future • Innovation • Experience • Interface • Interaction • Future •
    </motion.div>
  </div>
);

const NoiseOverlay = () => (
  <div className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03] mix-blend-overlay">
    <svg className="w-full h-full">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

export default function GlobalBackground() {
  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <AnimatedShaderBackground />
      </div>
      <NoiseOverlay />
      <MarqueeText />
    </>
  );
}
