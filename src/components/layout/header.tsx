"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Zap, Menu, X, Phone, Wrench, Image as ImageIcon, MessageSquare, Mail, ChevronRight, Sparkles, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader, SheetDescription } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { href: '#services', label: 'Serviços', icon: Wrench },
  { href: '#ai-diagnosis', label: 'Diagnóstico IA', icon: Sparkles },
  { href: '#gallery', label: 'Projetos', icon: ImageIcon },
  { href: '#testimonials', label: 'Depoimentos', icon: MessageSquare },
  { href: '#contact', label: 'Contato', icon: Mail },
];

const socialLinks = [
  { href: 'https://www.instagram.com/jp_eletricaemanutencoes?utm_source=qr&igsh=cDVveTZnNzJjNDBy', icon: Instagram, label: 'Instagram' },
  { href: 'https://wa.me/5511920920305', icon: MessageSquare, label: 'WhatsApp' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -15, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300 bg-background/95 backdrop-blur-md border-b border-border",
      isScrolled ? "py-2 shadow-md" : "py-4"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold group">
          <div className="bg-primary p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-foreground">
            JP <span className="text-primary">Elétrica</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-sm font-semibold transition-all hover:text-primary relative group text-muted-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="shadow-lg shadow-primary/20">
            <Link href="#contact">Orçamento Grátis</Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden flex items-center gap-3">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-transparent text-foreground"
              >
                <Menu className="h-8 w-8" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-none flex flex-col bg-background">
              <SheetHeader className="p-6 border-b text-left">
                <SheetTitle className="flex items-center gap-2 text-xl font-bold">
                  <Zap className="h-6 w-6 text-primary" />
                  <span>JP Elétrica</span>
                </SheetTitle>
                <SheetDescription className="text-sm text-muted-foreground mt-1">
                  Soluções elétricas profissionais e seguras para você.
                </SheetDescription>
              </SheetHeader>
              
              <div className="flex-1 overflow-y-auto">
                <motion.nav 
                  variants={containerVariants}
                  initial="hidden"
                  animate={isMenuOpen ? "show" : "hidden"}
                  className="flex flex-col p-6 gap-3"
                >
                  {navLinks.map((link) => (
                    <motion.div key={link.href} variants={itemVariants}>
                      <Link 
                        href={link.href} 
                        className="flex items-center justify-between p-4 rounded-2xl bg-muted/40 hover:bg-primary/10 hover:text-primary transition-all group border border-transparent hover:border-primary/20" 
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 rounded-xl bg-background shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                            <link.icon className="h-5 w-5" />
                          </div>
                          <span className="text-lg font-bold tracking-tight">{link.label}</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>

              <div className="p-6 bg-muted/20 border-t mt-auto">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    {socialLinks.map((social) => (
                      <Link 
                        key={social.label} 
                        href={social.href} 
                        target="_blank"
                        className="p-3 rounded-xl bg-background border border-border hover:border-primary hover:text-primary transition-all"
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5" />
                      </Link>
                    ))}
                  </div>
                  
                  <div className="p-4 rounded-2xl bg-background border border-border shadow-sm">
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em] mb-2">Plantão 24 Horas</p>
                    <a href="tel:+5511920920305" className="text-xl font-black flex items-center gap-3 text-primary hover:scale-[1.02] transition-transform origin-left">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <Phone className="h-5 w-5" />
                      </div>
                      (11) 92092-0305
                    </a>
                  </div>
                  
                  <Button asChild size="lg" className="w-full h-16 text-lg font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-[0.98] transition-transform" onClick={() => setIsMenuOpen(false)}>
                    <Link href="#contact">Solicitar Orçamento</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
