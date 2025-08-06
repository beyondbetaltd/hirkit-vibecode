import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Discover the Power of Effective Candidate Testing Today!
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Get started with Equip and streamline your hiring process
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Start Hiring
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              Talk to us
            </Button>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Equip. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};