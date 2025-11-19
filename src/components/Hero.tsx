import { Button } from "@/components/ui/button";
import {
  Sparkles,
  PencilLine,
  BookOpenCheck,
  SpellCheck,
  ArrowRight,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden ">
      {/* Decorative icons */}
      {/* <Sparkles className="absolute top-10 left-20 w-6 h-6 text-primary/20 animate-float" /> */}
      {/* <Zap className="absolute top-1/3 right-20 w-8 h-8 text-accent/20 animate-paper-flutter" />
      <Star className="absolute bottom-1/4 left-1/3 w-5 h-5 text-primary/15 animate-float-slow" />
      <CheckCircle className="absolute bottom-20 right-1/4 w-6 h-6 text-accent/20 animate-float" /> */}

      <div className="bg-[url('@/assets/hero-pen.png')] h-screen bg-no-repeat bg-right container relative z-10 mx-auto px-4 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div
              className="flex items-center gap-2 mb-4 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="px-4 py-2 bg-paper-white shadow-paper-lg rounded-full border-2 border-primary/20 hover:shadow-receipt transition-shadow duration-300">
                <span className="text-primary font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  AI-Powered
                </span>
              </div>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Write the perfect Hello to the World
              <span className="text-primary"></span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              A Challenge in Hand Writing to help you write like a master.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
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

            <div
              className="grid grid-cols-3 gap-4 md:gap-8 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-center p-4 bg-paper-white shadow-paper rounded-xl border-2 border-border hover:shadow-paper-lg hover:scale-105 transition-all duration-300">
                <PencilLine className="w-6 h-6 text-primary mx-auto mb-2 animate-receipt-slide" />
                <div className="text-lg md:text-xl font-bold text-primary mb-1">
                  Step-1:
                </div>
                <div className="text-lg md:text-xl font-bold text-primary mb-1">
                  Write Hello World.
                </div>
              </div>
              <div className="text-center p-4 bg-paper-white shadow-paper rounded-xl border-2 border-border hover:shadow-paper-lg hover:scale-105 transition-all duration-300">
                <SpellCheck className="w-6 h-6 text-accent mx-auto mb-2 animate-receipt-slide" />
                <div className="text-lg md:text-xl font-bold text-primary mb-1">
                  Step-2:
                </div>
                <div className="text-lg md:text-xl font-bold text-primary mb-1">
                  Analyze your Writing.
                </div>
              </div>
              <div className="text-center p-4 bg-paper-white shadow-paper rounded-xl border-2 border-border hover:shadow-paper-lg hover:scale-105 transition-all duration-300">
                <BookOpenCheck className="w-6 h-6 text-primary mx-auto mb-2 animate-receipt-slide" />
                <div className="text-lg md:text-xl font-bold text-primary mb-1">
                  Step-3:
                </div>
                <div className="text-lg md:text-xl font-bold text-primary mb-1">
                  Learn from mistakes!
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            {/* <div className="relative rounded-2xl overflow-hidden shadow-paper-lg animate-float border-4 border-border">
              <img
                src={heroImage}
                alt="AI Scanner in action"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-x-0 h-1 bg-primary/50 blur-sm animate-scan-line" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
