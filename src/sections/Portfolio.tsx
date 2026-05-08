import { ScrollReveal } from "../components/ScrollReveal";
import { CheckCircle2, Calendar, Users, Smartphone, Globe, Rocket, ShieldCheck, Zap } from "lucide-react";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden text-center lg:text-left">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="mb-24">
          <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-4 block">Proyectos Destacados</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Mis <span className="text-accent">Trabajos</span></h2>
          <p className="text-xl text-muted max-w-3xl mx-auto lg:mx-0 leading-relaxed">
            Una selección de sistemas que demuestran mi capacidad para resolver problemas complejos y conectar negocios con tecnología.
          </p>
        </ScrollReveal>

        <div className="space-y-32">
          {/* Project 1: Barber System (Existing - lead project) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Visual Showcase */}
            <div className="lg:col-span-7 space-y-8">
              <ScrollReveal direction="up" delay={0.2} className="relative group">
                <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-black/10 shadow-2xl bg-surface">
                  <img
                    src="/assets/images/imagen1.jpg"
                    alt="Barber System Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-6">
                <ScrollReveal direction="up" delay={0.4} className="aspect-square rounded-3xl overflow-hidden border border-black/10 shadow-lg">
                  <img
                    src="/assets/images/imagen4.jpg"
                    alt="Mobile Booking Interface"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.5} className="aspect-square rounded-3xl overflow-hidden border border-black/10 shadow-lg">
                  <img
                    src="/assets/images/imagen3.jpg"
                    alt="Admin Schedule View"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </ScrollReveal>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <ScrollReveal direction="right" delay={0.3} className="space-y-10">
                <div>
                  <span className="text-accent font-bold text-sm block mb-2 uppercase">Producto SaaS | Lead Project</span>
                  <h3 className="text-2xl font-bold mb-4">Sistema de Gestión de Turnos</h3>
                  <p className="text-muted leading-relaxed">
                    Sistema integral para barberías que optimiza la administración de turnos y clientes. Incluye automatización de WhatsApp, gestión de base de datos y panel administrativo intuitivo.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Características Clave</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: Calendar, title: "Reserva Online 24/7", desc: "Los clientes agendan sin llamadas ni intervención manual." },
                      { icon: Users, title: "Gestión de Clientes", desc: "Base de datos con historial de servicios y preferencias." },
                      { icon: Smartphone, title: "Panel Móvil", desc: "Agenda personal accesible desde cualquier dispositivo." }
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-surface transition-colors text-left">
                        <div className="mt-1 text-accent">
                          <feature.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">{feature.title}</h4>
                          <p className="text-muted text-xs">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-black/5">
                  <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                    <span className="text-sm text-muted font-medium">+500 turnos gestionados al mes</span>
                  </div>
                  <a
                    href="https://barbersistema.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-bold hover:underline"
                  >
                    Ver Demo del Sistema
                    <CheckCircle2 size={18} />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Project 2: PoloConecta */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-16 border-t border-black/5">
            {/* Visual Showcase */}
            <div className="lg:col-span-7 lg:order-2 space-y-8">
              <ScrollReveal direction="up" delay={0.2} className="relative group">
                <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-black/10 shadow-2xl bg-surface flex items-center justify-center p-8">
                  <div className="text-center group-hover:scale-105 transition-transform duration-700">
                    <Rocket className="w-24 h-24 text-accent mx-auto mb-6" />
                    <h4 className="text-2xl font-bold">PoloConecta</h4>
                    <p className="text-muted">Conectando grandes empresas con pymes</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
              </ScrollReveal>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-5 lg:order-1 lg:sticky lg:top-32">
              <ScrollReveal direction="left" delay={0.3} className="space-y-10">
                <div>
                  <span className="text-accent font-bold text-sm block mb-2 uppercase">Plataforma Web | B2B</span>
                  <h3 className="text-2xl font-bold mb-4">Polo Conecta</h3>
                  <p className="text-muted leading-relaxed">
                    Aplicación web diseñada para facilitar la conexión y colaboración entre grandes empresas y pequeñas/medianas empresas (SMEs). Un puente tecnológico para el crecimiento empresarial.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Enfoque Técnico</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: Globe, title: "Conectividad Empresarial", desc: "Interfaz robusta para el intercambio de necesidades y propuestas." },
                      { icon: ShieldCheck, title: "Seguridad y Gestión", desc: "Validación de perfiles y gestión de interacciones seguras." },
                      { icon: Zap, title: "Optimización B2B", desc: "Flujos de trabajo simplificados para acelerar acuerdos comerciales." }
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-surface transition-colors text-left">
                        <div className="mt-1 text-accent">
                          <feature.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">{feature.title}</h4>
                          <p className="text-muted text-xs">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-black/5 flex flex-col gap-4">
                  <a
                    href="https://github.com/orta-tech/PoloConecta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-bold hover:underline justify-center lg:justify-start"
                  >
                    Ver Repositorio GitHub
                    <Globe size={18} />
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
