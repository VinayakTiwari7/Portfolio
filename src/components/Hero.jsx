import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute right-[12%] top-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-cyan-500/8 blur-[100px] rounded-full z-0" />

      {/* Profile Image — contained, centered vertically on the right */}
      <div className="absolute right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 w-[280px] h-[360px] md:w-[300px] md:h-[400px] z-[1]">
        <img
          src={profileImg}
          alt=""
          className="w-full h-full object-cover object-top rounded-2xl opacity-50 brightness-110 contrast-105"
        />
        {/* Edge fading on all sides */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/40" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-navy-950 via-transparent to-navy-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-4">
            Welcome
          </p>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Vinayak Tiwari</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 font-medium mb-3">
            Computer Engineering Student | Aspiring Software Engineer
          </p>

          <p className="text-slate-400 max-w-xl text-base leading-relaxed mb-8">
            I build efficient, scalable, and practical software solutions while
            continuously improving my problem-solving skills.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium text-sm hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg shadow-cyan-500/20"
            >
              View Projects
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#articles"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 text-slate-300 font-medium text-sm hover:border-cyan-500/50 hover:text-white transition-all"
            >
              View Articles
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
