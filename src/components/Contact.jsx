import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("tiwarivinayak859@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold gradient-text inline-block">
            Get In Touch
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 mb-4 rounded-full" />
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-10">
            Open to software engineering and AI systems roles. Let's discuss backend architecture, LLM orchestration, or team opportunities.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {/* Email Card with Copy */}
            <div className="rounded-xl glass-card p-4 border border-white/5 flex flex-col justify-between items-center text-center">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-xs font-semibold text-white mb-0.5">Email</div>
              <div className="text-[11px] text-slate-400 mb-3 truncate max-w-full">
                tiwarivinayak859@gmail.com
              </div>
              <button
                onClick={copyEmail}
                className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold bg-white/[0.04] hover:bg-cyan-500/20 text-cyan-300 border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer"
              >
                {copied ? "Copied ✓" : "Copy Email"}
              </button>
            </div>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/vinayak-tiwari-2357a9371"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl glass-card p-4 border border-white/5 hover:border-blue-500/30 transition-all flex flex-col justify-between items-center text-center group"
            >
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 mb-2 group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <div className="text-xs font-semibold text-white mb-0.5">LinkedIn</div>
              <div className="text-[11px] text-slate-400 mb-3 truncate max-w-full">
                /in/vinayak-tiwari-2357a9371
              </div>
              <span className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold bg-white/[0.04] text-blue-300 border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all">
                Connect →
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/VinayakTiwari7"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl glass-card p-4 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between items-center text-center group"
            >
              <div className="p-2.5 rounded-lg bg-white/5 text-slate-300 mb-2 group-hover:bg-white/10 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div className="text-xs font-semibold text-white mb-0.5">GitHub</div>
              <div className="text-[11px] text-slate-400 mb-3">VinayakTiwari7</div>
              <span className="w-full py-1.5 px-3 rounded-lg text-xs font-semibold bg-white/[0.04] text-slate-300 border border-white/10 group-hover:bg-white/10 transition-all">
                Repositories →
              </span>
            </a>

            {/* Location & Phone Card */}
            <div className="rounded-xl glass-card p-4 border border-white/5 flex flex-col justify-between items-center text-center">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 mb-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-xs font-semibold text-white mb-0.5">Location & Phone</div>
              <div className="text-[11px] text-slate-400 mb-3">
                Mumbai, India <br />
                <span className="font-mono text-slate-500">+91-9129793269</span>
              </div>
              <div className="w-full py-1.5 px-2 rounded-lg text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                🟢 Available Immediately
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/5 text-center text-xs text-slate-500 space-y-1">
          <p>© {new Date().getFullYear()} Vinayak Tiwari. All rights reserved.</p>
          <p className="text-[11px] text-slate-600">
            Engineered with React 19, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </section>
  );
}
