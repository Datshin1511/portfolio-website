import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Smart City Dashboard',
    subtitle: 'Google Summer of Code 2023 · Liquid Galaxy',
    period: 'Jan 2023 – Apr 2023',
    description: 'Mobile dashboard for a smart city initiative, integrating 10+ real-time APIs with data visualization on Google Earth via KML. Built an emergency SoS module delivering instant alerts to 10,000+ users.',
    highlights: ['98% reliability', '15.83% latency reduction', '10+ API integrations'],
    tags: ['Mobile', 'Google Earth', 'KML', 'Real-time APIs', 'GSoC - Pre contributor'],
    github: 'https://www.github.com/Datshin1511',
  },
  {
    title: 'Multilingual note taking agent',
    subtitle: 'Holon AI · Hackathon',
    period: 'Apr 2025 – May 2025',
    description: 'AI-powered note taking agent, that uses various available open-source models to transcribe audio to text in multiple global languages. Light-weight, client-side transcriber focused on privacy.',
    highlights: ['92% reliability', '15+ global languages', '5+ API integrations'],
    tags: ['Web', 'Whisper', 'React', 'FastAPI', 'Holon AI'],
    github: 'https://www.github.com/Datshin1511',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-light-bg2 dark:bg-dark-bg2 border-y border-light-border dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-20 py-20 lg:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-3">what i've shipped ?</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 dark:text-gray-50 leading-tight mb-12">
          Projects
        </h2>

        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <div key={i}
              className="relative bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded overflow-hidden group hover:border-accent/50 transition-all duration-300">
              <div className="absolute left-0 top-0 w-[3px] h-full bg-accent" />

              <div className="pl-6 sm:pl-8 p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display text-[24px] font-bold text-gray-900 dark:text-gray-50 mb-1">{p.title}</h3>
                    <p className="font-mono text-[11px] text-accent tracking-wide">{p.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-mono text-[11px] text-gray-400">{p.period}</span>
                    <a href={p.github} target="_blank" rel="noreferrer"
                      className="flex items-center gap-1.5 font-mono text-[11px] text-gray-400 hover:text-accent border border-light-border dark:border-dark-border hover:border-accent px-3 py-1.5 rounded transition-all">
                      <Github size={12} /> Code
                    </a>
                  </div>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed mb-5 max-w-2xl">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.highlights.map(h => (
                    <span key={h} className="font-mono text-[11px] px-3 py-1 bg-accent/10 border border-accent/25 text-accent rounded-sm">{h}</span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="font-mono text-[11px] px-3 py-1 border border-light-border dark:border-dark-border text-gray-400 rounded-sm">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="font-mono text-[12px] text-gray-400 mt-8 text-center">
          More on{' '}
          <a href="https://www.github.com/Datshin1511" target="_blank" rel="noopener noreferrer"
            className="text-accent border-b border-accent/30 hover:border-accent transition-colors">
            GitHub →
          </a>
        </p>
      </div>      
    </section>
  );
}