import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "É seguro conectar meu Bling?",
      answer:
        "Sim! Usamos OAuth 2.0, o mesmo padrão de segurança usado por bancos e fintechs. Temos permissão apenas de LEITURA - nunca alteramos, deletamos ou modificamos nada no seu Bling. Tudo é 100% seguro e aprovado oficialmente pelo Bling.",
    },
    {
      question: "Funciona com Mercado Livre e Shopee?",
      answer:
        "Sim! Se você já integrou esses marketplaces no seu Bling, funciona automaticamente. O Nexus importa todos os dados que já estão no Bling. Em breve teremos integração direta também.",
    },
    {
      question: "Quanto tempo leva para configurar?",
      answer:
        "2 minutos. Literalmente. Você clica em 'Conectar Bling', autoriza com 1 clique, e pronto. O sistema importa tudo sozinho. Sem planilhas, sem configurações complexas.",
    },
    {
      question: "Posso cancelar quando quiser?",
      answer:
        "Sim! Cancele com 1 clique, sem multas, sem perguntas. Seus dados ficam salvos por 30 dias caso queira voltar. Zero compromisso.",
    },
    {
      question: "Vocês alteram algo no meu Bling?",
      answer:
        "NÃO! Jamais. Nossa integração é 100% de LEITURA. Nunca tocamos, alteramos ou deletamos nada. Só importamos os dados para fazer as análises.",
    },
    {
      question: "O plano FREE é grátis mesmo para sempre?",
      answer:
        "SIM! O FREE é grátis para sempre. Sem pegadinha, sem trial que vira pago. Você pode usar para sempre com até 30 produtos. Se quiser mais produtos ou features extras, aí sim faz upgrade para PRO.",
    },
    {
      question: "Como funciona a garantia de reembolso?",
      answer:
        "Se você assinar o PRO e não economizar pelo menos R$ 500 no primeiro mês, devolvemos 100% do seu dinheiro. Sem perguntas. Simples assim.",
    },
  ];

  return (
    <section className="py-section-mobile lg:py-section bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-section-mobile lg:text-section text-foreground mb-4">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tudo que você precisa saber
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
