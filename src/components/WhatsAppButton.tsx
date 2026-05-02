"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
      const phoneNumber = "5513999999999"; // Substitua pelo seu número real (DDI + DDD + Número)
      const message = encodeURIComponent("Olá Caroline, vi seu portfólio e gostaria de conversar sobre um projeto!");

      return (
            <motion.a
                  href={`https://wa.me/${phoneNumber}?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5, y: 100 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 group"
                  aria-label="Contato via WhatsApp"
            >
                  <div className="relative">
                        {/* Efeito de Ping/Onda para atrair atenção */}
                        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
                        <MessageCircle size={28} className="relative z-10" />
                  </div>

                  {/* Tooltip Lateral */}
                  <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs py-2 px-4 rounded-lg border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Vamos conversar?
                  </span>
            </motion.a>
      );
}