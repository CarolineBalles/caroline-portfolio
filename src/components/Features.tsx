"use client";
import { motion } from "framer-motion";
import { BarChart3, Bot, Code2 } from "lucide-react";

const services = [
      {
            title: "Growth & Performance",
            description: "Estratégias de Google Ads focadas em ROI. Do planejamento do funil à criação de Landing Pages de alta conversão.",
            icon: <BarChart3 className="text-accent" size={32} />,
      },
      {
            title: "IA & Automação",
            description: "Implementação de Agentes de IA e Chatbots de WhatsApp que qualificam leads 24/7, integrando-se ao seu CRM.",
            icon: <Bot className="text-accent" size={32} />,
      },
      {
            title: "Estrutura & Escala",
            description: "Desenvolvimento de arquiteturas Web e integrações via API que conectam ferramentas e eliminam o trabalho manual.",
            icon: <Code2 className="text-accent" size={32} />,
      },
];

export default function Features() {
      return (
            <section className="py-24 bg-primary relative">
                  <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                    A Tríplice Coroa do Crescimento
                              </h2>
                              <p className="text-slate-400 max-w-2xl mx-auto">
                                    Soluções integradas para empresas que buscam eficiência máxima e escala tecnológica.
                              </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {services.map((service, index) => (
                                    <motion.div
                                          key={index}
                                          initial={{ opacity: 0, y: 20 }}
                                          whileInView={{ opacity: 1, y: 0 }}
                                          transition={{ delay: index * 0.1 }}
                                          viewport={{ once: true }}
                                          whileHover={{ y: -10 }}
                                          className="p-8 rounded-2xl border border-slate-800 bg-surface backdrop-blur-md hover:border-accent/50 transition-all group"
                                    >
                                          <div className="mb-6 p-3 inline-block rounded-lg bg-slate-800/50 group-hover:bg-accent/10 transition-colors">
                                                {service.icon}
                                          </div>
                                          <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                          <p className="text-slate-400 leading-relaxed">
                                                {service.description}
                                          </p>
                                    </motion.div>
                              ))}
                        </div>
                  </div>
            </section>
      );
}