import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-200 bg-grid-pattern bg-radial-shady selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <main className="space-y-4">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
