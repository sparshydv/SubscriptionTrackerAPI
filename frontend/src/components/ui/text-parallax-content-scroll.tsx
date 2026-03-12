import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CreditCard, Bell, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IMG_PADDING = 12;

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

interface StickyImageProps {
  imgUrl: string;
}

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

const StickyImage = ({ imgUrl }: StickyImageProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

// --- Subscription Tracking Content ---
const TrackingContent = () => {
  const navigate = useNavigate();
  return (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      <CreditCard className="inline mr-2 mb-1" size={28} />
      Subscription Tracking
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        All your subscriptions in one place. Connect your accounts and we'll
        automatically detect every recurring charge — from streaming services to
        SaaS tools, gym memberships to cloud storage.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        No more surprises. See exactly what you're paying for, when it renews,
        and how much it costs at a glance.
      </p>
      <button 
        className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
        onClick={() => navigate("/sign-up")}
      >
        Start Tracking <ArrowUpRight className="inline" size={20} />
      </button>
    </div>
  </div>
  );
};

// --- Renewal Reminders Content ---
const RemindersContent = () => {
  const navigate = useNavigate();
  return (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      <Bell className="inline mr-2 mb-1" size={28} />
      Renewal Reminders
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Never miss a renewal date again. Get smart notifications before your
        card is charged, giving you time to cancel services you no longer need.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Customize your alert schedule — get reminded 7 days, 3 days, or 1 day
        before every renewal. Stay in control, always.
      </p>
      <button 
        className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
        onClick={() => navigate("/sign-up")}
      >
        Set Reminders <ArrowUpRight className="inline" size={20} />
      </button>
    </div>
  </div>
  );
};

// --- Spending Insights Content ---
const InsightsContent = () => {
  const navigate = useNavigate();
  return (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      <TrendingUp className="inline mr-2 mb-1" size={28} />
      Spending Insights
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        See exactly where your money goes. Beautiful charts and breakdowns show
        your spending patterns across categories like entertainment, productivity,
        and utilities.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Identify wasteful spending, track month-over-month trends, and discover
        opportunities to save hundreds every year.
      </p>
      <button 
        className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
        onClick={() => navigate("/sign-up")}
      >
        View Insights <ArrowUpRight className="inline" size={20} />
      </button>
    </div>
  </div>
  );
};

// --- Main Export ---
export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop"
        subheading="All in one place"
        heading="Subscription Tracking"
      >
        <TrackingContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1400&auto=format&fit=crop"
        subheading="Never miss a date"
        heading="Renewal Reminders"
      >
        <RemindersContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
        subheading="See where money goes"
        heading="Spending Insights"
      >
        <InsightsContent />
      </TextParallaxContent>
    </div>
  );
};
