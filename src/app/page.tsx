import Hero from "../components/Hero";
import Features from "../components/Features";
import Projects from "../components/Projects";
import TechStack from "../components/TechStack"; // Importe aqui
import Footer from "../components/Footer";       // Importe aqui

export default function Home() {
      return (
            <main className="bg-[#0F172A]">
                  <Hero />
                  <Features />
                  <Projects />
                  <TechStack />
                  <Footer />
            </main>
      );
}