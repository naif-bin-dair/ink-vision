import { Card } from "@/components/ui/card";
import { Receipt, FileText, BookOpen, Briefcase } from "lucide-react";

const useCases = [
  {
    icon: Receipt,
    title: "Receipts & Expenses",
    description:
      "Track expenses effortlessly. Scan receipts instantly and organize them for tax time or reimbursements.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    title: "Documents & Contracts",
    description:
      "Digitize important papers, contracts, and legal documents. Keep everything organized and searchable.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BookOpen,
    title: "Notes & Study Materials",
    description:
      "Convert handwritten notes and textbooks into digital format. Perfect for students and researchers.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Briefcase,
    title: "Business Cards",
    description:
      "Never lose a contact again. Scan business cards and automatically extract contact information.",
    color: "from-green-500 to-teal-500",
  },
];

const UseCases = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Perfect for Any
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {" "}
              Use Case
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From personal organization to business needs, our AI scanner adapts
            to your workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden p-8 border-border hover:shadow-xl-custom transition-all duration-300 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${useCase.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}
              />

              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6 relative z-10`}
              >
                <useCase.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-semibold mb-3 text-card-foreground relative z-10">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                {useCase.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
