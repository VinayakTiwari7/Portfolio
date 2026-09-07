import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto glass-card border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl text-left"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/5 mb-6">
          <div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm mt-1">{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Architecture Overview */}
        {project.architecture && (
          <div className="mb-6 space-y-3">
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
              System Architecture & Design Decisions
            </h4>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-slate-300 leading-relaxed">
              {project.architecture.overview}
            </div>

            {project.architecture.routes && (
              <div className="space-y-2 mt-4">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Core Endpoints / Workflow Contract
                </div>
                <div className="space-y-1.5">
                  {project.architecture.routes.map((r, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs">
                      <span className="font-mono text-cyan-400 font-bold px-1.5 py-0.5 rounded bg-cyan-500/10 w-fit">
                        {r.method} {r.path}
                      </span>
                      <span className="text-slate-400">{r.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Key Engineering Details */}
        <div className="space-y-3 mb-6">
          <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
            Key Technical Implementations
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions in Modal */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-colors"
            >
              <span>Live Application</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {project.docs && (
            <a
              href={project.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-medium text-xs hover:bg-cyan-500/20 transition-colors"
            >
              <span>Interactive API Docs</span>
            </a>
          )}
          {project.swagger && (
            <a
              href={project.swagger}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-medium text-xs hover:bg-emerald-500/20 transition-colors"
            >
              <span>Swagger UI</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-slate-300 font-medium text-xs hover:text-white hover:border-white/20 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub Repository</span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold gradient-text inline-block">
            Featured Projects
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Production-oriented systems built from first principles across AI orchestration gateways, agentic RAG workflows, and enterprise backend platforms.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10"
                  : "bg-white/[0.02] text-slate-400 border border-white/5 hover:text-white hover:bg-white/5"
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilter("ai")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filter === "ai"
                  ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10"
                  : "bg-white/[0.02] text-slate-400 border border-white/5 hover:text-white hover:bg-white/5"
              }`}
            >
              AI & LLM Engineering (2)
            </button>
            <button
              onClick={() => setFilter("backend")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                filter === "backend"
                  ? "bg-blue-500/15 text-blue-300 border border-blue-500/40 shadow-sm shadow-blue-500/10"
                  : "bg-white/[0.02] text-slate-400 border border-white/5 hover:text-white hover:bg-white/5"
              }`}
            >
              Backend & Full-Stack (2)
            </button>
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="group rounded-2xl glass-card p-6 sm:p-7 border border-white/5 flex flex-col justify-between hover:border-cyan-500/30 transition-all duration-300"
              >
                <div>
                  {/* Category Pill & ID */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">0{idx + 1}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {project.tagline}
                  </p>

                  {/* Bullet Highlights from Resume */}
                  <ul className="space-y-2 mb-6 text-xs text-slate-300">
                    {project.highlights.slice(0, 2).map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span className="line-clamp-2 leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-semibold hover:bg-cyan-500 hover:text-slate-950 transition-all"
                      >
                        <span>Live Demo</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    {project.docs && (
                      <a
                        href={project.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-semibold hover:bg-cyan-500/20 transition-all"
                      >
                        <span>Docs</span>
                      </a>
                    )}
                    {project.swagger && (
                      <a
                        href={project.swagger}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-semibold hover:bg-emerald-500/20 transition-all"
                      >
                        <span>Swagger</span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 text-xs font-medium hover:text-white hover:border-white/20 transition-all"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>Code</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>Architecture</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal for Deep Dive */}
        <AnimatePresence>
          {activeModalProject && (
            <ProjectModal
              project={activeModalProject}
              onClose={() => setActiveModalProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
