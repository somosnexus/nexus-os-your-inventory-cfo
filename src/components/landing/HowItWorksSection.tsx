import { Link2, Cpu, Target, ArrowRight, CheckCircle, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import nexusLogo from "@/assets/nexus-logo.png";
import blingLogo from "@/assets/bling-logo.png";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: Link2,
      iconColor: "text-primary",
      iconBg: "bg-primary/10",
      title: "Conecta Seu Bling",
      description: "Autorização segura com 1 clique. OAuth 2.0 - o mesmo padrão usado por bancos.",
      visual: (
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="w-14 h-14 rounded-xl bg-[#22C55E] flex items-center justify-center p-2 shadow-md">
            <img src={blingLogo} alt="Bling" className="w-full h-full object-contain" />
          </div>
          <ArrowRight className="w-6 h-6 text-primary" />
          <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center p-1 shadow-gold">
            <img src={nexusLogo} alt="Nexus OS" className="w-full h-full object-contain" />
          </div>
        </div>
      ),
    },
    {
      number: "2",
      icon: Cpu,
      iconColor: "text-primary",
      iconBg: "bg-primary/10",
      title: "Sistema Analisa Automaticamente",
      description: "Importamos seus produtos e vendas dos últimos 90 dias. Sem planilha, sem trabalho manual.",
      visual: (
        <div className="flex items-center justify-center gap-2 mt-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-1">
              <CheckCircle className={`w-5 h-5 ${i <= 2 ? 'text-success' : 'text-muted-foreground/50'}`} />
            </div>
          ))}
          <div className="ml-2 animate-pulse">
            <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          </div>
        </div>
      ),
    },
    {
      number: "3",
      icon: Target,
      iconColor: "text-success",
      iconBg: "bg-success/10",
      title: "Recebe Alertas Priorizados",
      description: "Dashboard mostra exatamente o que fazer agora. Priorizado por urgência.",
      visual: (
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
              <Bell className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-danger text-white text-xs font-bold flex items-center justify-center">
              3
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-section-mobile lg:py-section section-alt">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-mobile lg:text-section text-foreground mb-4">
            Setup em Menos de <span className="text-gradient-gold">2 Minutos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sem complicação. Sem configuração técnica.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-border" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-card rounded-2xl shadow-card p-8 card-hover border border-border text-center relative z-10">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-gold text-white font-bold flex items-center justify-center text-lg shadow-gold">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl ${step.iconBg} mt-4 mb-6`}>
                    <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-2">
                    {step.description}
                  </p>

                  {/* Visual */}
                  {step.visual}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl">
            Começar Agora - 100% Grátis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
