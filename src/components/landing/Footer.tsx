import nexusLogo from "@/assets/nexus-logo.png";

const Footer = () => {
  const productLinks = [
    { name: "Funcionalidades", href: "#features" },
    { name: "Planos e Preços", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Integrações", href: "#" },
  ];

  const legalLinks = [
    { name: "Termos de Uso", href: "#" },
    { name: "Política de Privacidade", href: "#" },
    { name: "Sobre Nós", href: "#" },
  ];

  return (
    <footer className="section-dark py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={nexusLogo} alt="Nexus OS" className="w-12 h-12 object-contain" />
              <span className="text-xl font-bold text-white">Nexus OS</span>
            </div>
            <p className="text-gray-400 mb-4">CFO Digital para E-commerce</p>
            <a
              href="mailto:contato@nexusos.com.br"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              contato@nexusos.com.br
            </a>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produto</h4>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2026 Nexus OS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
