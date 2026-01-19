import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComparisonSection = () => {
  const features = [
    {
      name: "Alertas antes de zerar",
      nexus: "check",
      bling: "partial",
      blingNote: "Só mostra atual",
      excel: "no",
    },
    {
      name: "VVD Real (dias com estoque)",
      nexus: "check",
      bling: "partial",
      blingNote: "Simplificado",
      excel: "no",
    },
    {
      name: "Identifica capital parado",
      nexus: "check",
      bling: "no",
      excel: "no",
    },
    {
      name: "Considera tempo fornecedor",
      nexus: "check",
      bling: "no",
      excel: "no",
    },
    {
      name: "Atualização automática",
      nexus: "check",
      nexusNote: "Diária",
      bling: "partial",
      blingNote: "Manual",
      excel: "no",
      excelNote: "Manual",
    },
    {
      name: "Tempo de setup",
      nexus: "check",
      nexusNote: "2 min",
      bling: "partial",
      blingNote: "–",
      excel: "no",
      excelNote: "Horas",
    },
    {
      name: 'Recomendações específicas',
      nexus: "check",
      nexusNote: '"Repor 48 un"',
      bling: "no",
      excel: "no",
    },
  ];

  const renderStatus = (status: string, note?: string) => {
    if (status === "check") {
      return (
        <div className="flex flex-col items-center gap-1">
          <CheckCircle className="w-6 h-6 text-success" />
          {note && <span className="text-xs text-muted-foreground">{note}</span>}
        </div>
      );
    }
    if (status === "partial") {
      return (
        <div className="flex flex-col items-center gap-1">
          <AlertCircle className="w-6 h-6 text-warning" />
          {note && <span className="text-xs text-muted-foreground">{note}</span>}
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center gap-1">
        <XCircle className="w-6 h-6 text-muted-foreground/50" />
        {note && <span className="text-xs text-muted-foreground">{note}</span>}
      </div>
    );
  };

  return (
    <section className="py-section-mobile lg:py-section bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-mobile lg:text-section text-foreground mb-4">
            Por Que o Nexus OS é <span className="text-gradient-gold">Diferente</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Compare e entenda o valor
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-left text-muted-foreground font-medium">Feature</th>
                <th className="py-4 px-4 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-gold text-white rounded-full font-semibold">
                    Nexus OS
                  </div>
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="text-foreground font-semibold">Bling Padrão</div>
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="text-foreground font-semibold">Excel/Planilhas</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-4 text-foreground font-medium">
                    {feature.name}
                  </td>
                  <td className="py-4 px-4">
                    {renderStatus(feature.nexus, feature.nexusNote)}
                  </td>
                  <td className="py-4 px-4">
                    {renderStatus(feature.bling, feature.blingNote)}
                  </td>
                  <td className="py-4 px-4">
                    {renderStatus(feature.excel, feature.excelNote)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gold" size="lg">
            Experimentar Grátis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
