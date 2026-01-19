import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart3 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-section-mobile lg:py-section bg-gradient-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-section-mobile lg:text-section text-white mb-6">
            Pare de Perder Dinheiro. Comece Agora.
          </h2>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-white/90 mb-8">
            Junte-se a centenas de lojistas que já controlam seu estoque de forma inteligente
          </p>

          {/* Stat */}
          <div className="inline-flex items-center gap-3 bg-white/20 rounded-full px-6 py-3 mb-10">
            <BarChart3 className="w-6 h-6 text-white" />
            <span className="text-white font-semibold text-lg">
              Mais de R$ 500 mil já economizados pelos nossos usuários
            </span>
          </div>

          {/* CTA Button */}
          <div className="mb-10">
            <Button variant="heroPro" size="xl" className="animate-pulse-gold px-12">
              Começar Grátis - Sem Cartão
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Aprovado pelo Bling</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Setup em 2 min</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Grátis para sempre</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
