import React from "react";
import { ScrollReveal } from "../components/ScrollReveal";
import { Zap, MessageSquare, Layout, ShieldCheck, Smartphone } from "lucide-react";

export function WhyCesar() {
  const points = [
    {
      icon: Layout,
      title: "Soluciones de Alto Rendimiento",
      desc: "Implementación de arquitecturas escalables y seguras utilizando las mejores prácticas de la industria."
    },
    {
      icon: ShieldCheck,
      title: "Modernización con IA",
      desc: "Enfoque en la eficiencia mediante el uso de Inteligencia Artificial para potenciar la productividad y los sistemas."
    },
    {
      icon: Smartphone,
      title: "Trayectoria Versátil",
      desc: "Desde consultoría .NET hasta desarrollo de videojuegos en Unity y tecnologías descentralizadas (Blockchain)."
    },
    {
      icon: Zap,
      title: "Resolución de Problemas",
      desc: "Experto en abordar desafíos técnicos complejos desde múltiples perspectivas para entregar valor real."
    }
  ];

  return (
    <section id="why-me" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Por qué trabajar <span className="text-accent">conmigo</span></h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Combinando más de 6 años de experiencia con tecnologías emergentes para construir el futuro de tu negocio.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {points.map((point, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1} className="group">
              <div className="mb-6 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                <point.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{point.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section id="contact" className="py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal direction="up">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            ¿Listo para llevar tu proyecto al <span className="text-accent">siguiente nivel?</span>
          </h2>
          <p className="text-xl text-muted mb-12 text-balance leading-relaxed">
            Ya sea que necesites una consultoría técnica o el desarrollo integral de una plataforma, estoy aquí para ayudarte a construir el futuro de tu negocio. Contactame ahora.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => window.open("https://wa.me/5492914352030", "_blank")}
              className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform"
            >
              🚀 Hablar por WhatsApp
            </button>
            <a 
              href="mailto:martindeorta@gmail.com"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-lg font-bold hover:text-accent transition-colors underline"
            >
              <MessageSquare size={24} />
              Enviar un correo
            </a>
          </div>
        </ScrollReveal>
      </div>
      
      {/* Decorative background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-black/5 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Cesar Martin de Orta</h3>
            <p className="text-muted text-sm">Full Stack Developer</p>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted hover:text-black transition-colors">Inicio</a>
            <a href="#experience" className="text-sm text-muted hover:text-black transition-colors">Experiencia</a>
            <a href="#skills" className="text-sm text-muted hover:text-black transition-colors">Habilidades</a>
            <a href="#portfolio" className="text-sm text-muted hover:text-black transition-colors">Proyectos</a>
            <a href="#contact" className="text-sm text-muted hover:text-black transition-colors">Contacto</a>
          </div>
          
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} Cesar Martin de Orta. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
