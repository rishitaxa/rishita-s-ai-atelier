import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-rose-gold/10 blur-[80px] animate-pulse-glow" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Hello, I'm
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
            <span className="text-gradient">Rishita</span>{" "}
            <span className="text-foreground">Sharma</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary font-medium mb-6">
            AI & Data Science Engineer · Machine Learning · NLP · Systems
          </p>
          <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            Computer Science student specializing in AI and Data Science, passionate about building intelligent systems, scalable backend architectures, and machine learning solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              onClick={() => scrollTo("#projects")}
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:glow-primary transition-all duration-300 hover:scale-105"
            >
              View Projects
            </button>
            <a
              href="#"
              className="px-6 py-3 rounded-lg glass border border-primary/30 text-foreground font-medium hover:border-primary/60 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <Download size={16} /> Resume
            </a>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-6 py-3 rounded-lg glass border border-secondary/30 text-foreground font-medium hover:border-secondary/60 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              <Mail size={16} /> Contact Me
            </button>
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/30 via-secondary/20 to-rose-gold/30 blur-xl animate-pulse-glow" />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden glass border-2 border-primary/20">
              <img src={profileImg} alt="Rishita Sharma" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
