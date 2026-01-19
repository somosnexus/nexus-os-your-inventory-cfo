import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import nexusLogo from "@/assets/nexus-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Funcionalidades", href: "#features" },
    { name: "Como Funciona", href: "#how-it-works" },
    { name: "Preços", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src={nexusLogo} alt="Nexus OS" className="w-10 h-10 object-contain" />
            <span className="text-xl font-bold text-foreground">Nexus OS</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-foreground font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground">
              Entrar
            </Button>
            <Button variant="gold">
              Começar Grátis
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4 mb-6">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="w-full text-foreground">
                Entrar
              </Button>
              <Button variant="gold" className="w-full">
                Começar Grátis
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
