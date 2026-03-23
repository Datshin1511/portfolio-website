import { Trophy, Users } from 'lucide-react';

const achievements = [
  { rank: 'Top 3.4%', title: 'CDSE (I) 2025 — UPSC', detail: 'Qualified among 8,516 out of 250,000+ applicants' },
  { rank: 'AIR 4439', title: 'NDA/NA (I) 2019 — UPSC', detail: 'All India Rank in national defence entrance exam' },
  { rank: 'Rank 1340', title: 'TNEA 2020', detail: 'Tamil Nadu Engineering Admission state rank' },
  { rank: 'Dept. 2nd', title: 'IIT BHU Academic', detail: 'Graduated CGPA 9.45/10, ranked 2nd in department' },
];

const leadership = [
  {
    org: 'Society of Automotive Engineers — IIT BHU',
    role: 'Core Team',
    detail: 'Led 3+ events annually; increased participation 30% through targeted marketing and logistical management.',
  },
  {
    org: 'Student Alumni Interaction Cell — IIT BHU',
    role: 'Tech Team',
    detail: 'Managed official repo and web page connecting 10,000+ students with alumni; improved engagement via UX enhancements and analytics.',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-light-bg2 dark:bg-dark-bg2 border-y border-light-border dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-20 py-20 lg:py-28">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-3">recognition & leadership</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 dark:text-gray-50 leading-tight mb-12">
          Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {achievements.map((a, i) => (
            <div key={i}
              className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded p-6 hover:border-accent/50 transition-all duration-300 group cursor-default">
              <Trophy size={16} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
              <div className="font-display text-[28px] font-bold text-accent mb-2">{a.rank}</div>
              <div className="text-gray-800 dark:text-gray-200 text-[14px] font-medium mb-2 leading-tight">{a.title}</div>
              <div className="font-mono text-[11px] text-gray-400">{a.detail}</div>
            </div>
          ))}
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-6">leadership</p>
        <div className="flex flex-col divide-y divide-light-border dark:divide-dark-border">
          {leadership.map((l, i) => (
            <div key={i} className="flex flex-col sm:grid sm:grid-cols-[220px_1fr] gap-3 sm:gap-8 py-7">
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-accent tracking-wide mb-1">
                  <Users size={12} /> {l.role}
                </div>
                <div className="font-mono text-[11px] text-gray-400">{l.org}</div>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed">{l.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}