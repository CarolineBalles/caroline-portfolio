"use client";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, MessageSquare, TrendingUp, BrainCircuit } from "lucide-react";

const allProjects = [
      {
            id: "01",
            tag: "Engenharia & Produto",
            title: "Plataforma SaaS: Streaming de Vídeo ao Vivo",
            description: "Desenvolvimento integral de um ecossistema de streaming, unindo lógica web, campanhas de ads e automação de suporte.",
            items: ["Arquitetura de baixa latência", "Integração de pagamentos", "Fluxo automático de usuários", "Escala com baixo custo"],
            icon: <ExternalLink size={24} />,
            color: "from-accent to-purple"
      },
      {
            id: "02",
            tag: "IA & CX",
            title: "Máquina de Atendimento Inteligente",
            description: "Integração de IA generativa no WhatsApp para triagem e qualificação de leads 24/7 com linguagem natural.",
            items: ["Redução de 95% no tempo de resposta", "Treinamento de Agente customizado", "Integração direta com CRM", "Transbordo humano inteligente"],
            icon: <MessageSquare size={24} />,
            color: "from-green-400 to-accent"
      },
      {
            id: "03",
            tag: "Growth & Ads",
            title: "Estratégia de Aquisição Escalável",
            description: "Gestão de performance em Google Ads focada em ROI real, conectando anúncios a Landing Pages otimizadas.",
            items: ["Otimização de CPA (Custo por Aquisição)", "Escalabilidade de orçamento", "Análise de dados em Dashboards", "Testes A/B de alta conversão"],
            icon: <TrendingUp size={24} />,
            color: "from-orange-400 to-red-500"
      },
      {
            id: "04",
            tag: "Inovação",
            title: "Laboratório de IA Generativa",
            description: "Uso de Engenharia de Prompts avançada para criação acelerada de ativos digitais e automação de processos.",
            items: ["Criação de criativos em escala", "Automação de relatórios complexos", "Prompts de alta precisão", "Redução de horas operacionais"],
            icon: <BrainCircuit size={24} />,
            color: "from-purple to-pink-500"
      }
];

export default function Projects() {
      return (
            <section className="py-24 bg-[#0F172A]">
                  <div className="container mx-auto px-6">
                        <div className="flex flex-col gap-32">

                              <div className="text-left">
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Cases de Sucesso</h2>
                                    <div className="h-1 w-20 bg-accent rounded-full"></div>
                              </div>

                              {allProjects.map((project, index) => (
                                    <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                          {/* Alterna a ordem da imagem baseada no index (par/ímpar) */}
                                          <motion.div
                                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                className={`relative group ${index % 2 !== 0 ? 'lg:order-last' : ''}`}
                                          >
                                                <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000`}></div>
                                                <div className="relative bg-slate-900 rounded-2xl aspect-video overflow-hidden border border-slate-800 flex items-center justify-center text-slate-500">
                                                      [Print {project.title}]
                                                </div>
                                          </motion.div>

                                          <motion.div
                                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                          >
                                                <h3 className="text-accent font-mono text-sm mb-2">#{project.id} Case de {project.tag}</h3>
                                                <h4 className="text-3xl font-bold text-white mb-6">{project.title}</h4>

                                                <p className="text-slate-400 mb-6 leading-relaxed">{project.description}</p>

                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                                      {project.items.map((item, i) => (
                                                            <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                                                                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                                                                  <span>{item}</span>
                                                            </li>
                                                      ))}
                                                </ul>

                                                <button className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all border border-slate-700">
                                                      Ver Detalhes
                                                </button>
                                          </motion.div>
                                    </div>
                              ))}

                        </div>
                  </div>
            </section>
      );
}