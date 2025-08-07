import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to transforming recruitment with AI that actually works for real people."
    },
    {
      icon: Users,
      title: "People-First",
      description: "Technology should enhance human connections, not replace them. We build tools that bring the best out of both."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries to create solutions that didn't exist before, solving real problems."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do, from code to customer support."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Engineering at TechCorp, passionate about using AI to solve human problems.",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder", 
      bio: "AI researcher with 10+ years in machine learning and natural language processing.",
    },
    {
      name: "Emily Johnson",
      role: "Head of Product",
      bio: "Former product lead at major HR platforms, expert in user experience and recruitment workflows.",
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      bio: "Full-stack architect who's built scalable systems for millions of users at top tech companies.",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              We're Building the Future of{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Recruitment
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              HirKit was born from the frustration of manual, time-consuming recruitment processes. 
              We believe AI can make hiring more efficient, fair, and human-centered.
            </p>
            <Button variant="hero" size="lg">
              Join Our Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Founded in 2023, HirKit emerged from a simple observation: recruitment teams were drowning in 
                administrative tasks while the most important part—connecting with great candidates—was getting lost.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our founders, having experienced both sides of the hiring process, knew there had to be a better way. 
                By combining advanced AI with intuitive design, we created a platform that automates the tedious 
                parts of recruitment while amplifying the human elements that matter most.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to serve over 500 companies worldwide, helping them make better hiring decisions 
                faster and more fairly than ever before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center border-border hover:shadow-card transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a diverse group of engineers, designers, and recruitment experts united by our 
              mission to transform hiring.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-border hover:shadow-card transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full mx-auto mb-6"></div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of companies already using HirKit to streamline their recruitment process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline-hero" size="lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;