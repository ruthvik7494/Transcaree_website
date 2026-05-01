import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Stats from './components/home/Stats';
import About from './components/home/About';
import FeaturesGrid from './components/home/FeaturesGrid';
import IndustriesServed from './components/home/IndustriesServed';
import Services from './components/home/Services';
import SustainabilitySection from './components/home/SustainabilitySection';
import ReachDistribution from './components/home/ReachDistribution';
import ContactForm from './components/home/ContactForm';
import SafetySection from './components/home/SafetySection';
import KnowledgeHub from './components/home/KnowledgeHub';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />

      <main>
        <Hero />

        <About />
        <FeaturesGrid />
        <IndustriesServed />
        <Services />
        <Stats />
        <SustainabilitySection />
        <ReachDistribution />

        <SafetySection />
        <KnowledgeHub />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
