import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 300) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'py-4 bg-background/60 backdrop-blur-xl border-b border-white/5 shadow-sm'
          : 'py-6 md:py-8 bg-transparent'
          }`}
      >
        <nav className="container px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="group relative z-50"
          >
            <div className="text-xl font-black tracking-tighter mix-blend-difference">
              KN<span className="text-primary">.</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="group relative px-2 py-1"
              >
                <span className={`relative z-10 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${activeSection === link.href.replace('#', '')
                  ? 'text-primary'
                  : 'text-muted-foreground group-hover:text-foreground'
                  }`}>
                  {link.name}
                </span>
                {activeSection === link.href.replace('#', '') && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA & Resume */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="/resume"
              className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              Resume
            </a>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full px-6 font-bold text-xs uppercase tracking-wider border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              onClick={() => scrollToSection('#contact')}
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 -mr-2"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-foreground transition-transform duration-300 origin-right ${isMobileMenuOpen ? '-rotate-45 -translate-y-[1px]' : ''}`} />
              <span className={`w-full h-0.5 bg-foreground transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-foreground transition-transform duration-300 origin-right ${isMobileMenuOpen ? 'rotate-45 translate-y-[1px]' : ''}`} />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-4xl font-black uppercase tracking-tight ${activeSection === link.href.replace('#', '')
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'
                    : 'text-foreground/80'
                    }`}
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8 flex flex-col items-center gap-6"
              >
                <a
                  href="/resume"
                  className="text-sm font-bold uppercase tracking-widest text-muted-foreground"
                >
                  View Resume
                </a>
                <Button
                  size="lg"
                  className="rounded-full px-8 font-bold text-sm uppercase tracking-wider"
                  onClick={() => scrollToSection('#contact')}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
