import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";

export const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block">
            <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
              ✨ EFFORTLESS SCREENING
            </span>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Shortlist Candidates{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                With AI
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              CV Ranking, Skill-based Tests, AI Interviews
            </p>
          </div>
          
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="lg" className="text-lg px-8 py-6" onClick={() => window.location.href = '/demo'}>
                Try Interactive Demo
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-3xl opacity-20 transform rotate-6"></div>
          <img 
            src={heroImage} 
            alt="AI Candidate Shortlisting" 
            className="relative w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};