"use client";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
      return (
            <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
                  {/* Efeito de Fundo: Gradiente Radial para dar profundidade */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]" />

                  <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">

                              {/* Badge Tecnológica */}
                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm mb-6"
                              >
                                    <Terminal size={16} />
                                    <span>Engenharia de Prompt & Automação</span>
                              </motion.div>

                              {/* Título Principal (Copywriting de Autoridade) */}
                              <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                              >
                                    Eu construo sistemas que <span className="text-accent">escalam negócios.</span>
                              </motion.h1>

                              {/* Subtítulo */}
                              <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed"
                              >
                                    Especialista em unir a inteligência de dados do Google Ads com a eficiência da IA Generativa.
                                    Transformo processos manuais em máquinas de conversão.
                              </motion.p>

                              {/* Botões de Ação */}
                              <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                              >
                                    <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-primary font-bold rounded-lg transition-all flex items-center gap-2 group">
                                          Ver Soluções
                                          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>

                                    <a 
                                          href="/curriculo.pdf" 
                                          download="Caroline_Balles_CV.pdf"
                                          className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-white font-medium rounded-lg transition-all flex items-center gap-2"
                                    >
                                          Baixar CV
                                    </a>

                                    <button className="px-8 py-4 border border-slate-700 hover:border-slate-500 text-white font-medium rounded-lg transition-all">
                                          Falar com Caroline
                                    </button>
                              </motion.div>
                              {/* Botões de Ação */}
                        </div>
                  </div>
            </section>
      );
}