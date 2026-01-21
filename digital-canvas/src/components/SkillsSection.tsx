import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2, Database, Server, Cloud, Palette, Terminal,
  Layers, Cpu, Globe, Lock, Workflow, Smartphone
} from 'lucide-react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiThreedotjs,
  SiNodedotjs, SiExpress, SiPython, SiFastapi, SiGraphql, SiPostman,
  SiMongodb, SiPostgresql, SiRedis, SiMysql, SiFirebase, SiSupabase,
  SiDocker, SiAmazon, SiVercel, SiGithubactions, SiNginx, SiLinux,
  SiFigma, SiAdobexd, SiStorybook,
  SiGit, SiJest, SiCypress, SiWebpack
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { MdDevices, MdAnimation, MdAccessibility } from 'react-icons/md';

const skillCategories = [
  {
    name: 'Frontend',
    color: 'primary',
    icon: Code2,
    skills: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' }, // Next.js is black/white
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
      { name: 'Three.js', icon: SiThreedotjs, color: '#000000' },
    ],
  },
  {
    name: 'Backend',
    color: 'accent',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'REST APIs', icon: SiPostman, color: '#FF6C37' }, // Using Postman icon as proxy for API dev
    ],
  },
  {
    name: 'Database',
    color: 'primary',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
    ],
  },
  {
    name: 'DevOps',
    color: 'accent',
    icon: Cloud,
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Nginx', icon: SiNginx, color: '#009639' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
    ],
  },
  {
    name: 'UI/UX',
    color: 'primary',
    icon: Palette,
    skills: [
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Adobe XD', icon: SiAdobexd, color: '#FF61F6' },
      { name: 'Responsive', icon: MdDevices, color: '#555555' },
      { name: 'Accessibility', icon: MdAccessibility, color: '#0066CC' },
      { name: 'Motion', icon: MdAnimation, color: '#FF4081' },
      { name: 'Design Systems', icon: SiStorybook, color: '#FF4785' },
    ],
  },
  {
    name: 'Tools',
    color: 'accent',
    icon: Terminal,
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Jest', icon: SiJest, color: '#C21325' },
      { name: 'Cypress', icon: SiCypress, color: '#17202C' },
      { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9' },
    ],
  },
];

const floatingIcons = [
  { Icon: Layers, delay: 0, duration: 8 },
  { Icon: Cpu, delay: 1, duration: 10 },
  { Icon: Globe, delay: 2, duration: 7 },
  { Icon: Lock, delay: 3, duration: 9 },
  { Icon: Workflow, delay: 4, duration: 11 },
  { Icon: Smartphone, delay: 5, duration: 8 },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map(({ Icon, delay, duration }, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${15 + (index * 15)}%`,
              top: `${20 + (index % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-12 h-12 text-primary/10" />
          </motion.div>
        ))}
      </div>

      <div className="container relative px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 rounded-full border-2 border-accent text-accent font-bold uppercase tracking-widest text-sm mb-6">
            Toolkit
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase text-foreground leading-none">
            Tech <span className="text-stroke-primary text-transparent ml-2" style={{ WebkitTextStroke: '2px hsl(var(--primary))' }}>Stack</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group glass-card p-6 hover-glow overflow-visible"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl transition-colors duration-300 ${category.color === 'primary'
                  ? 'bg-primary/10 border border-primary/20 group-hover:bg-primary/20'
                  : 'bg-accent/10 border border-accent/20 group-hover:bg-accent/20'
                  }`}>
                  <category.icon className={`w-6 h-6 transition-colors duration-300 ${category.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                </div>
                <h3 className="text-xl font-bold tracking-tight">{category.name}</h3>
              </div>

              {/* Skills Grid - Modern Icon Layout */}
              <div className="grid grid-cols-3 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.2 + (index * 0.1) + (skillIndex * 0.05)
                    }}
                    className="relative flex flex-col items-center justify-center p-3 rounded-lg bg-background/50 border border-white/5 hover:border-white/20 transition-all duration-300 group/skill"
                    whileHover={{
                      y: -5,
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div className="mb-2 relative">
                      <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: skill.color }}
                      />
                      <skill.icon
                        className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover/skill:scale-110"
                        style={{ color: skill.color === '#000000' && category.color === 'primary' ? 'hsl(var(--foreground))' : skill.color === '#000000' ? 'hsl(var(--foreground))' : skill.color }}
                      />
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider group-hover/skill:text-foreground transition-colors text-center w-full truncate">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Gradient Line */}
              <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ${category.color === 'primary'
                ? 'bg-gradient-to-r from-primary/0 via-primary to-primary/0'
                : 'bg-gradient-to-r from-accent/0 via-accent to-accent/0'
                }`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 flex justify-center opacity-30"
        >
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
