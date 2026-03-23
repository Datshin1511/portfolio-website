import { MapPin, Mail, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  const details = [
    { icon: <Briefcase size={13} />, label: 'Current Role', value: 'SDE-I @ Sciforn, Pune' },
    { icon: <GraduationCap size={13} />, label: 'Education', value: 'IIT BHU — B.Tech + Associate Degree' },
    { icon: <GraduationCap size={13} />, label: 'CGPA', value: '9.45 / 10 · 2nd in Department' },
    { icon: <Briefcase size={13} />, label: 'Domains', value: 'Fintech · Defence · Government · Open Source' },
    { icon: <MapPin size={13} />, label: 'Location', value: 'Chennai, India' },
    { icon: <Mail size={13} />, label: 'Email', value: 'datshinr2002@gmail.com' },
  ];

  return (
    <section id="about" className="bg-light-bg2 dark:bg-dark-bg2 border-y border-light-border dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-20 py-20 lg:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-3">who am I ?</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 dark:text-gray-50 leading-tight mb-6">
              Engineer by degree.<br />
              <span className="text-accent">Builder by instinct.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4 text-[15px]">
              I'm Datshin R — a dual-degree graduate from IIT BHU with a B.Tech in Biochemical Engineering & Biotechnology and an associate degree in Mathematics & Computing. I write production systems that handle real scale: financial platforms processing over a million transactions monthly, applications deployed for government events serving 10,000+ users.
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-[15px]">
              Currently at Sciforn in Pune as SDE-I, I design and own fintech modules — supply chain finance, deposit products, IFRS staging, regulatory workflows, and balance sheet generation — for global banking clients. I've stepped into interim team lead roles and work directly with international stakeholders.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-light-border dark:divide-dark-border">
            {details.map(item => (
              <div key={item.label} className="grid grid-cols-[140px_1fr] gap-4 py-4 items-center">
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-gray-400 dark:text-gray-600">
                  <span className="text-accent">{item.icon}</span>
                  {item.label}
                </span>
                <span className="text-gray-700 dark:text-gray-200 text-[14px]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}