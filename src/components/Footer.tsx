"use client";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
      return (
            <footer className="bg-primary pt-24 pb-12 border-t border-slate-800/50">
                  <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                              Vamos construir o <span className="text-accent">próximo nível?</span>
                        </h2>

                        <p className="text-slate-400 max-w-xl mx-auto mb-12 text-lg">
                              Disponível para projetos de Growth, Automação de Processos e Implementação de IA.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-24">
                              
                              <a 
                                    href="mailto:caroline.ribeiro.balles@gmail.com"
                                    className="flex items-center gap-2 px-8 py-4 bg-white hover:bg-[#38BDF8] text-[#0F172A] hover:text-white font-bold rounded-full transition-all duration-300 group"
                              >
                                    <span>Mandar E-mail</span>
                                    <Mail size={20} className="text-[#0F172A] group-hover:text-white transition-colors duration-300" />
                              </a>

                              <a
                                    href="https://linkedin.com/in/seu-perfil"
                                    target="_blank"
                                    className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                              >
                                    LinkedIn <ArrowUpRight size={20} />
                              </a>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-800 text-slate-500 text-sm">
                              <p>© 2026 Caroline Ribeiro Balles. Desenvolvido com IA & Next.js.</p>
                              <div className="flex gap-6 mt-4 md:mt-0">
                                    <span className="hover:text-white cursor-default transition-colors">São Vicente, SP</span>
                                    <span className="hover:text-white cursor-default transition-colors">Full-Remote</span>
                              </div>
                        </div>
                  </div>
            </footer>
      );
}