"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Lightbulb, Wrench, Building, Home as HomeIcon, Mail, Phone, Clock, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactForm } from '@/components/contact-form';
import { SmartDiagnosis } from '@/components/smart-diagnosis';
import Link from 'next/link';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Zap,
    title: 'Instalações e Reformas',
    description: 'Troca de fiação antiga, novos pontos de tomada e interruptores seguindo o padrão brasileiro NBR 5410.',
  },
  {
    icon: ShieldCheck,
    title: 'Quadros de Distribuição',
    description: 'Montagem e manutenção de quadros de força com disjuntores modernos e proteção contra surtos (DPS) e choques (DR).',
  },
  {
    icon: Lightbulb,
    title: 'Iluminação e Design',
    description: 'Instalação de luminárias, fitas LED, sensores de presença e projetos luminotécnicos para valorizar seu ambiente.',
  },
  {
    icon: Wrench,
    title: 'Chuveiros e Torneiras',
    description: 'Instalação segura de chuveiros e torneiras elétricas, com fiação dimensionada para evitar quedas de energia.',
  },
  {
    icon: CheckCircle2,
    title: 'Aterramento Elétrico',
    description: 'Sistemas de aterramento para proteção de equipamentos sensíveis e segurança total contra descargas elétricas.',
  },
  {
    icon: Clock,
    title: 'Manutenção Preventiva',
    description: 'Revisão completa da rede elétrica para identificar pontos de aquecimento, evitar curtos e reduzir o desperdício de energia.',
  },
];

const testimonials = [
  {
    quote: 'Serviço impecável! A equipe da JP Elétrica foi muito profissional e resolveu meu problema rapidamente. Recomendo a todos!',
    name: 'Maria Silva',
    location: 'São Paulo, SP',
  },
  {
    quote: 'Contratei para a instalação elétrica do meu novo escritório e o resultado ficou excelente. Muito organizados e eficientes.',
    name: 'João Pereira',
    location: 'Campinas, SP',
  },
  {
    quote: 'Ótimo atendimento e preço justo. Fizeram a troca do meu quadro de disjuntores e o serviço ficou perfeito. Com certeza chamarei novamente.',
    name: 'Ana Costa',
    location: 'Jundiaí, SP',
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: 'Segurança em Primeiro Lugar',
    description: 'Trabalhamos rigorosamente dentro das normas técnicas (NBR 5410) para garantir a segurança da sua família ou empresa.'
  },
  {
    icon: Clock,
    title: 'Atendimento 24 Horas',
    description: 'Estamos prontos para atender emergências a qualquer hora do dia ou da noite, com rapidez e eficiência.'
  },
  {
    icon: Zap,
    title: 'Profissionais Qualificados',
    description: 'Nossa equipe é formada por eletricistas experientes e certificados, garantindo um serviço de alta qualidade.'
  }
];

export default function Home() {
  // Safe extraction of images inside the component
  const images = PlaceHolderImages || [];
  const galleryImages = images.filter(img => img.id && img.id.startsWith('gallery-'));
  const heroImage = images.find(img => img.id === 'hero');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:h-[85vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
          {heroImage ? (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              sizes="100vw"
              data-ai-hint={heroImage.imageHint}
            />
          ) : (
            <div className="absolute inset-0 bg-neutral-800" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
          
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-primary text-primary-foreground rounded-full">
                Eletricista Profissional em São Paulo
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-lg leading-[1.1]">
                Soluções Elétricas <span className="text-primary">Seguras</span> e Eficientes
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 drop-shadow-md leading-relaxed">
                Manutenção, instalação e reparos para residências e empresas com a confiança e qualidade que você merece. Atendimento 24h para emergências.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20">
                  <Link href="#contact">Solicitar Orçamento Grátis</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-bold bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                  <Link href="#services">Nossos Serviços</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 -mt-12 relative z-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-8 rounded-2xl shadow-xl border border-border flex flex-col items-center text-center group hover:border-primary/50 transition-colors"
                >
                  <div className="bg-primary/10 p-4 rounded-2xl mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">O Que Fazemos Por Você</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Oferecemos uma gama completa de serviços elétricos com foco em segurança, economia e durabilidade.
                </p>
              </div>
              <Button asChild variant="ghost" className="text-primary font-bold hover:text-primary/80">
                <Link href="#contact" className="flex items-center gap-2">
                  Ver todos os serviços <CheckCircle2 className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.div key={service.title} variants={itemVariants}>
                  <Card className="h-full border-none shadow-none bg-muted/30 hover:bg-muted/50 transition-colors group overflow-hidden">
                    <CardHeader className="items-start pt-8">
                      <div className="bg-background p-4 rounded-xl shadow-sm mb-4 group-hover:scale-110 transition-transform">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio / Gallery Section */}
        <section id="gallery" className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">Galeria de Serviços Executados</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Excelência técnica em cada detalhe. Veja alguns dos nossos trabalhos mais recentes em elétrica e iluminação.
                </p>
              </div>
              <div className="flex gap-2">
                <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">Residencial</div>
                <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">Comercial</div>
                <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold">Industrial</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full min-h-[800px]">
              {galleryImages.map((image, index) => {
                // Define different spans for a bento grid look
                const spans = [
                  "md:col-span-2 md:row-span-2", // Large
                  "md:col-span-2 md:row-span-1", // Wide
                  "md:col-span-1 md:row-span-1", // Small
                  "md:col-span-1 md:row-span-1", // Small
                  "md:col-span-2 md:row-span-1", // Wide
                  "md:col-span-2 md:row-span-1", // Wide
                ];
                
                return (
                  <motion.div 
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      "group relative overflow-hidden rounded-3xl shadow-lg bg-muted",
                      spans[index % spans.length]
                    )}
                  >
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      loading="lazy"
                      className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider uppercase bg-primary text-primary-foreground rounded-full">
                          {index % 3 === 0 ? "Residencial" : index % 3 === 1 ? "Comercial" : "Industrial"}
                        </span>
                        <p className="text-white font-bold text-lg md:text-xl leading-tight">{image.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">O Que Nossos Clientes Dizem</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                A satisfação dos nossos clientes é o combustível que nos move a entregar sempre o melhor.
              </p>
            </div>
            
            <div className="relative">
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full max-w-5xl mx-auto"
              >
                <CarouselContent className="-ml-4">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                      <div className="h-full p-2">
                        <Card className="h-full flex flex-col justify-between border-none bg-muted/30 p-8 rounded-3xl">
                          <CardContent className="p-0">
                            <div className="flex gap-1 mb-6">
                              {[...Array(5)].map((_, i) => (
                                <Zap key={i} className="h-5 w-5 fill-primary text-primary" />
                              ))}
                            </div>
                            <p className="text-xl text-foreground font-medium leading-relaxed italic">"{testimonial.quote}"</p>
                          </CardContent>
                          <div className="mt-8 flex items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                              {testimonial.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">{testimonial.name}</h4>
                              <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-12 md:hidden">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
                <CarouselPrevious className="hidden md:flex -left-12" />
                <CarouselNext className="hidden md:flex -right-12" />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Smart Diagnosis Section */}
        <section id="ai-diagnosis" className="py-20 md:py-32 bg-background overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider">
                  <Sparkles className="h-4 w-4" />
                  Inteligência Artificial
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
                  Precisa de uma <span className="text-primary">Avaliação Rápida?</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Use nossa ferramenta de diagnóstico inteligente para descrever seu problema e receber orientações imediatas de segurança e uma análise técnica preliminar.
                </p>
                <ul className="space-y-4">
                  {[
                    "Avisos de segurança imediatos",
                    "Explicação técnica simplificada",
                    "Orientação profissional gratuita",
                    "Disponível 24 horas por dia"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-medium">
                      <div className="bg-primary/20 p-1 rounded-full">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <SmartDiagnosis />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col gap-10"
              >
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">Vamos Iniciar Seu Projeto?</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Estamos à disposição para atender você com agilidade e transparência. Solicite seu orçamento sem compromisso.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Telefone</h4>
                      <a href="tel:+5511920920305" className="text-muted-foreground hover:text-primary transition-colors text-lg">(11) 92092-0305</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">E-mail</h4>
                      <a href="mailto:jpeletricaemanutencao@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">jpeletricaemanutencao@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 sm:col-span-2">
                    <div className="bg-primary/10 p-3 rounded-xl text-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Horário de Atendimento</h4>
                      <p className="text-muted-foreground text-lg">Seg - Sex: 8:00 - 18:00</p>
                      <p className="text-primary font-semibold">Plantão 24h para emergências</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-2xl border-none rounded-3xl overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
