"use client";

import Image from "next/image";
import {
  ArrowRight,
  DollarSign,
  Dumbbell,
  Heart,
  MessageCircle,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const contentPosts = [
  {
    platform: "Instagram",
    src: "/instagram-icon.webp",
    label: "Reel",
    rotation: "-rotate-6",
    offset: "lg:translate-y-5",
  },
  {
    platform: "TikTok",
    src: "/tiktok-icon.png",
    label: "Clip",
    rotation: "rotate-2",
    offset: "lg:-translate-y-2",
  },
  {
    platform: "Facebook",
    src: "/facebook-icon.webp",
    label: "Post",
    rotation: "rotate-6",
    offset: "lg:translate-y-6",
  },
];

const dashboardMetrics = [
  { label: "Views", icon: TrendingUp },
  { label: "Follows", icon: Users },
  { label: "DMs / Inquiries", icon: MessageCircle },
];

const revenueOutcomes = ["New Members", "Personal Training Packages", "Revenue"];

function StageShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-w-0"
    >
      <div className="flex min-h-[245px] flex-col justify-between rounded-2xl border border-white/12 bg-white/[0.045] p-5 shadow-[0_24px_80px_rgb(0_0_0/0.12)]">
        {children}
      </div>
      <p className="mt-4 max-w-[19rem] font-body text-[14px] leading-6 text-white/75">
        {label}
      </p>
    </motion.article>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center" aria-hidden="true">
      <div className="relative hidden h-px w-10 bg-gradient-to-r from-transparent via-accent/75 to-transparent lg:block">
        <ArrowRight
          className="absolute -right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-accent"
          strokeWidth={1.8}
        />
      </div>
      <div className="relative h-10 w-px bg-gradient-to-b from-transparent via-accent/75 to-transparent lg:hidden">
        <ArrowRight
          className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-90 text-accent"
          strokeWidth={1.8}
        />
      </div>
    </div>
  );
}

function ClassesStage() {
  return (
    <StageShell label="Your coaching...">
      <div>
        <div className="flex items-center justify-between">
          <p className="font-body text-[11px] font-medium uppercase tracking-[0.08em] text-accent">
            Classes
          </p>
          <Dumbbell className="h-4 w-4 text-white/55" strokeWidth={1.7} />
        </div>

        <div className="mt-7 flex items-end justify-center gap-5">
          <div className="relative h-32 w-16">
            <div className="absolute left-1/2 top-0 h-5 w-px -translate-x-1/2 bg-white/20" />
            <div className="absolute left-1/2 top-5 h-24 w-12 -translate-x-1/2 rounded-full border border-white/15 bg-accent/15" />
            <div className="absolute left-1/2 top-9 h-16 w-8 -translate-x-1/2 rounded-full bg-accent/20" />
            <div className="absolute bottom-0 left-1/2 h-px w-14 -translate-x-1/2 bg-white/15" />
          </div>

          <div className="relative h-28 w-28 rounded-2xl border border-white/10 bg-black/10">
            <div className="absolute inset-4 rounded-xl border border-white/15" />
            <div className="absolute left-6 top-8 h-7 w-7 rounded-full border border-accent/60" />
            <div className="absolute left-8 top-[58px] h-9 w-px rotate-12 bg-accent/60" />
            <div className="absolute right-6 top-7 h-7 w-7 rounded-full border border-white/55" />
            <div className="absolute right-8 top-[56px] h-10 w-px -rotate-12 bg-white/45" />
            <div className="absolute left-9 top-14 h-px w-11 bg-white/35" />
          </div>
        </div>
      </div>
    </StageShell>
  );
}

function PhoneMockup({
  post,
  index,
}: {
  post: (typeof contentPosts)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className={`relative h-36 w-20 shrink-0 overflow-hidden rounded-[18px] border border-white/18 bg-[#071f18] p-1 shadow-2xl ${post.rotation} ${post.offset}`}
    >
      <div className="h-full rounded-[14px] border border-white/10 bg-white/[0.06]">
        <div className="mx-auto mt-1 h-1 w-6 rounded-full bg-white/20" />
        <div className="mx-2 mt-3 h-16 rounded-xl bg-gradient-to-b from-white/18 to-accent/12" />
        <div className="mx-2 mt-2 h-1.5 rounded-full bg-white/35" />
        <div className="mx-2 mt-1.5 h-1.5 w-9 rounded-full bg-white/20" />
        <div className="mx-2 mt-3 flex items-center justify-between">
          <Heart className="h-3 w-3 text-accent" strokeWidth={1.8} />
          <MessageCircle className="h-3 w-3 text-white/60" strokeWidth={1.8} />
          <TrendingUp className="h-3 w-3 text-accent" strokeWidth={1.8} />
        </div>
      </div>
      <div className="absolute -right-1 top-5 flex items-center gap-1 rounded-full border border-white/15 bg-black/70 px-1.5 py-1 backdrop-blur-sm">
        <Image
          src={post.src}
          alt={`${post.platform} icon`}
          width={16}
          height={16}
          className="h-4 w-4 rounded"
        />
        <span className="font-body text-[9px] font-medium text-white">
          {post.platform}
        </span>
      </div>
      <span className="absolute bottom-2 left-2 rounded-full bg-black/50 px-1.5 py-0.5 font-body text-[9px] font-medium text-white/80">
        {post.label}
      </span>
    </motion.div>
  );
}

function ContentStage() {
  return (
    <StageShell label="Turned into high engagement content.">
      <div>
        <div className="flex items-center justify-between">
          <p className="font-body text-[11px] font-medium uppercase tracking-[0.08em] text-accent">
            Content
          </p>
          <p className="font-body text-[11px] font-medium text-white/45">
            short-form
          </p>
        </div>

        <div className="mt-7 flex justify-center -space-x-3 sm:space-x-1 lg:-space-x-2">
          {contentPosts.map((post, index) => (
            <PhoneMockup key={post.platform} post={post} index={index} />
          ))}
        </div>
      </div>
    </StageShell>
  );
}

function EngagementStage() {
  return (
    <StageShell label="Driving views, follows, and inquiries.">
      <div>
        <div className="flex items-center justify-between">
          <p className="font-body text-[11px] font-medium uppercase tracking-[0.08em] text-accent">
            Engagement & Growth
          </p>
          <TrendingUp className="h-4 w-4 text-accent" strokeWidth={1.8} />
        </div>

        <div className="mt-7 rounded-2xl border border-white/10 bg-black/10 p-4">
          <div className="mb-4 flex items-end gap-2">
            {[26, 38, 34, 48, 62, 78].map((height, index) => (
              <motion.span
                key={height}
                initial={{ height: 8 }}
                whileInView={{ height }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="flex-1 rounded-t-md bg-accent/70"
              />
            ))}
          </div>

          <div className="space-y-2">
            {dashboardMetrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.045] px-3 py-2"
                >
                  <span className="flex items-center gap-2 font-body text-[12px] font-medium text-white/75">
                    <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={1.8} />
                    {metric.label}
                  </span>
                  <span className="h-1.5 w-11 rounded-full bg-accent/60" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </StageShell>
  );
}

function RevenueStage() {
  return (
    <StageShell label="Into paying members and PT clients.">
      <div>
        <div className="flex items-center justify-between">
          <p className="font-body text-[11px] font-medium uppercase tracking-[0.08em] text-accent">
            Revenue
          </p>
          <div className="grid h-9 w-9 place-items-center rounded-full border border-accent/30 bg-accent/10">
            <DollarSign className="h-4 w-4 text-accent" strokeWidth={1.8} />
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-accent/25 bg-accent/[0.07] p-4 shadow-[0_0_50px_rgb(232_213_160/0.12)]">
          <div className="space-y-2">
            {revenueOutcomes.map((outcome) => (
              <div
                key={outcome}
                className="rounded-xl border border-white/10 bg-black/10 px-3 py-2 font-body text-[12px] font-medium text-white/80"
              >
                {outcome}
              </div>
            ))}
          </div>

          <div className="mt-5 flex h-16 items-end gap-2 rounded-xl border border-white/10 bg-black/10 px-3 py-3">
            {[22, 34, 46, 58, 76].map((height, index) => (
              <motion.span
                key={height}
                initial={{ height: 8 }}
                whileInView={{ height }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex-1 rounded-t-md bg-accent/80"
              />
            ))}
          </div>
        </div>
      </div>
    </StageShell>
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

      <div className="mt-10 grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
        <ClassesStage />
        <FlowArrow />
        <ContentStage />
        <FlowArrow />
        <EngagementStage />
        <FlowArrow />
        <RevenueStage />
      </div>
    </div>
  );
}
