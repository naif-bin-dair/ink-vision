import { FileText, CheckCircle, File } from "lucide-react";

const DocumentIllustration = () => {
  return (
    <div className="relative h-96 md:h-[500px] flex items-center justify-center">
      {/* Main document stack */}
      <div className="relative">
        {/* Back document */}
        <div className="absolute top-4 left-4 w-56 md:w-72 h-72 md:h-80 bg-paper-white shadow-paper rounded-lg opacity-40 rotate-6 animate-float-slow" />
        
        {/* Middle document */}
        <div className="absolute top-2 left-2 w-56 md:w-72 h-72 md:h-80 bg-paper-white shadow-paper-lg rounded-lg opacity-60 rotate-3 animate-float" style={{ animationDelay: "0.5s" }} />
        
        {/* Front document */}
        <div className="relative w-56 md:w-72 h-72 md:h-80 bg-paper-white shadow-paper-lg rounded-lg p-6 md:p-8 border-2 border-paper-grey/30 animate-fold">
          {/* Document header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-paper-grey/30">
            <FileText className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            <span className="font-bold text-base md:text-lg text-foreground">Document Title</span>
          </div>
          
          {/* Document content lines */}
          <div className="space-y-3 md:space-y-4">
            <div className="h-2 md:h-3 bg-paper-grey/30 rounded w-full" />
            <div className="h-2 md:h-3 bg-paper-grey/30 rounded w-5/6" />
            <div className="h-2 md:h-3 bg-paper-grey/30 rounded w-full" />
            <div className="h-2 md:h-3 bg-paper-grey/30 rounded w-4/5" />
            <div className="h-2 md:h-3 bg-paper-grey/30 rounded w-full" />
            <div className="h-2 md:h-3 bg-paper-grey/30 rounded w-3/4" />
          </div>
          
          {/* Checkmark indicator */}
          <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/30 animate-scale-in">
            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          
          {/* Scan line */}
          <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
            <div className="absolute inset-x-0 h-0.5 bg-primary/50 blur-sm animate-scan-line" />
          </div>
        </div>
      </div>
      
      {/* Floating file icons */}
      <File className="absolute top-4 md:top-8 right-4 md:right-8 w-8 h-8 md:w-12 md:h-12 text-primary/20 animate-float" />
      <FileText className="absolute bottom-8 md:bottom-12 left-4 md:left-8 w-6 h-6 md:w-10 md:h-10 text-primary/20 animate-paper-flutter" />
    </div>
  );
};

export default DocumentIllustration;
