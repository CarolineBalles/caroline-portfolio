"use client";
import { motion } from "framer-motion";

const tools = [
      { name: "OpenAI / GPT-4", category: "IA" },
      { name: "Google Ads", category: "Performance" },
      { name: "JavaScript / React", category: "Web" },
      { name: "Python", category: "Automação" },
      { name: "Make / n8n", category: "Integração" },
      { name: "CRM Hubspot/RD", category: "Dados" },
];

export default function TechStack() {
      return (
            <section className="py-24 bg-primary/50 border-t border-slate-800/50">
                  <div className="container mx-auto px-6 text-center">
                        <h2 className="text-slate-500 font-mono text-sm tracking-widest uppercase mb-12">
                              Tecnologias & Ferramentas Dominadas
                        </h2>

                        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                              {tools.map((tool, index) => (
                                    <motion.div
                                          key={index}
                                          initial={{ opacity: 0 }}
                                          whileInView={{ opacity: 1 }}
                                          transition={{ delay: index * 0.1 }}
                                          viewport={{ once: true }}
                                          className="group flex flex-col items-center"
                                    >
                                          <div className="px-6 py-3 rounded-xl border border-slate-800 bg-slate-900/50 group-hover:border-accent/50 group-hover:bg-accent/5 transition-all duration-300">
                                                <span className="text-slate-300 group-hover:text-white font-medium">
                                                      {tool.name}
                                                </span>
                                          </div>
                                          <span className="text-[10px] font-mono text-slate-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                {tool.category}
                                          </span>
                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </section>
      );
}