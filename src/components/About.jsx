import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text inline-block">
            About & Engineering Focus
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 space-y-4 text-slate-300 text-base leading-relaxed"
          >
            <p>
              I am a Computer Engineering undergraduate at Shah & Anchor Kutchhi Engineering College focused on building complete, resilient systems with production-oriented design.
            </p>
            <p>
              My work centers on two complementary domains: <strong className="text-white font-medium">AI & Agentic Systems</strong> (architecting async LLM gateways, StateGraph multi-tool routing, semantic retrieval with ChromaDB, and real-time SSE streaming) and <strong className="text-white font-medium">Enterprise Backend Systems</strong> (designing strictly layered Spring Boot REST APIs, role-based access control with JWT, and full-stack web applications).
            </p>
            <p className="text-slate-400">
              I prioritize infrastructure-level reliability patterns — hand-rolled circuit breakers, automatic failover routing, and deterministic evaluation suites — with verifiable output deployed live to production.
            </p>
          </motion.div>

          {/* Quick Metrics & Pillars Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 rounded-2xl glass-card p-6 border border-white/5 space-y-4"
          >
            <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              Core Engineering Focus
            </h3>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-sm font-semibold text-white mb-1">
                  AI Gateways & Agentic RAG
                </div>
                <div className="text-xs text-slate-400 leading-normal">
                  FastAPI, LangGraph StateGraph, Gemini Embeddings, ChromaDB vector retrieval, and async streaming.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-sm font-semibold text-white mb-1">
                  Layered Backend & Microservices
                </div>
                <div className="text-xs text-slate-400 leading-normal">
                  Java 17, Spring Boot 3, Spring Security 6, JWT RBAC, Spring Data JPA, and PostgreSQL/MySQL.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-sm font-semibold text-white mb-1">
                  System Reliability & Testing
                </div>
                <div className="text-xs text-slate-400 leading-normal">
                  Circuit breakers, graceful cache fail-open, multi-provider failover, and automated Pytest test suites.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
