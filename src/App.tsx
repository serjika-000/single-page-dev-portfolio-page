import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";

function App() {
  return (
    <main className="overflow-x-clip">
      <Header />

      <div>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}

export default App;
