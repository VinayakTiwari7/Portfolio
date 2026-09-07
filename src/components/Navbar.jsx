import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => document.querySelector(l.href));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActive(navLinks[i].href);
          return;
        }
      }
      setActive("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setResumeOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/85 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-2 text-base font-semibold text-white tracking-tight hover:text-cyan-400 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform shadow-sm shadow-cyan-400" />
          <span>Vinayak Tiwari</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1 mr-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    active === link.href
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setResumeOpen(!resumeOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border border-cyan-500/30 text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all cursor-pointer"
              aria-expanded={resumeOpen}
            >
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Resume</span>
              <svg
                className={`w-3.5 h-3.5 text-cyan-400 transition-transform duration-200 ${resumeOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {resumeOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl glass-card border border-white/10 shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Select Specialized Resume
                </div>
                <a
                  href="/resumes/AI_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setResumeOpen(false)}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/20 border border-transparent transition-all group"
                >
                  <div className="p-1.5 rounded-md bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300">
                      AI & LLM Systems Resume
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Cortex, Nexus, LangGraph, FastAPI
                    </div>
                  </div>
                </a>

                <a
                  href="/resumes/Backend_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setResumeOpen(false)}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/20 border border-transparent transition-all group mt-1"
                >
                  <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover:text-blue-300">
                      Backend & Systems Resume
                    </div>
                    <div className="text-[11px] text-slate-400">
                      SmartHire, Java 17, Spring Boot, MySQL
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/VinayakTiwari7"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="GitHub Profile"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-colors p-1.5"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-2xl border-b border-white/10 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-1.5 text-sm font-medium transition-colors ${
                active === link.href ? "text-cyan-400" : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-white/5 space-y-2">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Download Resumes
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="/resumes/AI_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-2 px-3 rounded-lg text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
              >
                AI Resume (PDF)
              </a>
              <a
                href="/resumes/Backend_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-2 px-3 rounded-lg text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20"
              >
                Backend Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
