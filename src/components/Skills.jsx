import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    items: ["C++", "Python", "HTML / CSS", "Java", "JavaScript"],
  },
  {
    title: "Frameworks",
    items: ["React", "Spring Boot"],
  },
  {
    title: "Tools",
    items: ["Git", "PostgreSQL", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold gradient-text inline-block">
            Skills
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-6"
            >
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-lg bg-navy-800/80 border border-white/5 text-sm text-slate-300 hover:border-cyan-500/30 hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
