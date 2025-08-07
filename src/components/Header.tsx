import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src="/favicon.ico" alt="HirKit Logo" className="w-8 h-8 rounded" />
            <span className="text-2xl font-bold text-foreground">HirKit</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                Product <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-card border border-border">
                <Link to="/product/enterprise">
                  <DropdownMenuItem className="flex flex-col items-start gap-1 p-4">
                    <div className="font-medium text-card-foreground">For Enterprise</div>
                    <div className="text-sm text-muted-foreground">1000+ employees</div>
                  </DropdownMenuItem>
                </Link>
                <Link to="/product/small-midsize">
                  <DropdownMenuItem className="flex flex-col items-start gap-1 p-4">
                    <div className="font-medium text-card-foreground">For Small to Midsize</div>
                    <div className="text-sm text-muted-foreground">0-1000 employees</div>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                Features <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-card border border-border">
                <Link to="/#features">
                  <DropdownMenuItem className="flex flex-col items-start gap-1 p-4">
                    <div className="font-medium text-card-foreground">Technical Assessments</div>
                    <div className="text-sm text-muted-foreground">Code challenges & algorithms</div>
                  </DropdownMenuItem>
                </Link>
                <Link to="/#features">
                  <DropdownMenuItem className="flex flex-col items-start gap-1 p-4">
                    <div className="font-medium text-card-foreground">Non Technical Assessments</div>
                    <div className="text-sm text-muted-foreground">Communication & leadership</div>
                  </DropdownMenuItem>
                </Link>
                <Link to="/#features">
                  <DropdownMenuItem className="flex flex-col items-start gap-1 p-4">
                    <div className="font-medium text-card-foreground">Psychology Assessments</div>
                    <div className="text-sm text-muted-foreground">Personality & cognitive traits</div>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/contact">
              <Button variant="hero" size="default">Start Free Trial</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Link to="/signin">
                  <Button variant="ghost" className="justify-start w-full">Sign In</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="hero" className="w-full">Start Free Trial</Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;