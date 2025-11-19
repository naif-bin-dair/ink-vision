import { Card } from "@/components/ui/card";
import { Brain, Pencil, BookPlus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Brain,
    title: "AI analyzing",
    description: "Analyze your hand writing both fast and accurately.",
  },
  {
    icon: Pencil,
    title: "Challenge yourself",
    description: "By trying to write the best Hello World you can write.",
  },
  {
    icon: BookPlus,
    title: "Learn and repeat",
    description: "So you can improve!",
  },
];

const Features = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-gradient-receipt relative overflow-hidden">
      {/* Decorative paper elements */}
      <div className="absolute top-10 right-5 w-20 h-28 bg-paper-white shadow-receipt rounded-lg opacity-10 rotate-12 animate-float" />
      <div className="absolute bottom-10 left-5 w-16 h-24 bg-paper-white shadow-receipt rounded-lg opacity-10 -rotate-6 animate-float-slow" />
      <div className="absolute top-1/3 left-10 w-12 h-16 bg-paper-white shadow-receipt rounded-lg opacity-8 rotate-45 animate-paper-flutter" />
      <div className="absolute bottom-1/4 right-10 w-14 h-20 bg-paper-white shadow-receipt rounded-lg opacity-8 -rotate-12 animate-float" />

      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-12 md:mb-16 scroll-fade-in ${titleVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            All you would Need
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            to improve in the world of Calligraphy!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={index}
                ref={ref}
                className={`scroll-zoom-in ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <Card className="p-6 md:p-8 bg-paper-white border-2 border-border shadow-paper hover:shadow-paper-lg transition-all duration-300 hover:scale-105 h-full group">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                    <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
