import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C++", "Java", "HTML", "CSS", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "NLTK", "SpaCy", "Flask", "NodeJS"],
  },
  {
    title: "Tools",
    skills: ["Git", "MySQL", "AWS"],
  },
  {
    title: "AI/ML Focus",
    skills: ["NLP", "RAG", "Vector Search", "Deep Learning", "Feature Engineering"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative">
    <div className="container mx-auto px-6 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-heading font-semibold text-lg text-foreground mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.05 }}
                    whileHover={{ scale: 1.08 }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-muted/50 text-foreground border border-border/50 hover:border-primary/40 hover:glow-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
