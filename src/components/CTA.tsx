import { Button } from "@/components/ui/button";
import { ArrowRight, Pencil, NotebookPen, SpellCheck2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-gradient-paper relative overflow-hidden">
      {/* Floating paper elements */}
      <div className="absolute top-10 right-10 w-24 h-32 bg-paper-white shadow-receipt rounded-lg opacity-15 rotate-12 animate-float" />
      <div className="absolute bottom-10 left-10 w-20 h-28 bg-paper-white shadow-receipt rounded-lg opacity-15 -rotate-6 animate-float-slow" />
      <div className="absolute top-1/2 right-1/4 w-16 h-24 bg-paper-white shadow-receipt rounded-lg opacity-10 rotate-45 animate-paper-flutter" />

      {/* Decorative icons */}
      <Pencil className="absolute top-5 left-20 w-8 h-8 text-primary/20 animate-float" />
      <NotebookPen className="absolute bottom-5 right-20 w-10 h-10 text-accent/20 animate-float-slow" />
      <SpellCheck2 className="absolute top-1/3 right-5 w-6 h-6 text-primary/15 animate-paper-flutter" />
      <Pencil className="absolute top-5 right-20 w-8 h-8 text-primary/20 animate-float" />
      <NotebookPen className="absolute bottom-5 left-20 w-10 h-10 text-accent/20 animate-float-slow" />
      <SpellCheck2 className="absolute top-1/3 left-5 w-6 h-6 text-primary/15 animate-paper-flutter" />

      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center scroll-zoom-in ${isVisible ? "visible" : ""}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground">
            Are you up for the challenge?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10">
            Get up and start writing now!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://naif-bin-dair.github.io/ink-vision/program">
              <Button
                size="lg"
                variant="outline"
                className="text-base md:text-lg shadow-paper-lg hover:shadow-receipt transition-all hover:scale-105 group bg-paper-white"
              >
                Try it now!
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
