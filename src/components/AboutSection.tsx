import { motion } from "framer-motion";
import { Brain, Server, Sparkles } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

        <div className="glass rounded-2xl p-8 md:p-12">
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            I'm a <span className="text-foreground font-medium">BTech Computer Science</span> student specializing in{" "}
            <span className="text-primary font-medium">AI & Data Science</span>. My journey in tech started with curiosity about how machines learn and has evolved into a deep passion for building intelligent systems that solve real-world problems.
          </p>
          <p className="text-muted-foreground leading-relaxed text-lg mb-10">
            From designing NLP pipelines to engineering scalable backend architectures, I love bridging the gap between cutting-edge research and production-ready solutions. I believe in the power of AI to transform industries and am driven to create impactful, scalable ML systems.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "AI & ML", desc: "Deep learning, NLP, and intelligent system design" },
              { icon: Server, title: "Backend", desc: "Scalable architectures and data pipelines" },
              { icon: Sparkles, title: "Innovation", desc: "Turning research into real-world solutions" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-6 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-all duration-300"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
