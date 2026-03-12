import step1 from "@/assets/landing/step-1.svg";
import step2 from "@/assets/landing/step-2.svg";
import step3 from "@/assets/landing/step-3.svg";

const steps = [
  { num: "1", title: "Add Subscriptions", img: step1, desc: "Add all your recurring subscriptions." },
  { num: "2", title: "Get Reminded", img: step2, desc: "Get reminded before payment dates, trial deadlines and plan renewals." },
  { num: "3", title: "Save Money", img: step3, desc: "Save money by cancelling unused services and cutting down on excess." },
];

const HowItWorksSection = () => (
  <section className="py-20 lg:py-28">
    <div className="mb-20 text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-center">
      How it works
    </div>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 py-1">
        {steps.map((step) => (
          <div key={step.num} className="relative flex-1">
            <div className="flex items-center text-4xl font-semibold leading-6 text-foreground">
              <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                <circle cx="2" cy="2" r="2" fill="currentColor" />
              </svg>
              {step.num}
              <div
                className="hidden lg:block absolute -ml-2 h-px w-screen -translate-x-full bg-foreground/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                aria-hidden="true"
              />
            </div>
            <p className="mt-6 mb-3 text-xl font-semibold leading-8 tracking-tight text-foreground text-left">
              {step.title}
            </p>
            <div className="rounded-2xl overflow-hidden bg-secondary/20 p-4 mb-4">
              <img src={step.img} alt={step.title} className="w-full h-auto object-contain max-h-[300px]" />
            </div>
            <p className="mt-2 text-base leading-7 text-muted-foreground text-left">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
