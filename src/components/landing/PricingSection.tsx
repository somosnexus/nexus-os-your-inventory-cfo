import { CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const freeFeatures = [
    "Até 30 produtos",
    "Sincronização diária",
    "Dashboard completo",
    "3 tipos de alertas",
    "Recomendações básicas",
    "Suporte email (24h)",
  ];

  const proFeatures = [
    "Tudo do Free +",
    "Produtos ILIMITADOS",
    "Sincronização 2x/dia",
    "Notificações automáticas por email",
    "Relatórios PDF exportáveis",
    "Análise de sazonalidade (em breve)",
    "Histórico de ações",
    "Suporte prioritário (< 4h)",
    "Acesso antecipado a features",
  ];

  return (
    <section id="pricing" className="py-section-mobile lg:py-section section-alt">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-mobile lg:text-section text-foreground mb-4">
            Comece Grátis. Escale <span className="text-gradient-gold">Quando Quiser</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            Sem cartão de crédito. Sem compromisso. Cancele quando quiser.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
          {/* Free Plan */}
          <div className="bg-card rounded-2xl shadow-card border border-border p-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">FREE</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-5xl font-bold text-foreground">R$ 0</span>
              <span className="text-muted-foreground">/mês</span>
            </div>
            <p className="text-muted-foreground mb-6">Grátis para sempre</p>

            <div className="h-px bg-border mb-6" />

            <ul className="space-y-4 mb-8">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-success shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="h-px bg-border mb-6" />

            <Button variant="dark" className="w-full" size="lg">
              Começar Grátis
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-gradient-gold rounded-2xl shadow-gold-lg p-8 lg:scale-105">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold">
                <Star className="w-4 h-4" />
                MAIS POPULAR
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 mt-4">PRO</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-5xl font-bold text-white">R$ 97</span>
              <span className="text-white/80">/mês</span>
            </div>
            <p className="text-white/80 mb-6">ou R$ 970/ano (economize 16%)</p>

            <div className="h-px bg-white/20 mb-6" />

            <ul className="space-y-4 mb-8">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-white shrink-0" />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Guarantee Box */}
            <div className="bg-white/20 rounded-xl p-4 mb-6 text-center">
              <p className="text-white text-sm font-medium">
                💯 14 dias grátis + Reembolso se não economizar R$ 500
              </p>
            </div>

            <Button variant="heroPro" className="w-full" size="lg">
              Começar Teste Grátis PRO
            </Button>
          </div>
        </div>

        {/* Trust Text */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          ✅ Cancele quando quiser • ✅ Sem multas • ✅ Seus dados seguros por 30 dias
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
