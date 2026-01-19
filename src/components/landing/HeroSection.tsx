import { Button } from "@/components/ui/button";
import { CheckCircle, Play, AlertCircle, TrendingUp, DollarSign } from "lucide-react";
import nexusLogo from "@/assets/nexus-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 lg:py-0 overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 badge-success mb-6 animate-fade-up">
              <CheckCircle className="w-4 h-4" />
              <span>Aprovado pelo Bling</span>
            </div>

            {/* Headline */}
            <h1 className="text-hero-mobile lg:text-hero text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Pare de Perder Vendas e Dinheiro no Seu Estoque
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              O Nexus OS se conecta ao seu Bling e te avisa <strong className="text-foreground">ANTES</strong> do produto zerar. Já aprovado oficialmente pelo Bling.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl">
                Começar Grátis Agora
              </Button>
              <Button variant="goldOutline" size="lg" className="gap-2">
                <Play className="w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="trust-item">
                <CheckCircle className="w-5 h-5" />
                <span>Sem cartão de crédito</span>
              </div>
              <div className="trust-item">
                <CheckCircle className="w-5 h-5" />
                <span>2 minutos para configurar</span>
              </div>
              <div className="trust-item">
                <CheckCircle className="w-5 h-5" />
                <span>Grátis para sempre</span>
              </div>
            </div>
          </div>

          {/* Right Visual - Mock Dashboard */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {/* Logo Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 z-20">
              <img src={nexusLogo} alt="Nexus OS" className="w-20 h-20 object-contain" />
            </div>

            {/* Dashboard Mock */}
            <div className="bg-card rounded-2xl shadow-xl p-6 border border-border mt-12">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-danger" />
                <div className="w-3 h-3 rounded-full bg-warning" />
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="ml-2 text-sm text-muted-foreground">nexusos.com.br/dashboard</span>
              </div>

              {/* Alert Cards */}
              <div className="space-y-4">
                <div className="mock-alert-critical flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-danger/20">
                    <AlertCircle className="w-6 h-6 text-danger" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-danger uppercase">Crítico</span>
                    </div>
                    <p className="font-semibold text-foreground">Mouse Gamer RGB Pro</p>
                    <p className="text-sm text-muted-foreground">Acaba em 2 dias • Repor 48 unidades</p>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0 border-danger text-danger hover:bg-danger hover:text-white">
                    Repor Agora
                  </Button>
                </div>

                <div className="mock-alert-warning flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-warning/20">
                    <DollarSign className="w-6 h-6 text-warning" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-warning uppercase">Capital Parado</span>
                    </div>
                    <p className="font-semibold text-foreground">R$ 11.700 identificados</p>
                    <p className="text-sm text-muted-foreground">8 produtos sem movimento há 95 dias</p>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0 border-warning text-warning hover:bg-warning hover:text-white">
                    Ver Detalhes
                  </Button>
                </div>

                <div className="mock-alert-success flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-success/20">
                    <TrendingUp className="w-6 h-6 text-success" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-success uppercase">Oportunidade</span>
                    </div>
                    <p className="font-semibold text-foreground">Webcam HD +150%</p>
                    <p className="text-sm text-muted-foreground">Crescimento detectado • Aumente estoque</p>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0 border-success text-success hover:bg-success hover:text-white">
                    Aproveitar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
