import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Find Your Program",
    description: "Browse through thousands of programs worldwide. Narrow down your search and make a selection of universities that suit your goals and aspirations.",
  },
  {
    title: "Get Informed",
    description: "Explore program details, contact universities, and get answers to all your questions. Our team provides comprehensive guidance on courses, cities, and accommodation.",
  },
  {
    title: "Check Scholarships",
    description: "Discover various funding opportunities including scholarships, fellowships, and student prizes. We help you find the perfect financial aid for your needs.",
  },
  {
    title: "Apply & Succeed",
    description: "Submit your application with confidence. Get all required documents ready early and meet deadlines. We assist you throughout the entire application process.",
  },
];

export const Timeline = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleSteps((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.5 }
    );

    const stepElements = timelineRef.current?.querySelectorAll("[data-index]");
    stepElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-muted/30" id="timeline">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Your Journey to Success</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to transform your educational dreams into reality
          </p>
        </div>

        <div ref={timelineRef} className="max-w-4xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              data-index={index}
              className={`flex gap-6 transition-all duration-700 ${
                visibleSteps.includes(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                    visibleSteps.includes(index)
                      ? "bg-primary text-primary-foreground scale-100"
                      : "bg-muted scale-75"
                  }`}
                >
                  {visibleSteps.includes(index) ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <span className="text-lg font-bold">{index + 1}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-0.5 h-24 mt-2 transition-all duration-700 ${
                      visibleSteps.includes(index + 1)
                        ? "bg-primary"
                        : "bg-border"
                    }`}
                  />
                )}
              </div>

              <div className="flex-1 pb-12">
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
