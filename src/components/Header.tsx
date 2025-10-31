import { Link, useLocation } from "react-router-dom";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">ClarifAI</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/report" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              location.pathname === "/report" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Report Scam
          </Link>
        </nav>
        
        <Link to="/report">
          <Button variant="destructive" size="sm">
            Report a Scam
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
