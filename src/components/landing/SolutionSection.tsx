import { Bell, TrendingDown, TrendingUp, AlertCircle, DollarSign, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Bell,
      iconColor: "text-danger",
      iconBg: "bg-danger/10",
      title: "Alertas ANTES de Acabar",
      mock: {
        type: "warning",
        badge: "💰",
        title: "R$ 11.700 parados",
        subtitle: "8 unidades há 95 dias",
        action: "Ver Detalhes",
      },
      description: "Te avisa com antecedência considerando o tempo do seu fornecedor. Você nunca mais fica sem estoque.",
    },
    {
      icon: TrendingDown,
      iconColor: "text-warning",
      iconBg: "bg-warning/10",
      title: "Capital Parado Identificado",
      mock: {
        type: "critical",
        badge: "🔴 CRÍTICO",
        title: "Mouse Gamer",
        subtitle: "Acaba em 2 dias",
        action: "Repor Agora",
      },
      description: "Mostra exatamente quanto dinheiro está travado e sugere ações para recuperar.",
    },
    {
      icon: TrendingUp,
      iconColor: "text-success",
      iconBg: "bg-success/10",
      title: "Oportunidades em Tempo Real",
      mock: {
        type: "success",
        badge: "📈",
        title: "Webcam HD +150%",
        subtitle: "Crescimento detectado",
        action: "Aproveitar",
      },
      description: "Detecta produtos crescendo e te mostra onde investir para maximizar lucro.",
    },
  ];

  return (
    <section className="py-section-mobile lg:py-section bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-mobile lg:text-section text-foreground mb-4">
            O Nexus OS Resolve Isso <span className="text-gradient-gold">Automaticamente</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conecta no seu Bling em 2 minutos. Simples assim.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-card p-6 card-hover border border-border"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${solution.iconBg}`}>
                  <solution.icon className={`w-6 h-6 ${solution.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {solution.title}
                </h3>
              </div>

              {/* Mock Alert Card */}
              <div className={`rounded-xl p-4 mb-6 ${
                solution.mock.type === 'critical' ? 'mock-alert-critical' :
                solution.mock.type === 'warning' ? 'mock-alert-warning' : 'mock-alert-success'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">{solution.mock.badge}</span>
                  <span className={`text-xs font-bold uppercase ${
                    solution.mock.type === 'critical' ? 'text-danger' :
                    solution.mock.type === 'warning' ? 'text-warning' : 'text-success'
                  }`}>
                    {solution.mock.type === 'critical' ? 'Crítico' :
                     solution.mock.type === 'warning' ? 'Capital' : 'Oportunidade'}
                  </span>
                </div>
                <p className="font-semibold text-foreground text-sm mb-1">
                  {solution.mock.title}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  {solution.mock.subtitle}
                </p>
                <div className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-md ${
                  solution.mock.type === 'critical' ? 'bg-danger/20 text-danger' :
                  solution.mock.type === 'warning' ? 'bg-warning/20 text-warning' : 'bg-success/20 text-success'
                }`}>
                  {solution.mock.action}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gold" size="lg">
            Começar Grátis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
