import { Container } from "@/components/Container";
import { SectionIntro } from "@/components/SectionIntro";
import { SectionReveal } from "@/components/SectionReveal";

const steps = [
  {
    step: "Step 1",
    title: "Capturing Clips",
    description:
      "I show up to classes, open gyms, or training sessions once or twice a week to capture the content.",
  },
  {
    step: "Step 2",
    title: "Polishing & Posting",
    description:
      "I edit and post 20–30 videos per month, independently optimized for high engagement on Instagram, Facebook, and TikTok.",
  },
  {
    step: "Step 3",
    title: "You Grow",
    description:
      "Sit back and watch the views, likes, followers, and new members come in.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-bg-primary py-16 md:py-24">
      <SectionReveal>
        <Container>
          <SectionIntro
            label="Process"
            title="How It Works"
            descriptionClassName="mt-6 max-w-[680px]"
            description={
              <p className="font-body text-[16px] leading-7 text-white/75">
                I handle the content engine end to end, so your gym keeps
                showing up online without adding more work to your day.
              </p>
            }
          />

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.step}
                className="flex h-full flex-col rounded-xl border border-white/15 bg-white/[0.04] p-8"
              >
                <p className="font-body text-[12px] font-medium uppercase tracking-[0.08em] text-accent">
                  {step.step}
                </p>
                <h3 className="mt-6 font-display text-[24px] font-medium tracking-[-0.02em] text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-[26ch] font-body text-[16px] leading-7 text-white/75">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </SectionReveal>
    </section>
  );
}
