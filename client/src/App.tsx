import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/AuthProvider";
import { queryClient } from "@/lib/queryClient";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import ProductEnterprise from "./pages/ProductEnterprise";
import ProductSmallMidsize from "./pages/ProductSmallMidsize";
import TechnicalAssessments from "./pages/TechnicalAssessments";
import NonTechnicalAssessments from "./pages/NonTechnicalAssessments";
import PsychologyAssessments from "./pages/PsychologyAssessments";
import Demo from "./pages/Demo";
import ResetPassword from "./pages/ResetPassword";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/product/enterprise" element={<ProductEnterprise />} />
            <Route path="/product/small-midsize" element={<ProductSmallMidsize />} />
            <Route path="/assessments/technical" element={<TechnicalAssessments />} />
            <Route path="/assessments/non-technical" element={<NonTechnicalAssessments />} />
            <Route path="/assessments/psychology" element={<PsychologyAssessments />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
