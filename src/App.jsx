import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Articles />
        <Contact />
      </main>
    </div>
  );
}
