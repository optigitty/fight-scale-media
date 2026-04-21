import { Container } from "@/components/Container";
import { SectionIntro } from "@/components/SectionIntro";
import { SectionReveal } from "@/components/SectionReveal";
import { ArcGallery } from "@/components/ui/arc-gallery";

const reelItems = [
  { src: "/7.1M.jpg", views: "7.1M" },
  { src: "/3.6M.jpg", views: "3.6M" },
  { src: "/1.8M.jpg", views: "1.8M" },
  { src: "/1.6M.jpg", views: "1.6M" },
  { src: "/1M.jpg", views: "1M" },
  { src: "/304k.jpg", views: "304K" },
  { src: "/268k.jpg", views: "268K" },
  { src: "/46k.jpg", views: "46K" },
];

export function OpportunitySection() {
  return (
    <section id="work" className="overflow-hidden bg-bg-primary py-16 md:py-24">
      <SectionReveal>
        <Container>
          <SectionIntro
            label="What's Possible"
            title="You know the benefits of combat sport."
            description={
              <p className="mt-6 max-w-[640px] font-body text-[clamp(18px,1.8vw,22px)] font-normal leading-[1.5] text-white/70">
                Now it&apos;s time for everybody else to know — and for you to
                pack your classes, fill your personal training schedule, and
                grow your gym.
              </p>
            }
          />

          <p className="mt-6 max-w-[680px] font-body text-[16px] leading-7 text-white/75">
            Here&apos;s what&apos;s already working. All it takes is a mic on the
            coach.
          </p>

          <div className="mt-16 md:mt-20">
            <ArcGallery items={reelItems} />
          </div>

          <p className="mx-auto mt-20 max-w-[720px] text-center font-body text-[16px] leading-7 text-white/75">
            The format is simple: mic the coach, film the class, edit, post.
            The gyms doing this are pulling in hundreds of thousands —
            sometimes millions — of views, and turning that attention into new
            members. We bring that same playbook to your gym.
          </p>
        </Container>
      </SectionReveal>
    </section>
  );
}
