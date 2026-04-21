import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionReveal } from "@/components/SectionReveal";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function HeroSection() {
  return (
    <section className="relative bg-bg-primary">
      <Container className="pt-8 pb-32 md:pt-10 md:pb-48">
        <header className="flex items-center justify-between gap-4">
          <a
            href="#top"
            className="flex items-center gap-3"
          >
            <Image
              src="/hitsmart-logo.png"
              alt="HitSmart logo"
              width={36}
              height={36}
              className="h-8 w-8 shrink-0 md:h-9 md:w-9"
              priority
            />
            <span className="font-display text-[18px] font-medium tracking-[-0.02em] text-text-primary sm:text-[20px]">
              Hit <span className="text-[#72b97c]">Smart</span>
            </span>
          </a>

          <nav aria-label="Section navigation">
            <ul className="flex flex-wrap items-center justify-end gap-2 font-body text-[13px] font-medium text-text-secondary sm:text-[14px]">
              {navItems.map((item, index) => (
                <li key={item.href} className="flex items-center gap-2">
                  {index > 0 ? <span aria-hidden="true">·</span> : null}
                  <a href={item.href} className="hover:text-text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <SectionReveal className="mt-24 md:mt-32">
          <div className="flex w-full flex-col items-center">
            <h1
              id="top"
              className="max-w-[15ch] text-center font-display text-[clamp(44px,5.5vw,80px)] font-medium leading-[1.05] tracking-[-0.03em] text-text-primary text-balance"
            >
              Bring In More Fighters With No Extra Effort
            </h1>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center rounded-full border border-white/15 bg-white px-6 py-3 font-body text-[14px] font-medium text-bg-primary hover:bg-accent"
            >
              Get in Touch
            </a>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
