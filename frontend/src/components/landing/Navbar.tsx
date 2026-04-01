import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "@/components/ui/Logo";

// Prefetch functions — kick off silent downloads on hover
const prefetchSignIn = () => import("@/pages/SignIn");
const prefetchSignUp = () => import("@/pages/SignUp");
const prefetchDashboard = () => import("@/pages/Dashboard");

const navLinks = [
  { name: "Home", icon: Home, active: true },
  { name: "Preview" },
  { name: "Features" },
  { name: "FAQ" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex items-center justify-between bg-white/50 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex flex-1 items-center justify-start">
        <a href="#" className="flex items-center">
          <Logo />
        </a>
      </div>

      {/* Centered Pill Menu */}
      <div className="hidden md:flex items-center bg-[#1A1A1A] p-1 rounded-full shadow-lg">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.name === "Home" ? "#" : `#${link.name.toLowerCase().replace(" ", "-")}`}
            className={`px-4 py-1.5 rounded-full text-sm transition-all flex items-center gap-1.5 ${link.active
              ? "bg-white text-black font-medium"
              : "text-white/70 hover:text-white"
              }`}
          >
            {link.icon && <link.icon size={14} />}
            {link.name}
          </a>
        ))}
      </div>

      {/* Right Action & Mobile Menu */}
      <div className="flex flex-1 items-center justify-end gap-6">
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/sign-in"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            onMouseEnter={prefetchSignIn}
          >
            Login
          </Link>
          <Button
            className="rounded-full px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-soft"
            onClick={() => navigate("/sign-up")}
            onMouseEnter={prefetchSignUp}
          >
            Start Tracking Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-border p-4 md:hidden shadow-xl animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.name.toLowerCase().replace(" ", "-")}`}
              className="block py-3 px-4 text-sm font-medium hover:bg-slate-50 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t mt-2 space-y-3">
            <Link 
              to="/sign-in"
              className="block py-3 px-4 text-sm font-medium hover:bg-slate-50 rounded-lg text-center"
              onMouseEnter={prefetchSignIn}
            >
              Login
            </Link>
            <Button 
              className="w-full rounded-full bg-primary text-primary-foreground py-6 font-semibold shadow-soft"
              onClick={() => navigate("/sign-up")}
              onMouseEnter={prefetchSignUp}
            >
              Start Tracking Free
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
