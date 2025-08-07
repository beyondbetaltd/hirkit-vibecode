import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, Target, Lightbulb, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const NonTechnicalAssessments = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Communication Skills",
      description: "Evaluate written and verbal communication through role-playing scenarios and presentation tasks."
    },
    {
      icon: Users,
      title: "Leadership Assessment",
      description: "Assess leadership potential, team management skills, and decision-making capabilities."
    },
    {
      icon: Target,
      title: "Critical Thinking",
      description: "Problem-solving scenarios that test analytical thinking and strategic planning abilities."
    },
    {
      icon: Lightbulb,
      title: "Creativity & Innovation",
      description: "Creative challenges and ideation exercises to evaluate innovative thinking patterns."
    },
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "Assess empathy, self-awareness, and interpersonal relationship management skills."
    },
    {
      icon: CheckCircle,
      title: "Role-Specific Competencies",
      description: "Customizable assessments tailored to specific job requirements and industry standards."
    }
  ];

  const competencies = [
    "Communication & Presentation",
    "Leadership & Team Management",
    "Problem Solving & Critical Thinking",
    "Customer Service Excellence",
    "Sales & Negotiation",
    "Project Management",
    "Adaptability & Change Management",
    "Cultural Awareness & Diversity"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Non-Technical{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Assessments
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Evaluate soft skills, leadership qualities, and behavioral competencies that are crucial for workplace success and team dynamics.
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
              Comprehensive Soft Skills Evaluation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Assess the human side of talent with scientifically-backed evaluations of interpersonal and professional skills.
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

      {/* Assessment Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Assessment Methodologies
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Interactive Scenarios</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    Real-world workplace simulations that test decision-making, conflict resolution, and interpersonal skills.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Video-based scenarios</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Role-playing exercises</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Case study analysis</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Behavioral Questionnaires</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    Scientifically validated assessments based on established psychological frameworks and competency models.
                  </CardDescription>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">DISC personality profiling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Emotional intelligence scales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">Situational judgment tests</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Key Competencies Assessed
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {competencies.map((competency, index) => (
                <div key={index} className="bg-card rounded-lg p-4 border border-border">
                  <span className="text-sm font-medium text-card-foreground">{competency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NonTechnicalAssessments;