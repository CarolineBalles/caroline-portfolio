import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton"; // Importe aqui

export const metadata: Metadata = {
      title: "Caroline Balles | Especialista em IA e Growth",
      description: "Estrategista de Growth e Automação. Ajudo empresas a escalarem através de Engenharia de Prompt e sistemas SaaS.",
};
      // title: "Caroline Balles | Portfólio",
      // description: "Especialista em IA e Automação",
      // keywords: ["IA Generativa", "Growth", "Automação", "Next.js", "Google Ads"],

export default function RootLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return (
            <html lang="pt-br">
                  <body suppressHydrationWarning className="relative">
                        {children}
                        <WhatsAppButton /> {/* O botão flutuante entra aqui */}
                  </body>
            </html>
      );
}