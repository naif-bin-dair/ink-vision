import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface UseCaseSectionProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  illustration: ReactNode;
  reverse?: boolean;
  delay?: number;
}

const UseCaseSection = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  illustration, 
  reverse = false,
  delay = 0 
}: UseCaseSectionProps) => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: illustrationRef, isVisible: illustrationVisible } = useScrollAnimation();
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          <div 
            ref={contentRef}
            className={`space-y-6 md:space-y-8 ${reverse ? 'lg:col-start-2 scroll-slide-right' : 'scroll-slide-left'} ${contentVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-3 p-4 bg-paper-white shadow-paper rounded-xl border-2 border-border hover:shadow-paper-lg transition-shadow duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center border-2 border-primary/20 hover:border-primary/40 transition-colors group">
                <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {description}
            </p>
            
            <Card className="p-6 md:p-8 bg-paper-white border-2 border-border shadow-paper hover:shadow-paper-lg transition-shadow duration-300">
              <h4 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-foreground flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Key Benefits
              </h4>
              <ul className="space-y-3 md:space-y-4">
                {features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 text-sm md:text-base text-muted-foreground group hover:text-foreground transition-colors"
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          
          <div 
            ref={illustrationRef}
            className={`relative ${reverse ? 'lg:col-start-1 scroll-slide-left' : 'scroll-slide-right'} ${illustrationVisible ? 'visible' : ''}`}
          >
            {illustration}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
