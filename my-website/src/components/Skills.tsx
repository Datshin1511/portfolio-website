import {
  SiCplusplus, SiPython, SiJavascript, SiKotlin,
  SiReact, SiNodedotjs, SiDjango, SiDotnet, SiAndroid,
  SiDocker, SiFirebase, SiHeroku,
  SiGit, SiGitlab, SiPostman,
  SiMongodb, SiMysql
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Database, Globe, Server } from 'lucide-react';

const groups = [
  {
    label: 'Languages',
    items: [
      { name: 'C++',        icon: <SiCplusplus /> },
      { name: 'Python',     icon: <SiPython /> },
      { name: 'Java',       icon: <FaJava /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Kotlin',     icon: <SiKotlin /> },
      { name: 'SQL',        icon: <Database size={15} /> },
    ],
  },
  {
    label: 'Frameworks',
    items: [
      { name: 'ReactJS', icon: <SiReact /> },
      { name: 'NodeJS',  icon: <SiNodedotjs /> },
      { name: 'Django',  icon: <SiDjango /> },
      { name: '.NET',    icon: <SiDotnet /> },
      { name: 'Android', icon: <SiAndroid /> },
    ],
  },
  {
    label: 'Technologies',
    items: [
      { name: 'Docker',   icon: <SiDocker /> },
      { name: 'AWS',      icon: <Globe size={15} /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Heroku',   icon: <SiHeroku /> },
    ],
  },
  {
    label: 'DevOps',
    items: [
      { name: 'Git',     icon: <SiGit /> },
      { name: 'GitLab',  icon: <SiGitlab /> },
      { name: 'Postman', icon: <SiPostman /> },
    ],
  },
  {
    label: 'Databases',
    items: [
      { name: 'MongoDB',       icon: <SiMongodb /> },
      { name: 'MySQL',         icon: <SiMysql /> },
      { name: 'MS SQL Server', icon: <Server size={15} /> },
      { name: 'Firebase DB',   icon: <SiFirebase /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-20 py-20 lg:py-28">

        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-3">
          // tools of the trade
        </p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-gray-900 dark:text-gray-50 leading-tight mb-12">
          Skills
        </h2>

        <div className="flex flex-col divide-y divide-light-border dark:divide-dark-border">
          {groups.map((group) => (
            <div key={group.label}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-400 dark:text-gray-600 w-full sm:w-[140px] shrink-0">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-3">
                {group.items.map(item => (
                  <div key={item.name}
                    className="flex items-center gap-2 font-mono text-[12px] px-3 py-2 bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded text-gray-600 dark:text-gray-300 hover:border-accent hover:text-accent transition-all duration-200 cursor-default group">
                    <span className="text-accent text-[15px] group-hover:scale-110 transition-transform duration-200">
                      {item.icon}
                    </span>
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}