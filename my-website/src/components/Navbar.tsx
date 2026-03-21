import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Mail } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact'];
const GMAIL = 'https://mail.google.com/mail/?view=cm&to=datshinr2002@gmail.com';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-5 sm:px-10 lg:px-20 transition-all duration-300
      ${scrolled
        ? 'bg-light-bg/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-light-border dark:border-dark-border'
        : 'bg-transparent border-b border-transparent'}`}>

      <a href="#hero" className="font-mono text-[13px] text-accent tracking-widest hover:opacity-80 transition-opacity">
        DR<span className="text-gray-500 dark:text-gray-600">_PORTFOLIO</span>
      </a>

      <ul className="hidden md:flex items-center gap-8">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}
              className="font-mono text-[11px] tracking-widest uppercase text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent transition-colors duration-200">
              {l}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <button onClick={toggleTheme}
          className="w-9 h-9 flex items-center justify-center rounded border border-light-border dark:border-dark-border text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent hover:border-accent transition-all duration-200">
          {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        <a href={GMAIL} target="_blank" rel="noreferrer"
          className="hidden md:flex items-center gap-2 font-mono text-[11px] tracking-widest px-4 py-2 border border-accent text-accent rounded hover:bg-accent hover:text-dark-bg transition-all duration-200">
          <Mail size={13} />
          Hire Me
        </a>

        <button onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-400 hover:text-accent transition-colors">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-light-bg2 dark:bg-dark-bg2 border-b border-light-border dark:border-dark-border px-5 py-6 flex flex-col gap-5 md:hidden">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[12px] uppercase tracking-widest text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
              {l}
            </a>
          ))}
          <a href={GMAIL} target="_blank" rel="noreferrer"
            className="flex items-center gap-2 font-mono text-[12px] text-accent border border-accent rounded px-4 py-2 w-fit hover:bg-accent hover:text-dark-bg transition-all">
            <Mail size={13} /> Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}