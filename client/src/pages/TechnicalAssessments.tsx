import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Terminal, GitBranch, Database, Zap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TechnicalAssessments = () => {
  const features = [
    {
      icon: Code,
      title: "Live Coding Challenges",
      description: "Real-time coding exercises with multiple programming languages support and instant feedback."
    },
    {
      icon: Terminal,
      title: "Algorithm Testing",
      description: "Comprehensive algorithm and data structure assessments to evaluate problem-solving skills."
    },
    {
      icon: GitBranch,
      title: "Code Review Simulations",
      description: "Assess candidates' ability to review, debug, and improve existing codebases."
    },
    {
      icon: Database,
      title: "Database Proficiency",
      description: "SQL queries, database design, and optimization challenges for backend roles."
    },
    {
      icon: Zap,
      title: "Performance Testing",
      description: "Evaluate code efficiency, scalability considerations, and optimization techniques."
    },
    {
      icon: CheckCircle,
      title: "Automated Scoring",
      description: "AI-powered evaluation with detailed feedback and competency mapping."
    }
  ];

  const benefits = [
    "Reduce false positives by 85% with practical coding assessments",
    "Save 40+ hours per hire with automated technical screening",
    "Standardized evaluation across all technical candidates",
    "Real-world problem scenarios relevant to your tech stack",
    "Comprehensive skill gap analysis and recommendations"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Technical{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Assessments
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Evaluate coding skills, problem-solving abilities, and technical expertise with comprehensive assessments designed by industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <Button size="lg" variant="hero">Try Live Demo</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Technical Evaluation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From junior developers to senior architects, assess technical skills across all levels and specializations.
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

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Choose Our Technical Assessments?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">Supported Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "Python", "Java", "C++", "React", "Node.js", "SQL", "Docker", "AWS", "Git"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalAssessments;