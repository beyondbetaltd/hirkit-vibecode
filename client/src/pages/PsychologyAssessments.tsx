import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Target, Users2, TrendingUp, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PsychologyAssessments = () => {
  const features = [
    {
      icon: Brain,
      title: "Cognitive Ability Tests",
      description: "Measure reasoning, problem-solving, and learning capacity with standardized intelligence assessments."
    },
    {
      icon: Target,
      title: "Personality Profiling",
      description: "Deep personality analysis using Big Five, MBTI, and other validated psychological frameworks."
    },
    {
      icon: Users2,
      title: "Cultural Fit Analysis",
      description: "Assess alignment with company values, work style preferences, and team compatibility."
    },
    {
      icon: TrendingUp,
      title: "Motivation & Drive",
      description: "Evaluate intrinsic motivation, career aspirations, and long-term engagement potential."
    },
    {
      icon: Shield,
      title: "Stress & Resilience",
      description: "Measure stress tolerance, adaptability, and resilience in challenging work environments."
    },
    {
      icon: CheckCircle,
      title: "Predictive Analytics",
      description: "AI-powered insights on job performance, retention probability, and career progression potential."
    }
  ];

  const assessmentTypes = [
    {
      title: "Big Five Personality Model",
      description: "Measures openness, conscientiousness, extraversion, agreeableness, and neuroticism",
      reliability: "High reliability (α > 0.80)"
    },
    {
      title: "Cognitive Ability Assessment",
      description: "Evaluates logical reasoning, numerical ability, and verbal comprehension",
      reliability: "Validated across industries"
    },
    {
      title: "Emotional Intelligence (EQ)",
      description: "Assesses self-awareness, empathy, and emotional regulation capabilities",
      reliability: "Scientifically validated"
    },
    {
      title: "Work Values Inventory",
      description: "Identifies core values and motivational drivers in professional settings",
      reliability: "Cross-cultural validity"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary-glow/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Psychology{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Assessments
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Gain deep psychological insights into candidate personality, cognitive abilities, and behavioral patterns with scientifically-validated assessments.
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
              Science-Based Psychological Evaluation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leverage decades of psychological research to understand the deeper aspects of candidate potential and workplace behavior.
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
              Validated Assessment Frameworks
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {assessmentTypes.map((assessment, index) => (
                <Card key={index} className="bg-card border border-border">
                  <CardHeader>
                    <CardTitle className="text-lg text-card-foreground">{assessment.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-3">
                      {assessment.description}
                    </CardDescription>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{assessment.reliability}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Why Psychology Matters in Hiring
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border border-border text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">73%</div>
                  <CardTitle className="text-lg text-card-foreground">Better Cultural Fit</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Companies using psychology assessments report significantly better cultural alignment
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-card border border-border text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">65%</div>
                  <CardTitle className="text-lg text-card-foreground">Reduced Turnover</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Lower employee turnover rates when personality fit is considered in hiring
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-card border border-border text-center">
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">89%</div>
                  <CardTitle className="text-lg text-card-foreground">Performance Prediction</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    Accuracy in predicting job performance when combining cognitive and personality data
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Privacy */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Ethical & GDPR Compliant
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              All assessments follow strict ethical guidelines and comply with international privacy regulations.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Privacy Protected</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">GDPR & CCPA compliant</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Encrypted data storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Candidate consent required</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Ethical Standards</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">APA guidelines followed</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Bias-free assessments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">Equal opportunity focus</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PsychologyAssessments;