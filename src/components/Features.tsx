import { Bot, Calendar, Users, Zap, Clock, BarChart3, Code, FileText, Brain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Matching",
      description: "Advanced algorithms match candidates to positions with 95% accuracy, saving hours of manual screening.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automatically coordinate interview times across multiple stakeholders and time zones.",
    },
    {
      icon: Users,
      title: "Candidate Pipeline",
      description: "Track candidates through every stage with automated status updates and notifications.",
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Eliminate repetitive tasks with customizable automation rules and triggers.",
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Stay informed with instant notifications about interview changes and candidate responses.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Make data-driven decisions with comprehensive hiring metrics and performance reports.",
    },
    {
      icon: Code,
      title: "Technical Assessments",
      description: "Evaluate coding skills with live programming challenges, algorithm tests, and real-world problem-solving scenarios.",
    },
    {
      icon: FileText,
      title: "Non Technical Assessments",
      description: "Assess communication, leadership, and role-specific competencies through customizable questionnaires and simulations.",
    },
    {
      icon: Brain,
      title: "Psychology Assessments",
      description: "Understand personality traits, cognitive abilities, and cultural fit with scientifically-validated psychological evaluations.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Hire Smarter
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your entire recruitment process with powerful features designed for modern HR teams.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;