import { Briefcase, Mail, Phone, User } from "lucide-react";

const BusinessCardIllustration = () => {
  return (
    <div className="relative h-96 md:h-[500px] flex items-center justify-center">
      {/* Business card stack */}
      <div className="relative">
        {/* Back cards */}
        <div className="absolute top-6 left-6 w-72 md:w-80 h-44 md:h-48 bg-paper-white shadow-paper rounded-xl opacity-30 rotate-6 animate-float" />
        <div className="absolute top-3 left-3 w-72 md:w-80 h-44 md:h-48 bg-paper-white shadow-paper rounded-xl opacity-50 rotate-3 animate-float-slow" style={{ animationDelay: "0.5s" }} />
        
        {/* Front business card */}
        <div className="relative w-72 md:w-80 h-44 md:h-48 bg-gradient-receipt shadow-paper-lg rounded-xl p-5 md:p-6 border-2 border-paper-grey/30 animate-receipt-slide">
          {/* Card header */}
          <div className="flex items-center gap-2 mb-4 md:mb-5">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30">
              <User className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg text-foreground">John Smith</h4>
              <p className="text-xs md:text-sm text-muted-foreground">CEO & Founder</p>
            </div>
          </div>
          
          {/* Contact details */}
          <div className="space-y-2 md:space-y-3">
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <Mail className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>john@company.com</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <Phone className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              <span>TechCorp Inc.</span>
            </div>
          </div>
          
          {/* Company logo placeholder */}
          <div className="absolute bottom-5 md:bottom-6 right-5 md:right-6 w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
            <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-primary" />
          </div>
          
          {/* Scan line */}
          <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
            <div className="absolute inset-x-0 h-0.5 bg-primary/50 blur-sm animate-scan-line" />
          </div>
        </div>
      </div>
      
      {/* Floating decorative cards */}
      <div className="absolute top-4 md:top-8 -right-8 md:-right-12 w-56 md:w-64 h-36 md:h-40 bg-paper-white shadow-receipt rounded-xl opacity-20 rotate-12 animate-float" />
      <div className="absolute bottom-8 md:bottom-12 -left-8 md:-left-12 w-48 md:w-56 h-32 md:h-36 bg-paper-white shadow-receipt rounded-xl opacity-20 -rotate-6 animate-paper-flutter" />
      
      {/* Icon decorations */}
      <User className="absolute top-8 md:top-12 right-4 md:right-8 w-8 h-8 md:w-12 md:h-12 text-primary/20 animate-float" />
      <Mail className="absolute bottom-4 md:bottom-8 left-4 md:left-8 w-6 h-6 md:w-10 md:h-10 text-primary/20 animate-float-slow" />
    </div>
  );
};

export default BusinessCardIllustration;
