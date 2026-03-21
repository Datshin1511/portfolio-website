import { Briefcase } from 'lucide-react';

const jobs = [
  {
    role: 'Software Development Engineer - I',
    company: 'Sciforn',
    location: 'Pune, India',
    period: 'Aug 2025 – Present',
    tag: 'Full-time',
    bullets: [
      'Built and maintained enterprise financial platform modules processing 1M+ monthly transactions with high uptime, modelling complex lender–borrower cashflows, deal operations, and regulatory workflows.',
      'Delivered scalable supply chain finance and deposit products, embedding IRR, RWA, IFRS staging, provisioning logic, journals, and balance sheet generation for global banking clients.',
      'Partnered with international banking stakeholders to design compliant, multilingual financial solutions; served as interim team lead overseeing architecture decisions and high-availability deployments.',
    ],
  },
  {
    role: 'Software Development Engineer - Intern',
    company: 'Sciforn',
    location: 'Pune, India',
    period: 'May 2024 – Jul 2024',
    tag: 'Internship',
    bullets: [
      'Led modernization of a Digital IP system managing 1,000+ client profiles, improving scalability with role-based access control and secure authentication.',
      'Designed optimized database schemas for 10,000+ records, reducing query retrieval time by 25%.',
      'Built analytical dashboards tracking 3,000+ records; implemented CI/CD pipelines to automate builds and streamline deployments.',
    ],
  },
  {
    role: 'Application Developer',
    company: 'Ministry of Defence, Govt. of India',
    location: 'New Delhi, India',
    period: 'Dec 2022 – Feb 2023',
    tag: 'Contract',
    bullets: [
      'Developed a production-grade application for Aero India 2023 serving 10,000+ attendees, with robust API integrations and optimized UI architecture.',
      'Implemented secure auth and rate-limiting, reducing brute-force and OTP abuse by 30%; integrated real-time notification services via RESTful APIs.',
      'Coordinated a team of 4 developers, delivering ahead of schedule with standard uptime.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-20 py-20 lg:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-3">// where i've worked</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 dark:text-gray-50 leading-tight mb-12">
          Experience
        </h2>

        <div className="flex flex-col">
          {jobs.map((job, i) => (
            <div key={i}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-10 py-10 border-b border-light-border dark:border-dark-border transition-colors hover:bg-light-bg2/40 dark:hover:bg-dark-bg2/40 -mx-4 px-4 rounded">

              {/* Left */}
              <div className="flex flex-row md:flex-col gap-3 md:gap-2 items-start">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-gray-400 dark:text-gray-600">{job.period}</span>
                <span className="font-mono text-[10px] text-accent border border-accent/30 bg-accent/10 px-2 py-1 rounded-sm tracking-wide">{job.tag}</span>
              </div>

              {/* Right */}
              <div>
                <div className="flex items-start gap-3 mb-1">
                  <Briefcase size={15} className="text-accent mt-1 shrink-0" />
                  <h3 className="font-display text-[22px] font-bold text-gray-900 dark:text-gray-50">{job.role}</h3>
                </div>
                <p className="font-mono text-[12px] text-accent mb-5 tracking-wide pl-6">{job.company} · {job.location}</p>
                <ul className="flex flex-col gap-3 pl-6">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed">
                      <span className="text-accent shrink-0 mt-2 text-[7px]">◆</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>    
      </div>
    </section>
  );
}