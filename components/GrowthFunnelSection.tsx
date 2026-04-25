"use client";

import {
  ArrowRight,
  BadgeCheck,
  Camera,
  DollarSign,
  Dumbbell,
  Globe2,
  Heart,
  MessageCircle,
  MousePointerClick,
  Music2,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const socialPlatforms = [
  {
    name: "Instagram",
    icon: Camera,
    accent: "bg-accent",
    metrics: ["Views", "Likes"],
  },
  {
    name: "Facebook",
    icon: Users,
    accent: "bg-white",
    metrics: ["Follows", "Inquiries"],
  },
  {
    name: "TikTok",
    icon: Music2,
    accent: "bg-accent",
    metrics: ["Views", "Follows"],
  },
];

const trustMarkers = ["Beginner Friendly", "Real Coaches", "Flexible Classes"];

function FlowArrow({ vertical = false }: { vertical?: boolean }) {
  return (
    <div
      className={
        vertical
          ? "flex h-12 items-center justify-center lg:hidden"
          : "hidden items-center justify-center lg:flex"
      }
      aria-hidden="true"
    >
      <div
        className={
          vertical
            ? "h-10 w-px bg-gradient-to-b from-transparent via-accent/70 to-transparent"
            : "h-px w-12 bg-gradient-to-r from-transparent via-accent/70 to-transparent"
        }
      />
      <ArrowRight
        className={
          vertical
            ? "absolute h-4 w-4 rotate-90 text-accent"
            : "absolute h-4 w-4 text-accent"
        }
        strokeWidth={1.8}
      />
    </div>
  );
}

function MiniTrendLine() {
  return (
    <svg viewBox="0 0 72 28" className="h-7 w-20 text-accent" aria-hidden="true">
      <motion.path
        d="M4 23 C18 20 19 13 32 15 C45 17 46 7 68 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0.3 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <circle cx="68" cy="5" r="3" fill="currentColor" />
    </svg>
  );
}

function SocialCard({
  platform,
  index,
}: {
  platform: (typeof socialPlatforms)[number];
  index: number;
}) {
  const Icon = platform.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="rounded-2xl border border-white/12 bg-white/[0.045] p-4 shadow-[0_24px_80px_rgb(0_0_0/0.12)]"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-black/20">
            <Icon className="h-4 w-4 text-white" strokeWidth={1.8} />
          </div>
          <p className="font-body text-[13px] font-medium text-white">
            {platform.name}
          </p>
        </div>
        <div className={`h-2 w-2 rounded-full ${platform.accent}`} />
      </div>

      <div className="mt-4 flex items-end justify-between gap-3">
        <div className="space-y-2">
          {platform.metrics.map((metric) => (
            <div
              key={metric}
              className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-2.5 py-1"
            >
              {metric === "Likes" ? (
                <Heart className="h-3 w-3 text-accent" strokeWidth={1.8} />
              ) : metric === "Inquiries" ? (
                <MessageCircle
                  className="h-3 w-3 text-accent"
                  strokeWidth={1.8}
                />
              ) : (
                <TrendingUp
                  className="h-3 w-3 text-accent"
                  strokeWidth={1.8}
                />
              )}
              <span className="font-body text-[11px] font-medium text-white/75">
                {metric}
              </span>
            </div>
          ))}
        </div>
        <MiniTrendLine />
      </div>
    </motion.article>
  );
}

function AttentionCard() {
  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl border border-accent/25 bg-accent/[0.08] p-5"
    >
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent" />
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-body text-[11px] font-medium uppercase text-accent">
            Attention + Demand
          </p>
          <p className="mt-2 max-w-[18ch] font-display text-[22px] font-medium leading-tight text-white">
            People start asking about the gym.
          </p>
        </div>
        <div className="grid h-16 w-16 place-items-center rounded-full border border-accent/25 bg-accent/10">
          <Users className="h-6 w-6 text-accent" strokeWidth={1.7} />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        {["Follows", "Inquiries", "Saves", "Shares"].map((label) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2 font-body text-[12px] font-medium text-white/75"
          >
            {label}
          </div>
        ))}
      </div>
    </motion.article>
  );
}

function WebsiteCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-2xl border border-white/12 bg-white/[0.045] p-4"
    >
      <div className="rounded-xl border border-white/10 bg-[#062f21] p-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Globe2 className="h-4 w-4 text-accent" strokeWidth={1.8} />
            <span className="font-body text-[11px] font-medium text-white/55">
              gym website
            </span>
          </div>
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-28 overflow-hidden rounded-xl border border-white/10 bg-white/[0.055]">
            <div className="absolute inset-4 rounded-lg border border-white/12" />
            <Dumbbell
              className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 text-accent"
              strokeWidth={1.5}
            />
          </div>
          <div>
            <p className="font-display text-[22px] font-medium leading-tight text-white">
              Free Trial Class
            </p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-body text-[12px] font-medium text-bg-primary">
              Book Now
              <MousePointerClick className="h-3.5 w-3.5" strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {trustMarkers.map((marker) => (
            <span
              key={marker}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1 font-body text-[11px] font-medium text-white/70"
            >
              <BadgeCheck className="h-3 w-3 text-accent" strokeWidth={1.8} />
              {marker}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function OutcomeCard() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl border border-accent/30 bg-white/[0.055] p-5 shadow-[0_0_60px_rgb(232_213_160/0.14)]"
    >
      <motion.div
        className="absolute inset-0 bg-accent/10"
        animate={{ opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-body text-[11px] font-medium uppercase text-accent">
            Gym Growth
          </p>
          <p className="mt-2 font-display text-[24px] font-medium text-white">
            New Members
          </p>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-accent/25 bg-accent/10">
          <DollarSign className="h-5 w-5 text-accent" strokeWidth={1.8} />
        </div>
      </div>

      <div className="relative mt-5 space-y-2">
        {["Class Packages", "New Members", "Revenue"].map((label) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-black/10 px-3 py-2"
          >
            <span className="font-body text-[12px] font-medium text-white/75">
              {label}
            </span>
            <span className="h-2 w-10 rounded-full bg-accent/70" />
          </div>
        ))}
      </div>

      <div className="relative mt-5 flex h-20 items-end gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-3">
        {[34, 46, 42, 58, 70, 86].map((height, index) => (
          <motion.span
            key={height}
            className="flex-1 rounded-t-md bg-accent/80"
            initial={{ height: 8 }}
            whileInView={{ height }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          />
        ))}
      </div>
    </motion.article>
  );
}

export function GrowthFunnelSection() {
  return (
    <div className="mx-auto mt-14 w-full max-w-[1120px] md:mt-16">
      <div className="text-center">
        <p className="font-display text-[28px] font-medium leading-tight text-white md:text-[34px]">
          Turn Attention Into Members
        </p>
        <p className="mx-auto mt-4 max-w-[660px] font-body text-[15px] leading-7 text-white/70 md:text-[16px]">
          Content, ads, and optimized pages working together to bring more
          fighters through your doors.
        </p>
      </div>

      <div className="mt-10 grid items-center gap-4 lg:grid-cols-[1.15fr_auto_0.72fr_auto_1.05fr_auto_0.9fr]">
        <div className="grid gap-3">
          {socialPlatforms.map((platform, index) => (
            <SocialCard key={platform.name} platform={platform} index={index} />
          ))}
        </div>

        <FlowArrow />
        <FlowArrow vertical />

        <AttentionCard />

        <FlowArrow />
        <FlowArrow vertical />

        <WebsiteCard />

        <FlowArrow />
        <FlowArrow vertical />

        <OutcomeCard />
      </div>
    </div>
  );
}
