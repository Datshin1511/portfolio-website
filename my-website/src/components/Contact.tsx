import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const GMAIL = 'https://mail.google.com/mail/?view=cm&to=datshinr2002@gmail.com';

export default function Contact() {
  return (
    <section id="contact" className="bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-20 py-20 lg:py-28">
        <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-3">// let's talk</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 dark:text-gray-50 leading-tight mb-4">
          Open to the<br />
          <span className="text-accent">right opportunity.</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-10 text-[15px]">
          Whether it's a senior engineering role, a high-impact startup, or an interesting problem — I read every message.
        </p>

        {/* Primary CTA — opens Gmail compose */}
        <a href={GMAIL} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2.5 font-mono text-[13px] px-8 py-3.5 bg-accent text-dark-bg rounded font-medium hover:opacity-85 transition-opacity mb-10">
          <Mail size={15} />
          datshinr2002@gmail.com
        </a>

        {/* Secondary links */}
        <div className="flex justify-center flex-wrap gap-6">
          {[
            { label: 'LinkedIn', icon: <Linkedin size={15} />, href: 'https://www.linkedin.com/in/datshin-rajesh-iit-bhu/' },
            { label: 'GitHub', icon: <Github size={15} />, href: 'https://www.github.com/Datshin1511' },
            { label: '+91 80729 09869', icon: <Phone size={15} />, href: 'tel:+918072909869' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 font-mono text-[12px] text-gray-400 hover:text-accent transition-colors tracking-wide">
              <span className="text-accent">{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}