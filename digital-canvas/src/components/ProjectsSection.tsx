import { useRef, useState, forwardRef } from 'react';
import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Play, X, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ProjectCategory = 'all' | 'saas' | 'admin' | 'pos' | 'ai' | 'education' | 'business';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: ProjectCategory[];
  image: string;
  videoUrl?: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Chicken Center Management',
    description: 'Comprehensive dashboard for managing poultry business operations.',
    longDescription: 'A full-stack solution for "Kichus Chicken Premium Center" featuring real-time stock tracking for live hens, daily sales monitoring, cash collection tracking, and credit management for customers. Includes an intuitive dashboard for quick business insights.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    category: ['saas', 'business', 'admin'],
    image: '/images/chicken-center-dashboard.png',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '2',
    title: 'Van Sales Management',
    description: 'Mobile POS and inventory system for van-based distribution.',
    longDescription: 'A widespread distribution management application "TPOZ" enabling van sales representatives to manage inventory, generate invoices on-the-go, handle walking customers, and process split payments. Features stock alerts and seamless LPO integration.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Redux', 'PWA'],
    category: ['pos', 'saas', 'business'],
    image: '/images/van-sales-dashboard.png',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '3',
    title: 'Eye2Eye Hospital Management',
    description: 'Specialized ERP for optical businesses and eye clinics.',
    longDescription: 'A complete optical business management solution "Eye2Eye" featuring prescription management, sales & billing, customer tracking, and service repairs. Includes a dark-themed dashboard for tracking revenue, prescriptions, and daily invoices.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Framer Motion'],
    category: ['business', 'saas', 'admin'],
    image: '/images/eye-hospital-dashboard.png',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: '4',
    title: 'ResortSync Hotel Management',
    description: 'Visual reservation and inventory management system for hotels.',
    longDescription: 'A comprehensive hotel management dashboard "ResortSync" focusing on visual room availability, reservations, and housekeeping status. Features a drag-and-drop calendar for booking management, real-time occupancy tracking, and revenue analytics.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Redux Toolkit', 'Calendar API'],
    category: ['business', 'saas', 'admin'],
    image: '/images/resort-management-dashboard.png',
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: '5',
    title: 'People Hub HR Management',
    description: 'Complete HR and payroll solution for corporate compliance.',
    longDescription: 'A robust HR management dashboard "People Hub" handling employee records, attendance tracking, leave management, and automated payroll processing (WPS). Includes modules for document expiry alerts (Visa/ID), company asset tracking, and performance reviews.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Mantine UI'],
    category: ['admin', 'saas', 'business'],
    image: '/images/hr-management-dashboard.png',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '6',
    title: 'Tally Ai Sync',
    description: 'AI-powered purchase entry and Tally synchronization tool.',
    longDescription: 'An intelligent purchase management system "Tally Ai" that automates data entry into Tally. Features include a "Chat" mode to create invoices via text, standard Item/Accounting invoice forms, and real-time synchronization with Tally ERP. simplifying accounting workflows.',
    techStack: ['React', 'Node.js', 'Tally TDL', 'OpenAI', 'SQL'],
    category: ['ai', 'saas', 'business'],
    image: '/images/tally-sync-dashboard.png',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },

  {
    id: '7',
    title: 'Serial Data Picker Automation',
    description: 'Automated extraction of details from serial numbers with Excel reporting.',
    longDescription: 'A high-speed data automation tool that scrapes and compiles detailed product specifications based on serial number inputs. Automatically generates formatted Excel reports, reducing manual data entry time by 95%.',
    techStack: ['Python', 'Selenium', 'Pandas', 'Excel API'],
    category: ['business', 'saas'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '8',
    title: 'Social Media Auto-Poster',
    description: 'Automation tool for scheduling and posting content across platforms.',
    longDescription: 'An automated marketing tool designed to schedule and publish posts across multiple social media platforms simultaneously. Integrates with LinkedIn and Instagram APIs for seamless content distribution and analytics tracking.',
    techStack: ['Node.js', 'LinkedIn API', 'Instagram Graph API', 'Cron Jobs'],
    category: ['saas', 'ai'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '9',
    title: 'Business Quotation Generator',
    description: 'Streamlined proposal creation and executive tracking system.',
    longDescription: 'A professional quotation management platform "TechzonQuotations" allowing businesses to create branded proposals, manage product catalogs, and track sales executive performance. Features one-click PDF generation and financial reporting.',
    techStack: ['React', 'Node.js', 'PDFKit', 'MongoDB', 'Tailwind'],
    category: ['business', 'saas', 'admin'],
    image: '/images/quotation-generator-dashboard.png',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '10',
    title: 'Heal & Grow Psychology Site',
    description: 'Community platform for mental wellness and psychology services.',
    longDescription: 'A dedicated platform "Heal & Grow" connecting clients with psychology professionals. Features include service booking, client testimonials, problem categorization, and a hiring portal for expanding the team.',
    techStack: ['React', 'Node.js', 'Express', 'Tailwind', 'MongoDB'],
    category: ['business', 'saas', 'education'],
    image: '/images/heal-and-grow.png',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '11',
    title: 'Kodeline',
    description: 'AI-powered social media content optimization and analytics platform.',
    longDescription: 'A detailed analytics dashboard "Kodeline" for tracking social media performance. Features include real-time engagement monitoring, follower growth tracking, and AI-driven content optimization suggestions to maximize reach.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind', 'Recharts'],
    category: ['saas', 'ai', 'business'],
    image: '/images/kodeline-dashboard.png',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '12',
    title: 'SKEN AI',
    description: 'Centralized AI agent orchestration and system administration platform.',
    longDescription: 'A powerful AI management dashboard "SKEN AI" that orchestrates intelligent agents across multiple businesses. Features include real-time system administration, global conversation monitoring, revenue analytics, and a direct interface for AI agent configuration.',
    techStack: ['React', 'Node.js', 'Python', 'Tailwind', 'OpenAI'],
    category: ['ai', 'saas', 'admin'],
    image: '/images/sken-ai-dashboard.png',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '13',
    title: 'AI Agent Hub',
    description: 'Multi-channel AI agent management and customer engagement platform.',
    longDescription: 'A comprehensive admin panel "AI Agent Hub" for managing AI interactions across WhatsApp, Email, and Web Chat. Features include a centralized inbox, appointment scheduling, order tracking, and detailed performance insights for automated customer support.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind', 'Redis'],
    category: ['ai', 'saas', 'admin'],
    image: '/images/ai-agent-hub-dashboard.png',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '14',
    title: 'TeleFlow CRM',
    description: 'AI-powered telecalling CRM with intelligent script generation.',
    longDescription: 'A comprehensive telecalling workspace "TeleFlow" featuring an AI script generator that adapts to customer responses. Includes call queue management, outcome tracking, follow-up scheduling, and managing customer data efficiently.',
    techStack: ['React', 'Node.js', 'MySQL', 'Tailwind', 'OpenAI'],
    category: ['ai', 'saas', 'business'],
    image: '/images/teleflow-crm.png',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: '15',
    title: 'Kodeline Agency',
    description: 'Premium agency website showcasing high-performance SaaS engineering.',
    longDescription: 'The official digital presence for Kodeline, establishing a brand identity centered on "Engineering in Action". Features a dark-themed, immersive interface with complex animations to demonstrate expertise in enterprise automation, system architecture, and next-gen web development.',
    techStack: ['React', 'Framer Motion', 'Tailwind', 'Vite'],
    category: ['business', 'saas'],
    image: '/images/kodeline-dev-site.png',
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

const categories: { value: ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'saas', label: 'SaaS' },
  { value: 'admin', label: 'Admin Panels' },
  { value: 'pos', label: 'POS Systems' },
  { value: 'ai', label: 'AI Apps' },
  { value: 'education', label: 'Education' },
  { value: 'business', label: 'Business Tools' },
];

function FeaturedProject({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-20 items-center mb-16 md:mb-32 group cursor-pointer`}
      onClick={onClick}
    >
      {/* Image Side */}
      <div className="w-full lg:w-3/5 overflow-hidden rounded-3xl relative">
        <div className="aspect-[16/9] overflow-hidden rounded-3xl group-hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)] transition-all duration-500">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
        </div>
        {/* Floating Badge */}
        <div className={`absolute top-6 ${isEven ? 'right-6' : 'left-6'} bg-background/80 backdrop-blur-md px-6 py-2 rounded-full border border-primary/20 shadow-lg`}>
          <span className="font-bold uppercase tracking-widest text-xs">{project.category[0]}</span>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-2/5 space-y-6">
        <div className="flex items-center gap-4 text-primary">
          <span className="text-sm font-mono">0{index + 1}</span>
          <div className="w-12 h-[1px] bg-primary/50" />
          <span className="text-sm font-bold uppercase tracking-widest">Featured Work</span>
        </div>

        <h3 className="text-4xl md:text-5xl font-black uppercase leading-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-lg text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          {project.techStack.map(tech => (
            <span key={tech} className="px-4 py-1.5 rounded-full border border-border bg-secondary/30 text-xs font-bold uppercase tracking-wide">
              {tech}
            </span>
          ))}
        </div>


      </div>
    </motion.div>
  )
}

const ProjectCard = forwardRef<HTMLDivElement, { project: Project; onClick: () => void }>(
  ({ project, onClick }, ref) => {
    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group relative bg-card border border-border/50 rounded-2xl overflow-hidden cursor-pointer hover:border-primary/50 transition-all duration-300 hover:shadow-2xl"
        onClick={onClick}
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="p-3 rounded-full bg-primary text-primary-foreground transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
            {project.techStack.slice(0, 3).join(" • ")}
          </div>
        </div>
      </motion.div>
    );
  }
);
ProjectCard.displayName = 'ProjectCard';

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-card border border-border shadow-2xl rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="h-64 md:h-auto overflow-hidden relative">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:hidden">
              <h2 className="text-3xl font-black uppercase text-white">{project.title}</h2>
            </div>
          </div>

          <div className="p-8 md:p-12 overflow-y-auto max-h-[600px]">
            <div className="hidden md:block mb-8">
              <div className="flex gap-2 mb-4">
                {project.category.map(c => (
                  <span key={c} className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">{c}</span>
                ))}
              </div>
              <h2 className="text-4xl lg:text-5xl font-black uppercase leading-none mb-6">{project.title}</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">Overview</h3>
                <p className="text-lg leading-relaxed">{project.longDescription}</p>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-secondary rounded-md text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured && (activeCategory === 'all' || p.category.includes(activeCategory)));

  return (
    <section id="projects" ref={sectionRef} className="relative py-16 md:py-32 overflow-hidden bg-background">

      <div className="container px-4 md:px-6">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-32 text-center"
        >
          <h2 className="text-[15vw] md:text-[8rem] font-black uppercase tracking-tighter leading-none opacity-5 select-none absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
            Workroom
          </h2>
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full border-2 border-primary text-primary font-bold uppercase tracking-widest text-xs mb-4 md:mb-8">Selected Portfolio</span>
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tight">
              Crafting <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-gradient-x">Digital Value</span>
            </h2>
          </div>
        </motion.div>

        {/* Featured Projects (Spotlight Layout) */}
        <div className="mb-16 md:mb-32">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Archive / Grid Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black uppercase">Project Archive</h3>
            <p className="text-muted-foreground mt-2">More explorations and experiments</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === category.value
                  ? 'bg-foreground text-background scale-110 shadow-lg'
                  : 'bg-card border border-border text-muted-foreground hover:border-foreground/50 hover:text-foreground'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {otherProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {otherProjects.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            No projects found in this category.
          </div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
