import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI & Agentic Systems",
    icon: "brain",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/20",
    items: [
      "LangGraph (StateGraph)",
      "Tool / Function Calling",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Async Streaming (SSE)",
      "Circuit Breakers & Failover",
    ],
  },
  {
    title: "LLM APIs & Vector Search",
    icon: "sparkles",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/20",
    items: [
      "Google Gemini API",
      "ChromaDB",
      "Text Embeddings",
      "Semantic / Cosine Search",
      "Hierarchical Chunking",
    ],
  },
  {
    title: "Backend & APIs",
    icon: "server",
    color: "from-emerald-500/20 to-cyan-500/10",
    border: "border-emerald-500/20",
    items: [
      "FastAPI",
      "Spring Boot 3",
      "Spring Security 6",
      "Spring Data JPA",
      "Node.js & Express.js",
      "REST API Design",
      "JWT Authentication",
      "Async/Await (httpx, asyncio)",
      "Pydantic v2",
    ],
  },
  {
    title: "Languages",
    icon: "code",
    color: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/20",
    items: ["Python", "Java", "TypeScript", "JavaScript", "C", "C++", "SQL"],
  },
  {
    title: "Databases & Caching",
    icon: "database",
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/20",
    items: ["MySQL", "PostgreSQL", "MongoDB Atlas", "Redis (Upstash)", "H2 Database"],
  },
  {
    title: "Frontend Development",
    icon: "layout",
    color: "from-sky-500/20 to-cyan-500/10",
    border: "border-sky-500/20",
    items: ["React 18", "TypeScript", "Tailwind CSS", "React Router", "Vite", "Axios"],
  },
  {
    title: "Tools & Platforms",
    icon: "terminal",
    color: "from-slate-500/20 to-zinc-500/10",
    border: "border-slate-500/20",
    items: ["Git", "GitHub", "Docker", "Pytest", "Maven", "Postman", "Linux", "AWS", "Render", "Railway", "Vercel"],
  },
  {
    title: "Core Computer Science",
    icon: "cpu",
    color: "from-teal-500/20 to-emerald-500/10",
    border: "border-teal-500/20",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold gradient-text inline-block">
            Technical Skills
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 mb-3 rounded-full" />
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Categorized technical stack backing the deployed systems across AI orchestration, backend engineering, and databases.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: catIdx * 0.05 }}
              className={`rounded-2xl glass-card p-5 border ${cat.border} flex flex-col justify-between hover:-translate-y-1 transition-all duration-200`}
            >
              <div>
                <h3 className="text-sm font-semibold text-white mb-3.5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-xs text-slate-300 hover:border-cyan-500/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
