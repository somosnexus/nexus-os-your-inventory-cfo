import { CheckCircle, Shield, BookOpen, Zap } from "lucide-react";
import blingLogo from "@/assets/bling-logo.png";

const CredibilitySection = () => {
  return (
    <section className="py-section-mobile lg:py-section section-gold">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Logo Bling */}
          <div className="inline-flex items-center gap-3 mb-6">
            <img 
              src={blingLogo} 
              alt="Bling ERP" 
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 badge-success mb-6 text-base px-6 py-3">
            <CheckCircle className="w-5 h-5" />
            <span>Integração Oficial OAuth 2.0</span>
          </div>

          {/* Title */}
          <h2 className="text-section-mobile lg:text-section text-foreground mb-6">
            Aprovado Oficialmente pelo <span className="text-gradient-gold">Bling</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Primeira ferramenta de gestão de estoque inteligente aprovada oficialmente pelo Bling em 2026. 
            Sua integração é segura, testada e confiável.
          </p>

          {/* Mini Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-card rounded-full shadow-card border border-border">
              <Shield className="w-5 h-5 text-success" />
              <span className="font-medium text-foreground">100% Seguro</span>
            </div>
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-card rounded-full shadow-card border border-border">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Somente Leitura</span>
            </div>
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-card rounded-full shadow-card border border-border">
              <Zap className="w-5 h-5 text-warning" />
              <span className="font-medium text-foreground">API Oficial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
