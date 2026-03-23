import { Github, Linkedin, Mail } from 'lucide-react';

const GMAIL = 'https://mail.google.com/mail/?view=cm&to=datshinr2002@gmail.com';

export default function Footer() {
  return (
    <footer className="border-t border-light-border dark:border-dark-border px-5 sm:px-10 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-mono text-[11px] text-gray-400 tracking-wide">
        Datshin Rajesh — Chennai, India · Open to Remote
      </span>
      <div className="flex items-center gap-5">
        {[
          { icon: <Github size={15} />, href: 'https://www.github.com/Datshin1511' },
          { icon: <Linkedin size={15} />, href: 'https://www.linkedin.com/in/datshin-rajesh-iit-bhu/' },
          { icon: <Mail size={15} />, href: GMAIL },
        ].map((l, i) => (
          <a key={i} href={l.href} target="_blank" rel="noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-200">
            {l.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}