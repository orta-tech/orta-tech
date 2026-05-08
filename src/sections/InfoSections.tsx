import { ScrollReveal } from "../components/ScrollReveal";
import { ShieldCheck, Zap, Layout, Smartphone } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Unica S.A. (Coopeplus)",
      role: "Desarrollador Full Stack",
      period: "2020 – Actualidad",
      description: "Implementación de flujos críticos, bots de WhatsApp, validaciones de identidad y mantenimiento de plataforma corporativa con .NET MVC y SQL Server."
    },
    {
      company: `Programas de Cómputo`,
      pagina: "http://programasdecomputo.com/",
      role: "Desarrollador Full Stack (Remoto)",
      period: "2020 – 2022",
      description: "Desarrollo de software a medida, análisis y mantenimiento de módulos de gestión para clientes externos de forma 100% remota."
    },
    {
      company: "Orta Tech",
      role: "Desarrollador Independiente",
      period: "Freelance",
      description: "Desarrollo de sistema de gestión integral para peluquerías y barberías, optimizando la administración de turnos y clientes."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Experiencia <span className="text-accent">Profesional</span></h2>
          <p className="text-muted text-lg max-w-2xl">
            Más de 6 años construyendo soluciones robustas para empresas y proyectos de alto impacto.
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1} className="relative pl-8 border-l-2 border-accent/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-white" />
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">{exp.period}</span>
              </div>
              <h4 className="text-xl font-medium text-muted mb-4">{exp.pagina ? <a href={exp.pagina} target="_blank">{exp.company}</a> : exp.company}</h4>
              <p className="text-muted leading-relaxed max-w-3xl">{exp.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["React / React Native", "TypeScript", "JavaScript (Avanzado)", "HTML5 / CSS3"],
      icon: Layout
    },
    {
      title: "Backend & Datos",
      skills: [".NET (C#, VB) / ASP.NET MVC", "Web API", "SQL Server", "Solidity (Blockchain)"],
      icon: ShieldCheck
    },
    {
      title: "Herramientas & Agilidad",
      skills: ["Git (Desarrollo Colaborativo)", "Scrum / Kanban", "Unity (Programación Junior)"],
      icon: Zap
    },
    {
      title: "Tecnologías Emergentes",
      skills: ["IA aplicada a la productividad", "Ciberseguridad", "Criptomonedas"],
      icon: Smartphone
    }
  ];

  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Habilidades Técnicas</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Un stack tecnológico moderno orientado a la escalabilidad y la eficiencia.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1} className="bg-white p-8 rounded-[2rem] shadow-sm border border-black/5 hover:shadow-xl transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center mb-6">
                <group.icon className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-6">{group.title}</h3>
              <ul className="space-y-3">
                {group.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-2 text-muted text-sm border-b border-black/5 pb-2">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
