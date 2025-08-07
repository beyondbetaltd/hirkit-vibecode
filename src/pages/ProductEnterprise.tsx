import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Shield, Clock, TrendingUp, Heart, Target, Brain, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductEnterprise = () => {
  const features = [
    {
      icon: Users,
      title: "Collaborate better across teams",
      description: "Increase collaboration across multiple hiring teams, streamline cross-department communications, and reduce your time and cost to hire."
    },
    {
      icon: Shield,
      title: "Your data is safe with us",
      description: "Our platform is designed to ensure that your candidate data is always safe, secure, and compliant with industry standards and regulations."
    },
    {
      icon: Heart,
      title: "Great support for your team",
      description: "Every user, regardless of access level, can get support via our live chat."
    },
    {
      icon: Clock,
      title: "Smart time saver",
      description: "Easily sync your calendars across teams to automate interview scheduling and streamline candidate communications."
    },
    {
      icon: TrendingUp,
      title: "Intuitive and fun",
      description: "We empower our users with features to engage them in their search for the right talent. And we make sure it's fun to use."
    },
    {
      icon: Target,
      title: "A candidate-first experience",
      description: "With HirKit, it's easy to deliver an outstanding recruitment experience for every candidate."
    }
  ];

  const teamBenefits = [
    "Collaboration made simple",
    "Save time with automation", 
    "Get insights with Analytics",
    "400+ powerful integrations",
    "Unlimited users included",
    "Advanced security features"
  ];

  const stats = [
    { value: "94%", label: "Collaborate better with their team" },
    { value: "97%", label: "See an increase in qualified candidates" },
    { value: "89%", label: "Say their hiring process is faster" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-4">Loved by enterprises</p>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            For big teams who want <span className="text-primary">big results</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Achieve better team collaboration across departments and greater recruitment efficiency with HirKit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Book a Demo</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">Start Free Trial</Button>
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border bg-card/50 backdrop-blur text-left">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Made for Teams Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Made for <span className="text-primary">teams</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              It's easy to collaborate and reach goals together with HirKit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {/* Benefits */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-foreground mb-6">Everything you need</h3>
              <div className="space-y-3">
                {teamBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90">
                    Explore our ATS
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Feature Cards */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-border hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Employer branded career site</h4>
                    <p className="text-sm text-muted-foreground">Custom branding and design</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-card border-border hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Team and collaboration</h4>
                    <p className="text-sm text-muted-foreground">Seamless team workflows</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-card border-border hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Generative AI</h4>
                    <p className="text-sm text-muted-foreground">AI-powered recruitment tools</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-card border-border hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Advanced analytics</h4>
                    <p className="text-sm text-muted-foreground">Data-driven insights</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Our customers see results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-border bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Experience the magic of HirKit</h2>
          <p className="text-xl text-muted-foreground mb-8">Get in touch with us or try it out yourself</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Book a Demo</Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">Start Free Trial</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductEnterprise;