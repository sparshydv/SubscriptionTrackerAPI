import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import dashboardMockup from "@/assets/landing/hero-image.webp";

const HeroSection = () => (
  <section className="relative gradient-hero overflow-hidden">
    <ContainerScroll
      titleComponent={
        <div className="flex flex-col items-center gap-2">
          <span className="text-xl md:text-3xl font-semibold text-foreground">
            Stop Losing Money to Forgotten Subscriptions
          </span>
          <h1 className="text-5xl md:text-[6rem] font-bold mt-1 leading-none text-foreground">
            Start Tracking Free
          </h1>
        </div>
      }
    >
      <img
        src={dashboardMockup}
        alt="SubTracker subscription dashboard showing spending analytics and upcoming renewals"
        className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
        draggable={false}
        fetchPriority="high"
        decoding="async"
      />
    </ContainerScroll>
  </section>
);

export default HeroSection;
