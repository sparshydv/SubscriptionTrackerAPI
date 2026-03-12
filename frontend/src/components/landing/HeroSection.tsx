import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import dashboardMockup from "@/assets/landing/hero-image.webp";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const prefetchSignUp = () => import("@/pages/SignUp");

const HeroSection = () => (
  <section className="relative gradient-hero overflow-hidden">
    <ContainerScroll
      titleComponent={
        <div className="flex flex-col items-center gap-2">
          <span className="text-xl md:text-3xl font-semibold text-foreground">
            Stop Losing Money to Forgotten Subscriptions
          </span>
          <Link
            to="/sign-up"
            onMouseEnter={prefetchSignUp}
            className="group flex items-center gap-3 rounded-full border-4 border-transparent hover:border-primary px-8 py-2 transition-all duration-300 whitespace-nowrap"
          >
            <h1 className="text-5xl md:text-[6rem] font-bold mt-1 leading-none text-foreground cursor-pointer whitespace-nowrap">
              Start Tracking Free
            </h1>
            <ArrowRight
              className="shrink-0 text-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
              size={48}
            />
          </Link>
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

