import { AlertCircle, DollarSign, Clock } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertCircle,
      number: "R$ 2.800",
      title: "Perdidos por mês a cada produto que zerou sem avisar",
      subtitle: "E você só descobre quando o cliente reclama",
      variant: "red" as const,
      iconColor: "text-danger",
    },
    {
      icon: DollarSign,
      number: "R$ 15.000+",
      title: "Parados em produtos encalhados sem movimento",
      subtitle: "Seu dinheiro preso quando poderia estar investido",
      variant: "orange" as const,
      iconColor: "text-warning",
    },
    {
      icon: Clock,
      number: "15 horas",
      title: "Perdidas toda semana em planilhas manuais",
      subtitle: "Tempo que você poderia usar para vender mais",
      variant: "gray" as const,
      iconColor: "text-muted-foreground",
    },
  ];

  return (
    <section className="py-section-mobile lg:py-section section-alt">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-mobile lg:text-section text-foreground mb-4">
            Você Está Perdendo Dinheiro <span className="text-gradient-gold">AGORA</span> e Nem Sabe
          </h2>
          <p className="text-lg text-muted-foreground">
            A cada dia que passa sem controle inteligente de estoque:
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`problem-card-${problem.variant} rounded-2xl p-8 card-hover`}
            >
              <div className={`inline-flex p-3 rounded-xl mb-6 ${
                problem.variant === 'red' ? 'bg-danger/10' :
                problem.variant === 'orange' ? 'bg-warning/10' : 'bg-muted'
              }`}>
                <problem.icon className={`w-8 h-8 ${problem.iconColor}`} />
              </div>
              
              <div className={`text-4xl lg:text-5xl font-bold mb-4 ${
                problem.variant === 'red' ? 'text-danger' :
                problem.variant === 'orange' ? 'text-warning' : 'text-foreground'
              }`}>
                {problem.number}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground">
                {problem.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
