import { SmoothScroll } from "./components/SmoothScroll";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience, Skills } from "./sections/InfoSections";
import { Portfolio } from "./sections/Portfolio";
import { WhyCesar, CTASection, Footer } from "./sections/FinalSections";

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Portfolio />
          <Experience />
          <Skills />
          <WhyCesar />
          <CTASection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
