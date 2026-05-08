import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden premium-gradient">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/3 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <ScrollReveal direction="up" delay={0.2}>
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 rounded-full">
            Full Stack Developer | 6+ Años de Experiencia
          </span>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 text-balance leading-[1.1]">
            Cesar Martin <br className="hidden md:block" />
            <span className="text-accent">de Orta</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.6}>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 text-balance leading-relaxed">
            Especialista en React y .NET. Construyo soluciones escalables y de alto rendimiento, modernizando procesos mediante tecnología e IA.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.8}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portfolio"
              className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 group"
            >
              Ver Proyectos
            </a>
            <a
              href="#cv"
              className="w-full sm:w-auto bg-white text-black border border-black/10 px-8 py-4 rounded-full text-lg font-bold hover:bg-surface transition-all flex items-center justify-center gap-2"
            >
              Sobre mí
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={1.2} className="mt-20">
          <div className="relative max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-black/5 bg-surface flex items-center justify-center">
              <img
                src="/assets/images/Logo_completo.png"
                alt="Orta Tech Logo Completo"
                className="w-full h-full object-contain p-8"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
