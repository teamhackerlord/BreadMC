import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ServerStatus from './components/ServerStatus';
import Community from './components/Community';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import Gallery from './components/Gallery';
import About from './components/About';
import JavaBedrock from './components/JavaBedrock';
import FAQ from './components/FAQ';
import MouseEffects from './components/MouseEffects';
import SecretEasterEgg from './components/SecretEasterEgg';
import MagneticParticles from './components/MagneticParticles';
import { sendUserInfoToDiscord } from './utils/discord';

function App() {
  const [loading, setLoading] = useState(true);

  // Send user info to Discord when app loads
  useEffect(() => {
    sendUserInfoToDiscord();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <MagneticParticles />
      <div className="noise-overlay" />
      <MouseEffects />
      <SecretEasterEgg />
      <Navigation />
      <Hero />
      <Features />
      <Gallery />
      <About />
      <JavaBedrock />
      <ServerStatus />
      <FAQ />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
