"use client";

import { motion } from "motion/react";

const stages = [
  {
    label: "Views",
    flex: 1.45,
    clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
  },
  {
    label: "Followers",
    flex: 1.2,
    clipPath: "polygon(0 0, 100% 0, 86% 100%, 0 100%)",
  },
  {
    label: "Inquiries",
    flex: 0.95,
    clipPath: "polygon(0 0, 100% 0, 84% 100%, 0 100%)",
  },
  {
    label: "New Members",
    flex: 0.8,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
];

export function HeroFunnelChart() {
  return (
    <div className="mx-auto mt-14 w-full max-w-[760px]">
      <div className="rounded-[28px] border border-white/10 bg-white/[0.03] px-4 py-4 sm:px-5 sm:py-5">
        <div className="flex items-center gap-2 sm:gap-3">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex h-14 min-w-0 items-center justify-center overflow-hidden border border-white/12 bg-white/[0.05] px-3 sm:h-16 sm:px-4 md:h-[72px]"
              style={{
                flex: `${stage.flex} ${stage.flex} 0%`,
                clipPath: stage.clipPath,
              }}
            >
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-120%", opacity: 0 }}
                animate={{ x: "120%", opacity: [0, 0.45, 0] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
              <span className="relative text-center font-body text-[11px] font-medium tracking-[0.04em] text-white/90 sm:text-[12px] md:text-[13px]">
                {stage.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
