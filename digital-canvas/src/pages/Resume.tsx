import { motion } from 'framer-motion';
import { ArrowLeft, Download, Mail, Phone, MapPin, Linkedin, Github, Calendar, Building, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const Resume = () => {
    const navigate = useNavigate();

    const skills = {
        "Programming Languages": ["JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
        "Frameworks & Libraries": ["React", "Express.js", "Node.js", "Vite"],
        "Databases": ["MySQL", "MongoDB", "Supabase"],
        "Cloud Platforms & Tools": ["AWS", "Postman", "Git", "GitHub", "VS Code"],
        "Project Management": ["Jira", "Agile Methodology", "Scrum Practices"],
        "Soft Skills": ["Problem-Solving", "Communication", "Analytical Thinking", "Team Collaboration", "Leadership"]
    };

    const experience = [
        {
            title: "Delivery SaaS Platform",
            role: "MERN Stack Developer",
            tech: ["React", "Node.js", "Express", "MongoDB/MySQL", "Vite", "Git", "JWT"],
            points: [
                "Built a full Delivery Management SaaS with modules for Admin, Users, Delivery Boys, and Shopkeepers.",
                "Designed and integrated 30+ REST APIs for order creation, tracking, assignment, and delivery updates.",
                "Implemented RBAC for 4 user roles, improving platform security by 40%.",
                "Developed real-time order tracking, reducing delivery delays by 20%.",
                "Created an admin analytics dashboard, improving reporting accuracy by 30%.",
                "Optimized backend queries, increasing API response speed by 25%."
            ]
        },
        {
            title: "Laundry Billing SaaS (MERN + MySQL)",
            role: "Full-Stack Developer",
            tech: ["React", "Node.js", "Express", "MySQL", "Supabase", "Vite"],
            points: [
                "Developed a subscription-based Laundry Billing SaaS for customer, order, billing, and expense management.",
                "Engineered 20+ MySQL tables ensuring 99% data accuracy.",
                "Implemented invoice generation & GST automation, improving billing speed by 35%.",
                "Built a responsive React UI, reducing manual entry time by 40%.",
                "Enabled multi-branch support for 10+ shops.",
                "Added Supabase for authentication and storage."
            ]
        }
    ];

    const certifications = [
        "International Conference on Digitalization of Global Business Environments - Rathinam College of Arts & Science",
        "Frontend Development - Great Learning",
        "HTML Training - IIT Bombay",
        "Tech Hackathon 2024 - Nehru Arts & Science College"
    ];

    const education = {
        institution: "Nehru Arts and Science College",
        location: "Coimbatore, TN",
        degree: "B.Com Information Technology",
        period: "Jun 2022 – May 2025"
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-6 relative overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />

            <div className="container max-w-4xl mx-auto">
                {/* Header Actions */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-between items-center mb-8"
                >
                    <Button
                        variant="ghost"
                        onClick={() => navigate('/')}
                        className="gap-2 hover:bg-muted"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Portfolio
                    </Button>
                </motion.div>

                {/* Resume Paper */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card/50 backdrop-blur-md border border-border/50 rounded-xl p-6 md:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative Top Border */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-accent" />

                    {/* Resume Header */}
                    <header className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-border/50 pb-8 mb-8 gap-6 text-center md:text-left">
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                                Karthikeyan K M
                            </h1>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                                <a href="tel:+919633746591" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                    <Phone className="w-4 h-4" />
                                    +91 9633746591
                                </a>
                                <a href="mailto:karthikeyankm.karthi@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                                    <Mail className="w-4 h-4" />
                                    karthikeyankm.karthi@gmail.com
                                </a>
                                <div className="flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4" />
                                    Palakkad, Kerala
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-medium">
                                <a href="https://www.linkedin.com/in/karthikeyan-k-m-/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                    </header>

                    {/* Content Grid */}
                    <div className="space-y-10">

                        {/* Technical Skills */}
                        <section>
                            <h2 className="text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-primary rounded-full" />
                                Technical Skills
                            </h2>
                            <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                                {Object.entries(skills).map(([category, items]) => (
                                    <div key={category} className="space-y-2">
                                        <h3 className="font-semibold text-foreground/90 text-sm">{category}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {items.map((skill) => (
                                                <Badge key={skill} variant="secondary" className="bg-primary/5 hover:bg-primary/10 border-primary/10 text-primary-foreground/90 font-normal">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Professional Experience */}
                        <section>
                            <h2 className="text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-primary rounded-full" />
                                Professional Experience
                            </h2>
                            <div className="space-y-8">
                                {experience.map((job, index) => (
                                    <div key={index} className="relative pl-6 border-l-2 border-primary/20 hover:border-primary/50 transition-colors">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                            <h3 className="text-lg font-bold">{job.title}</h3>
                                            <Badge variant="outline" className="w-fit">{job.role}</Badge>
                                        </div>
                                        <div className="mb-4 flex flex-wrap gap-2 text-sm text-muted-foreground">
                                            <span className="font-semibold text-accent">Stack:</span>
                                            {job.tech.join(" • ")}
                                        </div>
                                        <ul className="space-y-2 text-muted-foreground list-disc list-outside ml-4">
                                            {job.points.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education & Certifications Grid */}
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Education */}
                            <section>
                                <h2 className="text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-primary rounded-full" />
                                    Education
                                </h2>
                                <div className="space-y-4 p-4 rounded-xl bg-secondary/20">
                                    <div className="flex items-start gap-3">
                                        <Building className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <h3 className="font-bold text-lg">{education.institution}</h3>
                                            <p className="text-muted-foreground">{education.degree}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground pl-8">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4" />
                                            {education.location}
                                        </div>
                                        <span>•</span>
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            {education.period}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Certifications */}
                            <section>
                                <h2 className="text-xl font-bold uppercase tracking-wider text-primary mb-6 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-primary rounded-full" />
                                    Certifications
                                </h2>
                                <ul className="space-y-4">
                                    {certifications.map((cert, index) => (
                                        <li key={index} className="flex gap-3 text-muted-foreground">
                                            <Award className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                            <span className="text-sm">{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume;
