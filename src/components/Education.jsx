import { motion } from "framer-motion";
import { education, certifications, coursework } from "../data/experience";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold gradient-text inline-block">
            Education & Credentials
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Academic background, coursework, and specialized virtual credential programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl glass-card p-6 sm:p-7 border border-white/5 space-y-6"
          >
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              <span>Academic Education</span>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-5 border-l border-white/10 space-y-1">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-cyan-400" />
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="text-base font-bold text-white">{edu.institution}</h3>
                    <span className="text-xs font-mono text-slate-500">{edu.period}</span>
                  </div>
                  <div className="text-sm font-medium text-cyan-300">
                    {edu.degree}
                  </div>
                  <div className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-white/[0.04] text-slate-200 border border-white/5 my-1">
                    {edu.score}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Coursework Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl glass-card p-6 sm:p-7 border border-white/5 space-y-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <span>Virtual Program Credentials</span>
              </div>

              {certifications.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 mb-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-bold text-white">{cert.title}</h3>
                    <span className="text-[11px] font-mono text-slate-500">{cert.period}</span>
                  </div>
                  <div className="text-xs text-cyan-300 font-medium">{cert.issuer}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{cert.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((s) => (
                      <span key={s} className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/15">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Coursework Pills */}
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                Relevant Coursework
              </div>
              <div className="flex flex-wrap gap-1.5">
                {coursework.map((c) => (
                  <span key={c} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-slate-300">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
