import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex items-center overflow-hidden pt-20 pb-16"
    >
      {/* Glow effect */}
      <div className="absolute right-[12%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/15 blur-[100px] rounded-full z-0 pointer-events-none" />
      <div className="absolute left-[5%] top-1/4 w-[280px] h-[280px] bg-blue-600/10 blur-[130px] rounded-full z-0 pointer-events-none" />

      {/* Profile Image — contained, centered vertically on the right with natural shady theme integration */}
      <div className="hidden md:block absolute right-8 md:right-14 lg:right-24 top-1/2 -translate-y-1/2 w-[280px] h-[360px] md:w-[320px] md:h-[420px] z-[1] pointer-events-none">
        <img
          src={profileImg}
          alt="Vinayak Tiwari"
          className="w-full h-full object-cover object-top rounded-2xl opacity-50 brightness-110 contrast-105"
        />
        {/* Soft edge fading */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-navy-950/70 via-transparent to-navy-950/30" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300 mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium text-slate-200">Computer Engineering Undergraduate</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white">
            <span className="gradient-text">Vinayak Tiwari</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-200 font-semibold mb-4 tracking-tight">
            Backend & AI Systems Engineer
          </p>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Building resilient, production-style backend systems — from an asynchronous LLM gateway with automatic failover and circuit breaking to an autonomous RAG agent orchestrating multiple tools.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
            >
              <span>View Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 font-medium text-sm hover:border-cyan-500/40 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Quick Pillars strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-10 pt-8 border-t border-white/5 text-xs text-slate-400">
            <div>
              <div className="text-white font-semibold text-sm">AI Orchestration</div>
              <div className="text-slate-500 mt-0.5">FastAPI · LangGraph · SSE</div>
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Enterprise Backend</div>
              <div className="text-slate-500 mt-0.5">Java 17 · Spring Boot 3 · JWT</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-white font-semibold text-sm">Reliability Patterns</div>
              <div className="text-slate-500 mt-0.5">Circuit Breakers · Failover</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
