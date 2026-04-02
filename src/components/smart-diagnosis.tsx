"use client";

import { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, AlertTriangle, ShieldCheck, Loader2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';

export function SmartDiagnosis() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDiagnosis = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY as string });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Você é um assistente virtual especialista em elétrica residencial e comercial no Brasil. 
        O usuário descreveu o seguinte problema: "${prompt}".
        
        Sua tarefa é:
        1. Fornecer avisos de segurança imediatos (ex: não toque em fios expostos, desligue o disjuntor se houver fumaça).
        2. Dar uma possível explicação técnica simplificada do que pode estar acontecendo.
        3. Recomendar que o usuário contrate um profissional qualificado (JP Elétrica) para resolver o problema com segurança.
        
        Mantenha um tom profissional, prestativo e focado em segurança. Use Markdown para formatar a resposta.`,
      });

      setResponse(response.text || "Não foi possível gerar uma resposta no momento.");
    } catch (err) {
      console.error("Erro na IA:", err);
      setError("Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full border-none shadow-2xl bg-background/50 backdrop-blur-sm overflow-hidden rounded-3xl">
      <CardHeader className="bg-primary/10 p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-primary p-2 rounded-lg">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">Diagnóstico Inteligente</CardTitle>
        </div>
        <CardDescription className="text-lg">
          Descreva o que está acontecendo e receba orientações de segurança imediatas da nossa IA.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 space-y-6">
        <div className="space-y-4">
          <Textarea
            placeholder="Ex: Minha tomada está saindo faíscas quando ligo o ferro, ou as luzes da sala estão piscando..."
            className="min-h-[120px] text-lg p-4 rounded-2xl border-border focus:ring-primary"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button 
            onClick={handleDiagnosis} 
            disabled={isLoading || !prompt.trim()}
            className="w-full h-14 text-lg font-bold rounded-2xl shadow-lg shadow-primary/20"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Analisando seu problema...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Obter Orientação Grátis
              </>
            )}
          </Button>
        </div>

        <AnimatePresence mode="wait">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-4 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive flex items-center gap-3"
            >
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <p className="font-medium">{error}</p>
            </motion.div>
          )}

          {response && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-2 mb-4 text-primary font-bold">
                  <ShieldCheck className="h-5 w-5" />
                  <span>Avaliação da IA</span>
                </div>
                <div className="prose prose-neutral dark:prose-invert max-w-none prose-p:leading-relaxed prose-li:my-1">
                  <ReactMarkdown>{response}</ReactMarkdown>
                </div>
              </div>
              
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
                <p className="text-sm font-medium">
                  <strong>Atenção:</strong> Este diagnóstico é apenas informativo. Nunca tente realizar reparos elétricos sem o conhecimento e ferramentas adequadas. Risco de choque elétrico fatal.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}
