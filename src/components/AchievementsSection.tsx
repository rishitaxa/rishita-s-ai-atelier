import { motion } from "framer-motion";
import { Trophy, Flame, Target, Award } from "lucide-react";

const stats = [
  { icon: Trophy, value: "480+", label: "LeetCode Problems", color: "text-primary" },
  { icon: Flame, value: "200+", label: "Day Coding Streak", color: "text-secondary" },
  { icon: Target, value: "82%+", label: "Acceptance Rate", color: "text-rose-gold" },
  { icon: Award, value: "Top", label: "Competitive Programmer", color: "text-lavender" },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-24 relative">
    <div className="container mx-auto px-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          <span className="text-gradient">Achievements</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-1">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Leadership */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-bold text-center mb-8">
            <span className="text-gradient">Leadership</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Community Lead", org: "Developer Student Club", detail: "Trained 3000+ students" },
              { title: "Event Organizer", org: "Google Developers Group", detail: "Hosted workshops for 500+ developers" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="font-heading font-semibold text-foreground">{item.title}</h4>
                <p className="text-secondary text-sm">{item.org}</p>
                <p className="text-muted-foreground text-sm mt-2">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AchievementsSection;
