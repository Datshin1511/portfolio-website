import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const GMAIL = 'https://mail.google.com/mail/?view=cm&to=datshinr2002@gmail.com';
const RESUME_URL = '/resumes/datshin_resume.pdf';

export default function Footer() {
  return (
    <footer className="border-t border-light-border dark:border-dark-border px-5 sm:px-10 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-mono text-[11px] text-gray-400 tracking-wide">
        Datshin Rajesh — Chennai, India · Open to Remote
      </span>
      
      <div className="flex items-center gap-5">
        {/* Social Icons Mapping */}
        <div className="flex items-center gap-5">
          {[
            { icon: <Github size={15} />, href: 'https://www.github.com/Datshin1511' },
            { icon: <Linkedin size={15} />, href: 'https://www.linkedin.com/in/datshin-rajesh-iit-bhu/' },
            { icon: <Mail size={15} />, href: GMAIL },
          ].map((l, i) => (
            <a 
              key={i} 
              href={l.href} 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-400 hover:text-accent transition-colors duration-200"
            >
              {l.icon}
            </a>
          ))}
        </div>

        {/* Stylish Resume Button */}
        <a
          href={RESUME_URL}
          download="Datshin_Rajesh_Resume.pdf"
          className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/10 border border-accent/20 text-accent hover:bg-accent hover:text-white transition-all duration-300 text-[12px] font-medium"
        >
          <FileText size={14} />
          <span>Resume</span>
        </a>
      </div>
    </footer>
  );
}