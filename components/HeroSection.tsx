import { Container } from "@/components/Container";
import { SectionReveal } from "@/components/SectionReveal";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function HeroSection() {
  return (
    <section className="relative bg-bg-primary pt-24 pb-32 md:pt-40 md:pb-48">
      <Container>
        <header className="flex items-start justify-between gap-6 pt-8 md:pt-0">
          <a
            href="#top"
            className="font-display text-[20px] font-medium tracking-[-0.01em] text-text-primary"
          >
            Fight Scale Media
          </a>

          <nav aria-label="Section navigation">
            <ul className="flex flex-wrap items-center justify-end gap-2 font-body text-[14px] font-medium text-text-secondary">
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

        <SectionReveal className="mt-16 md:mt-24">
          <div className="flex w-full justify-center">
            <h1
              id="top"
              className="max-w-[11ch] text-center font-display text-[clamp(44px,5.5vw,80px)] font-medium leading-[1.05] tracking-[-0.03em] text-text-primary text-balance"
            >
              Building More Fighters Through Content
            </h1>
          </div>
        </SectionReveal>
      </Container>
    </section>
  );
}
