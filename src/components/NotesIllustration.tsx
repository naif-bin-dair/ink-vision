import { BookOpen, Highlighter, PenTool } from "lucide-react";

const NotesIllustration = () => {
  return (
    <div className="relative h-96 md:h-[500px] flex items-center justify-center">
      {/* Notebook/paper */}
      <div className="relative w-64 md:w-80 h-80 md:h-96 bg-paper-white shadow-paper-lg rounded-lg p-6 md:p-8 border-l-4 border-primary animate-fold">
        {/* Notebook header */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-paper-grey/30">
          <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          <span className="font-bold text-base md:text-lg text-foreground">Study Notes</span>
        </div>
        
        {/* Handwritten-style lines */}
        <div className="space-y-4 md:space-y-5">
          <div className="space-y-2">
            <div className="h-2 md:h-3 bg-paper-grey/40 rounded w-11/12 transform -rotate-1" />
            <div className="h-2 md:h-3 bg-paper-grey/40 rounded w-10/12 transform rotate-1" />
          </div>
          <div className="space-y-2">
            <div className="h-2 md:h-3 bg-primary/20 rounded w-9/12" />
            <div className="h-2 md:h-3 bg-paper-grey/40 rounded w-full transform -rotate-1" />
            <div className="h-2 md:h-3 bg-paper-grey/40 rounded w-10/12" />
          </div>
          <div className="space-y-2">
            <div className="h-2 md:h-3 bg-paper-grey/40 rounded w-11/12 transform rotate-1" />
            <div className="h-2 md:h-3 bg-paper-grey/40 rounded w-9/12 transform -rotate-1" />
          </div>
        </div>
        
        {/* Highlighter effect */}
        <div className="absolute top-32 md:top-40 left-6 md:left-8 right-6 md:right-8 h-8 md:h-10 bg-primary/10 rounded-sm animate-fade-in" style={{ animationDelay: "0.5s" }} />
        
        {/* Scan indicator */}
        <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
          <div className="absolute inset-x-0 h-0.5 bg-primary/50 blur-sm animate-scan-line" />
        </div>
      </div>
      
      {/* Floating note pages */}
      <div className="absolute top-8 md:top-12 right-4 md:right-8 w-48 md:w-64 h-64 md:h-80 bg-paper-white shadow-receipt rounded-lg opacity-30 rotate-12 animate-float border-l-4 border-primary/30" />
      <div className="absolute bottom-8 md:bottom-12 -left-4 md:-left-8 w-40 md:w-56 h-56 md:h-72 bg-paper-white shadow-receipt rounded-lg opacity-25 -rotate-6 animate-float-slow border-l-4 border-primary/30" />
      
      {/* Pen/highlighter decorations */}
      <PenTool className="absolute top-4 md:top-8 left-8 md:left-12 w-6 h-6 md:w-10 md:h-10 text-primary/20 animate-paper-flutter" />
      <Highlighter className="absolute bottom-4 md:bottom-8 right-8 md:right-12 w-8 h-8 md:w-12 md:h-12 text-primary/20 animate-float" />
    </div>
  );
};

export default NotesIllustration;
