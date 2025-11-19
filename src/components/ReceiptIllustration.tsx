import { Receipt, DollarSign, Calendar, Store } from "lucide-react";

const ReceiptIllustration = () => {
  return (
    <div className="relative h-96 md:h-[500px] flex items-center justify-center">
      {/* Main receipt */}
      <div className="relative w-64 md:w-80 h-80 md:h-96 bg-paper-white shadow-paper-lg rounded-lg p-6 md:p-8 border-2 border-paper-grey/30 animate-receipt-slide">
        {/* Receipt header */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b-2 border-dashed border-paper-grey/50">
          <Store className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          <span className="font-bold text-base md:text-lg text-foreground">Store Receipt</span>
        </div>
        
        {/* Receipt items */}
        <div className="space-y-3 md:space-y-4 mb-6">
          <div className="flex justify-between text-xs md:text-sm text-muted-foreground">
            <span>Item 1</span>
            <span>$29.99</span>
          </div>
          <div className="flex justify-between text-xs md:text-sm text-muted-foreground">
            <span>Item 2</span>
            <span>$45.50</span>
          </div>
          <div className="flex justify-between text-xs md:text-sm text-muted-foreground">
            <span>Item 3</span>
            <span>$15.00</span>
          </div>
          <div className="border-t-2 border-dashed border-paper-grey/50 pt-3 flex justify-between text-sm md:text-base font-bold text-foreground">
            <span>TOTAL</span>
            <span>$90.49</span>
          </div>
        </div>
        
        {/* Receipt footer */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3 md:w-4 md:h-4" />
          <span>Nov 16, 2024</span>
        </div>
        
        {/* Scan indicator */}
        <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
          <div className="absolute inset-x-0 h-0.5 bg-primary/60 blur-sm animate-scan-line" />
        </div>
      </div>
      
      {/* Floating receipt copies */}
      <div className="absolute top-8 md:top-12 -right-4 md:-right-8 w-48 md:w-64 h-64 md:h-80 bg-paper-white shadow-receipt rounded-lg opacity-30 rotate-12 animate-float" />
      <div className="absolute bottom-8 md:bottom-12 -left-4 md:-left-8 w-40 md:w-56 h-56 md:h-72 bg-paper-white shadow-receipt rounded-lg opacity-25 -rotate-6 animate-float-slow" />
      
      {/* Dollar sign decorations */}
      <DollarSign className="absolute top-4 md:top-8 right-8 md:right-12 w-8 h-8 md:w-12 md:h-12 text-primary/20 animate-float" />
      <Receipt className="absolute bottom-4 md:bottom-8 left-8 md:left-12 w-6 h-6 md:w-10 md:h-10 text-primary/20 animate-paper-flutter" />
    </div>
  );
};

export default ReceiptIllustration;
