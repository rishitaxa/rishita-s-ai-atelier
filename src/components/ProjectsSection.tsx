import { motion } from "framer-motion";
import { Brain, Database, BarChart3, Shield, Package } from "lucide-react";

const projects = [
  {
    title: "ML Log Analysis System",
    desc: "AI-based anomaly detection analyzing 50,000+ system logs.",
    icon: BarChart3,
    color: "primary",
  },
  {
    title: "Natural Language to SQL",
    desc: "Converts natural language into SQL queries and relational algebra.",
    icon: Brain,
    color: "secondary",
  },
  {
    title: "Limit Order Book Engine",
    desc: "High-performance C++ exchange-style matching engine.",
    icon: Database,
    color: "rose-gold",
  },
  {
    title: "Distributed Rate Limiter",
    desc: "Production-style rate limiting using token bucket & sliding window.",
    icon: Shield,
    color: "lavender",
  },
  {
    title: "Invenverse Logistics Hub",
    desc: "Full-stack logistics platform built with TypeScript, Tailwind and Supabase.",
    icon: Package,
    color: "pastel-pink",
  },
];

const colorMap: Record<string, string> = {
  primary: "hover:border-primary/50 hover:glow-primary",
  secondary: "hover:border-secondary/50 hover:glow-accent",
  "rose-gold": "hover:border-rose-gold/50 hover:glow-rose",
  lavender: "hover:border-lavender/50 hover:glow-primary",
  "pastel-pink": "hover:border-pastel-pink/50 hover:glow-accent",
};

const iconColorMap: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  "rose-gold": "text-rose-gold",
  lavender: "text-lavender",
  "pastel-pink": "text-pastel-pink",
};

const ProjectsSection = () => (
  <section id="projects" className="py-24 relative">
    <div className="container mx-auto px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`glass rounded-2xl p-6 border border-border/50 transition-all duration-500 cursor-default ${colorMap[project.color]}`}
            >
              <project.icon className={`w-10 h-10 mb-4 ${iconColorMap[project.color]}`} />
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
