import { Container } from "@/components/Container";
import { SectionReveal } from "@/components/SectionReveal";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function FeatureShowcaseSection() {
  const { featureShowcase } = siteConfig;

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[#020302] py-20 md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute right-[-10rem] top-0 h-[26rem] w-[26rem] rounded-full bg-[#43d35c]/20 blur-[120px]" />
        <div className="absolute bottom-8 left-[-8rem] h-[18rem] w-[18rem] rounded-full bg-[#46ce61]/16 blur-[110px]" />
      </div>

      <SectionReveal>
        <Container className="relative">
          <div className="max-w-[760px]">
            <p className="font-body text-[12px] font-medium uppercase tracking-[0.22em] text-[#8caf8e]">
              {featureShowcase.label}
            </p>
            <h2 className="mt-4 max-w-[10ch] font-display text-[clamp(42px,6vw,74px)] font-medium leading-[0.96] tracking-[-0.05em] text-white text-balance">
              {featureShowcase.title}
            </h2>
          </div>

          <div className="mt-14 space-y-6 md:space-y-7">
            {featureShowcase.items.map((item, index) => {
              const isReversed = index % 2 === 1;

              return (
                <article
                  key={item.title}
                  className="rounded-[22px] border border-white/10 bg-[linear-gradient(135deg,rgba(12,15,12,0.98),rgba(5,7,5,0.98))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:p-7 lg:p-8"
                >
                  <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.9fr)] md:items-center lg:gap-12">
                    <div
                      className={cn(
                        "order-1",
                        isReversed ? "md:order-2" : "md:order-1"
                      )}
                    >
                      <div
                        className={cn(
                          "relative flex aspect-[1.48/0.84] items-center justify-center overflow-hidden rounded-[8px] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(86,126,79,0.24),rgba(15,19,15,0.92)_58%,rgba(8,10,8,0.98))]",
                          isReversed
                            ? "md:ml-auto md:max-w-[320px] lg:max-w-[360px]"
                            : "md:max-w-[510px]"
                        )}
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(117,168,110,0.08),transparent_55%)]" />
                        <span className="relative px-6 text-center font-body text-[13px] font-semibold uppercase tracking-[0.14em] text-white/80">
                          {item.title}
                        </span>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "order-2",
                        isReversed ? "md:order-1" : "md:order-2"
                      )}
                    >
                      <h3 className="max-w-[11ch] font-display text-[clamp(30px,3.4vw,46px)] font-medium leading-[1.02] tracking-[-0.04em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 max-w-[20ch] font-body text-[18px] leading-[1.55] text-white/65">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </SectionReveal>
    </section>
  );
}
