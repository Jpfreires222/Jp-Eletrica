import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'JP Elétrica Solutions',
  description: 'Soluções elétricas confiáveis para sua casa ou empresa. Manutenção, instalações e reparos com a qualidade JP Elétrica.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background">
        <TooltipProvider>
          {children}
          <Toaster />
          <div className="fixed bottom-6 right-6 z-50">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link 
                  href="https://wa.me/5511920920305" 
                  target="_blank" 
                  aria-label="Fazer orçamento pelo WhatsApp"
                  className={cn(
                    buttonVariants({ size: "icon", variant: "default" }),
                    "h-14 w-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                  )}
                >
                  <MessageSquare className="h-7 w-7" />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Fale conosco no WhatsApp</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
