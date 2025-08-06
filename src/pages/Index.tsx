import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CompanyLogos } from "@/components/CompanyLogos";
import { Features } from "@/components/Features";
import { Skills } from "@/components/Skills";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CompanyLogos />
      <Features />
      <Skills />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
