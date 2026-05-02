import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">
            About
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 mb-8 rounded-full" />

          <p className="text-slate-300 text-lg leading-relaxed">
            I am a Computer Engineering student with a strong interest in
            software development, problem solving, and system design. I enjoy
            building practical applications and continuously improving my
            technical skills through hands-on projects and consistent learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
