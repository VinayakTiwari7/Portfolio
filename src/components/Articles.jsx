import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { articles } from "../data/articles";

function ArticleModal({ article, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl max-h-[80vh] bg-navy-900 border border-white/10 rounded-2xl shadow-2xl shadow-black/40 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-white/5">
          <div className="pr-8">
            <h3 className="text-xl font-semibold text-white leading-snug">
              {article.title}
            </h3>
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
              <span>{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>{article.readTime} read</span>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="flex-shrink-0 p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close article"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="p-6 overflow-y-auto text-slate-300 text-[15px] leading-7 whitespace-pre-line">
          <div className="space-y-5">
            {article.content.split("\n").map((line, index) => {
              if (line.includes("SQL Injection Attacks")) {
                return (
                  <h1 key={index} className="text-2xl font-bold text-white mb-2">
                    {line}
                  </h1>
                );
              }

              if (
                line.includes("Introduction") ||
                line.includes("Understanding SQL Injection") ||
                line.includes("How SQL Injection Works") ||
                line.includes("Real-World Impact") ||
                line.includes("Prevention and Countermeasures") ||
                line.includes("Conclusion")
              ) {
                return (
                  <h2 key={index} className="text-lg font-semibold text-cyan-400 mt-4">
                    {line}
                  </h2>
                );
              }

              if (line.startsWith("SELECT")) {
                return (
                  <pre
                    key={index}
                    className="bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-green-400 overflow-x-auto"
                  >
                    {line}
                  </pre>
                );
              }

              if (line.trim().startsWith("-") || line.trim().startsWith("1.")) {
                return (
                  <p key={index} className="pl-4 text-slate-400">
                    {line}
                  </p>
                );
              }

              return <p key={index}>{line}</p>;
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Articles() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="articles" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-bold gradient-text inline-block">Articles</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Empty state */}
        {articles.length === 0 ? (
          <p className="text-center text-slate-500 text-sm">No articles available.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-6 hover:border-cyan-500/20 hover:bg-white/[0.04] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
              >
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600" />
                  <span>{article.readTime} read</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {article.summary}
                </p>

                {/* Read More */}
                <button
                  onClick={() => setSelected(article)}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* Article Modal */}
      <AnimatePresence>
        {selected && (
          <ArticleModal article={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
