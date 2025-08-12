import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Lightbulb, Clock, Users, Globe, HeadphonesIcon, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProductSmallMidsize = () => {
  const features = [
    {
      icon: Zap,
      title: "Everything you need",
      description: "We'll give you the tools that best attract and convert the right talent for your business."
    },
    {
      icon: Lightbulb,
      title: "Innovation at our core",
      description: "We're continuously developing our product to make sure that our users stay ahead of their competition."
    },
    {
      icon: Clock,
      title: "Automate and save time",
      description: "Automate parts of your recruitment process with our Smart Triggers"
    },
    {
      icon: Users,
      title: "Collaborate better across teams",
      description: "Increase collaboration across multiple hiring teams, streamline cross-department communication, and reduce your time to hire."
    },
    {
      icon: Globe,
      title: "Maximize your reach",
      description: "Publish your job ads on more than 120 job boards and social media channels with just a click."
    },
    {
      icon: HeadphonesIcon,
      title: "We're here for you",
      description: "Our global support team is always ready to answer your questions."
    }
  ];

  const benefits = [
    "Recruitment made easy",
    "Hire better together",
    "Measure and improve",
    "Unlimited users included",
    "Mobile-friendly application",
    "120+ job board integrations"
  ];

  const stats = [
    { value: "94%", label: "Collaborate better with their team" },
    { value: "97%", label: "See an increase in qualified candidates" },
    { value: "89%", label: "Say their hiring process is faster" }
  ];

  const candidateFeatures = [
    { title: "Made with love for candidates", description: "Make it easy for candidates to apply for jobs without lengthy forms or log-in requirements." },
    { title: "Find and convert the right talent", description: "Maximize your reach and find the right talent with automatic job postings across over 120 job boards." },
    { title: "For every device", description: "Enable candidates to apply for jobs on any device through a mobile-friendly application process." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-4">Loved by the world's smartest recruiters</p>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            For recruiters who need <span className="text-primary">more</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Discover why over 185,000 of the world's smartest recruiters, from small to midsize businesses, use HirKit to attract the right talent, convert them to candidates, and grow their businesses.
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

      {/* Grow Your Team Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Grow your <span className="text-primary">team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Recruit successfully with HirKit's comprehensive tools and features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {/* Benefits */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-foreground mb-6">Complete recruiting solution</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
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
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">120+ Job Boards</h4>
                    <p className="text-sm text-muted-foreground">Maximize your reach instantly</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-card border-border hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Smart Automation</h4>
                    <p className="text-sm text-muted-foreground">Save time with intelligent workflows</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-card border-border hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Team Collaboration</h4>
                    <p className="text-sm text-muted-foreground">Seamless team workflows</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 bg-card border-border hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Candidate tracking</h4>
                    <p className="text-sm text-muted-foreground">Track every interaction</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Experience Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">It's all about the candidates</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              It's easy to deliver an enjoyable recruitment experience for your candidates with HirKit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {candidateFeatures.map((feature, index) => (
              <Card key={index} className="border-border bg-card/50 backdrop-blur">
                <CardHeader>
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

      {/* Results Section */}
      <section className="py-16 px-4 bg-muted/20">
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

export default ProductSmallMidsize;