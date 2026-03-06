import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Data Science Intern",
    company: "The Developer Arena",
    points: [
      "Built Python + SQL pipelines processing 50,000+ records",
      "Improved efficiency by 30%",
      "Built automated preprocessing pipelines",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Cognifyz Technologies",
    points: [
      "Built NLP trend analysis system",
      "Processed 20,000+ text records",
      "Achieved 92% topic detection accuracy",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 relative">
    <div className="container mx-auto px-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative pl-16"
              >
                <div className="absolute left-3 top-1 w-6 h-6 rounded-full bg-muted border-2 border-primary flex items-center justify-center">
                  <Briefcase size={12} className="text-primary" />
                </div>
                <div className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-heading font-semibold text-lg text-foreground">{exp.role}</h3>
                  <p className="text-secondary text-sm mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((p, j) => (
                      <li key={j} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-[6px]">●</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
