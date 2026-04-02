import { Zap, Instagram, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card py-16 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-foreground">JP Elétrica</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Soluções elétricas completas com foco em segurança, qualidade e transparência para sua casa ou empresa.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="https://www.instagram.com/jp_eletricaemanutencoes?utm_source=qr&igsh=cDVveTZnNzJjNDBy" 
                aria-label="Instagram" 
                target="_blank"
                className="bg-muted p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="https://wa.me/5511920920305" 
                aria-label="WhatsApp" 
                target="_blank"
                className="bg-muted p-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageSquare className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Nossos Serviços</Link></li>
              <li><Link href="#ai-diagnosis" className="text-muted-foreground hover:text-primary transition-colors">Diagnóstico Inteligente</Link></li>
              <li><Link href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">Projetos Realizados</Link></li>
              <li><Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Depoimentos</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Solicitar Orçamento</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-4">
              <li className="text-muted-foreground">Instalações Residenciais</li>
              <li className="text-muted-foreground">Manutenção Predial</li>
              <li className="text-muted-foreground">Projetos de Iluminação</li>
              <li className="text-muted-foreground">Reparos de Emergência</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+5511920920305" className="hover:text-primary transition-colors">(11) 92092-0305</a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:jpeletricaemanutencao@gmail.com" className="hover:text-primary transition-colors break-all">jpeletricaemanutencao@gmail.com</a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>São Paulo e Região Metropolitana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} JP Elétrica e Manutenções. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desenvolvido com foco em excelência.
          </p>
        </div>
      </div>
    </footer>
  );
}
