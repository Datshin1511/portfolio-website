import { Mail, Github, Linkedin, ArrowDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const GMAIL = 'https://mail.google.com/mail/?view=cm&to=datshinr2002@gmail.com';
const FULL_NAME = 'Datshin Rajesh';
const TYPE_SPEED = 100;
const DELETE_SPEED = 60;
const PAUSE_AFTER_TYPE = 2500;
const PAUSE_AFTER_DELETE = 800;

export default function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting' | 'waiting'>('typing');
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const tick = () => {
      if (phase === 'typing') {
        if (displayed.length < FULL_NAME.length) {
          setDisplayed(FULL_NAME.slice(0, displayed.length + 1));
          timeout.current = setTimeout(tick, TYPE_SPEED);
        } else {
          setPhase('pausing');
          timeout.current = setTimeout(() => setPhase('deleting'), PAUSE_AFTER_TYPE);
        }
      } else if (phase === 'deleting') {
        if (displayed.length > 0) {
          setDisplayed(prev => prev.slice(0, -1));
          timeout.current = setTimeout(tick, DELETE_SPEED);
        } else {
          setPhase('waiting');
          timeout.current = setTimeout(() => setPhase('typing'), PAUSE_AFTER_DELETE);
        }
      }
    };

    timeout.current = setTimeout(tick, TYPE_SPEED);
    return () => { if (timeout.current) clearTimeout(timeout.current); };
  }, [displayed, phase]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center px-5 sm:px-10 lg:px-20 overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300">

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(42,42,48,0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(42,42,48,0.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

      {/* Radial glow */}
      <div className="absolute -left-20 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-4xl w-full pt-16">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-accent border border-accent/40 bg-accent/10 px-3 py-1.5 rounded-sm mb-7 opacity-0 animate-fadeUp">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for opportunities
        </div>

        {/* Typewriter name */}
        <h1 className="font-display font-black leading-none text-[clamp(3rem,9vw,6.5rem)] text-gray-900 dark:text-gray-50 mb-2 opacity-0 animate-fadeUp-1 flex items-baseline gap-[2px]">
          <span>{displayed}</span>
          <span
            className="inline-block w-[4px] rounded-sm bg-accent ml-1"
            style={{
              height: 'clamp(2.4rem, 7.2vw, 5.2rem)',
              animation: 'blink 1s step-end infinite',
            }}
          />
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-[clamp(13px,2vw,17px)] text-accent mb-5 tracking-wide opacity-0 animate-fadeUp-2">
          SDE-I @ Sciforn &nbsp;·&nbsp; IIT BHU &nbsp;·&nbsp; CGPA 9.45
        </p>

        {/* Description */}
        <p className="text-[clamp(15px,1.5vw,18px)] text-gray-600 dark:text-gray-400 max-w-[600px] leading-relaxed mb-10 opacity-0 animate-fadeUp-3">
          I build enterprise-grade financial systems, scalable platforms, and production-ready applications. Dual-degree engineer with a track record across fintech, defence, and government sectors.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16 opacity-0 animate-fadeUp-4">
          <a href={GMAIL} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 font-mono text-[13px] px-6 py-3 bg-accent text-dark-bg rounded font-semibold shadow-lg shadow-accent/20 hover:bg-accent/90 hover:shadow-accent/40 active:scale-95 transition-all duration-200">
            <Mail size={15} />
            Get in Touch
          </a>
          <a href="#experience"
            className="flex items-center gap-2 font-mono text-[13px] px-6 py-3 border-2 border-gray-300 dark:border-dark-border text-gray-700 dark:text-gray-300 bg-light-card dark:bg-dark-card rounded hover:border-accent hover:text-accent hover:bg-accent/5 dark:hover:bg-accent/10 active:scale-95 transition-all duration-200">
            View Work
            <ArrowDown size={13} />
          </a>
          <a href="https://www.linkedin.com/in/datshin-rajesh-iit-bhu/" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 border-2 border-gray-300 dark:border-dark-border text-gray-600 dark:text-gray-400 bg-light-card dark:bg-dark-card rounded hover:border-accent hover:text-accent hover:bg-accent/5 dark:hover:bg-accent/10 active:scale-95 transition-all duration-200"
            title="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href="https://www.github.com/Datshin1511" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 border-2 border-gray-300 dark:border-dark-border text-gray-600 dark:text-gray-400 bg-light-card dark:bg-dark-card rounded hover:border-accent hover:text-accent hover:bg-accent/5 dark:hover:bg-accent/10 active:scale-95 transition-all duration-200"
            title="GitHub">
            <Github size={16} />
          </a>
        </div>

        <div className="flex flex-wrap gap-10 opacity-0 animate-fadeUp-5">
          {[
            { value: '1M+',  label: 'Monthly Transactions' },
            { value: '3+',   label: 'Years Building' },
            { value: '9.45', label: 'CGPA / 10' },
            { value: '2nd',  label: 'Dept. GPA Rank' },
          ].map(s => (
            <div key={s.label}
              className="flex flex-col px-5 py-4 rounded border border-gray-200 dark:border-dark-border bg-light-card dark:bg-dark-card shadow-sm">
              <span className="font-display text-[28px] font-bold text-accent leading-none">{s.value}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-gray-500 dark:text-gray-500 mt-1.5">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-gray-400 dark:text-gray-600 opacity-0 animate-fadeUp-8">
        Scroll
        <div className="w-px h-10 bg-gradient-to-b from-gray-400 dark:from-gray-600 to-transparent animate-scrollBar origin-top" />
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>

    </section>
  );
}