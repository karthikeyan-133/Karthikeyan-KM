import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Code2, Rocket, Zap, Award, Calendar, Briefcase } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: 50, suffix: '+', icon: Rocket },
  { label: 'Years Experience', value: 5, suffix: '+', icon: Calendar },
  { label: 'SaaS Products', value: 12, suffix: '', icon: Briefcase },
];

const timeline = [
  {
    year: '2024',
    title: 'Senior Full-Stack Developer',
    description: 'Leading development of enterprise SaaS platforms',
    current: true,
  },
  {
    year: '2022',
    title: 'Full-Stack Developer',
    description: 'Built scalable web applications for startups',
    current: false,
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    description: 'Started career with React & modern JavaScript',
    current: false,
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const countRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(countRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && countRef.current) {
      gsap.fromTo(
        countRef.current,
        { innerText: 0 },
        {
          innerText: value,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            if (countRef.current) {
              countRef.current.innerText = Math.floor(Number(countRef.current.innerText || 0)).toString();
            }
          }
        }
      );
    }
  }, [inView, value]);

  return (
    <span>
      <span ref={countRef}>0</span>{suffix}
    </span>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-bold tracking-widest uppercase text-xs">Who I Am</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            <span className="block text-foreground">Crafting</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">Digital Excellence</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mt-8 max-w-3xl mx-auto font-light leading-relaxed">
            Passionate about building products that make a difference.
            I combine technical expertise with creative problem-solving.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Column - Philosophy & Stats */}
          <div className="space-y-16">
            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-3xl rotate-3 transition-transform group-hover:rotate-6" />
              <div className="relative glass-card p-10 rounded-3xl border-primary/20 bg-card/80 backdrop-blur-xl">
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                    <Code2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-4xl font-bold uppercase tracking-tight">Philosophy</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  I believe in writing <span className="text-foreground border-b-2 border-accent">clean, maintainable code</span> that stands the test of time.
                  Every project is an opportunity to push boundaries and create something
                  extraordinary.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  {['Clean Code', 'Performance', 'Accessibility', 'UX-First'].map((item) => (
                    <span key={item} className="px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent font-bold uppercase text-xs tracking-wider">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border/50 text-center group hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-foreground mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-1 bg-accent rounded-full" />
              <h3 className="text-3xl font-bold uppercase tracking-tight">Experience</h3>
            </div>

            <div className="relative space-y-12 pl-8 border-l-4 border-muted/20">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  className="relative"
                >
                  {/* Timeline Marker */}
                  <div className={`absolute -left-[41px] w-6 h-6 rounded-full border-4 border-background ${item.current ? 'bg-accent shadow-[0_0_20px_hsl(var(--accent))]' : 'bg-muted-foreground'
                    }`} />

                  <div className="group">
                    <span className="text-6xl font-black text-foreground/5 select-none absolute -top-10 -left-6 -z-10 group-hover:text-foreground/10 transition-colors">
                      {item.year}
                    </span>
                    <div className={`p-8 rounded-3xl border transition-all duration-300 ${item.current
                        ? 'bg-gradient-to-br from-card to-card/50 border-accent/20 hover:border-accent/40'
                        : 'bg-transparent border-transparent hover:bg-card/30 hover:border-border'
                      }`}>
                      <div className="flex items-baseline justify-between mb-2">
                        <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                        <span className="font-mono text-sm text-muted-foreground">{item.year}</span>
                      </div>
                      <p className="text-lg text-muted-foreground font-medium">{item.description}</p>
                      {item.current && (
                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                          </span>
                          Current Position
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
