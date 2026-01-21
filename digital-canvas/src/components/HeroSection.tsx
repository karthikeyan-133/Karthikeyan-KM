import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroCanvas from './HeroCanvas';

const techStack = [
  { name: 'MongoDB', color: 'from-green-500 to-green-400' },
  { name: 'Express', color: 'from-gray-400 to-gray-300' },
  { name: 'React', color: 'from-cyan-500 to-cyan-400' },
  { name: 'Node.js', color: 'from-green-600 to-green-500' },
];

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroCanvas />

      {/* Floating Decorative Elements (Reference Style) */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] opacity-20 md:opacity-40 hidden md:block select-none pointer-events-none"
      >
        <div className="w-16 h-16 border-2 border-primary rounded-full flex items-center justify-center">
          <div className="w-10 h-10 bg-primary/20 rounded-full" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[15%] opacity-20 md:opacity-40 hidden md:block select-none pointer-events-none"
      >
        <Star className="w-12 h-12 text-accent" />
      </motion.div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">

          {/* Circular Text Badge (Sticker Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute md:fixed top-24 right-5 md:top-32 md:right-32 z-20 hidden md:flex items-center justify-center"
          >
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="absolute w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <defs>
                  <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="11.5" fontWeight="bold" fill="currentColor" className="text-muted-foreground uppercase tracking-widest">
                  <textPath href="#circlePath" startOffset="0%">
                    • Open to Work • Open to Work •
                  </textPath>
                </text>
              </svg>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                <ArrowDown className="w-8 h-8 text-white -rotate-45" />
              </div>
            </div>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm border-primary/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-foreground font-medium tracking-wide uppercase text-xs">Available for hiring</span>
            </div>
          </motion.div>

          {/* Main Headline - Reference Style: MASSIVE & UPPERCASE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase"
          >
            <span className="block text-2xl sm:text-3xl md:text-4xl text-accent font-medium mb-6 tracking-normal normal-case font-mono">Hi, I'm Karthikeyan K M</span>
            <span className="text-foreground block">I Build </span>
            <span className="gradient-text block mt-2">Scalable</span>
            <span className="text-foreground block mt-2">Web Products</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Full-Stack MERN Developer based in India. <br className="hidden md:block" />
            Crafting <span className="text-foreground font-semibold">immersive digital experiences</span> with <span className="text-foreground font-semibold">code & design</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 pt-4"
          >
            <Button className="rounded-full px-8 h-14 text-lg font-bold bg-foreground text-background hover:bg-white/90 shadow-glow-sm" onClick={scrollToProjects}>
              Selected Works
            </Button>
            <Button variant="outline" className="rounded-full px-8 h-14 text-lg font-medium border-muted-foreground/30 hover:bg-muted/10" onClick={scrollToContact}>
              Let's Talk
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex items-center gap-6 pt-8"
          >
            <a
              href="https://github.com/karthikeyan-133"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-card hover:bg-primary/20 hover:scale-110 transition-all duration-300 group ring-1 ring-white/10"
            >
              <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/karthikeyan-k-m-/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-card hover:bg-accent/20 hover:scale-110 transition-all duration-300 group ring-1 ring-white/10"
            >
              <Linkedin className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
            </a>
            <a
              href="mailto:karthikeyankm.karthi@gmail.com"
              className="p-4 rounded-full glass-card hover:bg-primary/20 hover:scale-110 transition-all duration-300 group ring-1 ring-white/10"
            >
              <Mail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer mix-blend-difference"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs text-foreground/60 uppercase tracking-[0.2em] font-bold">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/0 via-foreground/50 to-foreground/0" />
        </motion.div>
      </div>
    </section>
  );
}
