import React from 'react';

// 1. Header
import Header from './components/layout/Header'; 

// 2. Componentes de la Landing
import Footer from './components/landing/Footer'; 
import Hero from './components/landing/Hero';
import TrustBadges from './components/landing/TrustBadges';
import IdealFor from './components/landing/IdealFor';
import ScienceSimple from './components/landing/ScienceSimple';
import QuickGuide from './components/landing/QuickGuide';
import Testimonials from './components/landing/Testimonials';
import FAQ from './components/landing/FAQ';
import Pricing from './components/landing/Pricing';
import VisualTransformation from './components/landing/VisualTransformation';
import LifestyleHero from './components/landing/LifestyleHero';
import WhatsAppButton from './components/landing/WhatsAppButton'; 

function App() {
  return (
    <div className="min-h-screen bg-[#F9F7F2]">
      <Header />
      
      <main>
        <Hero />
        <TrustBadges />
        
        <VisualTransformation />
        
        <IdealFor />
        <ScienceSimple />
        
        <LifestyleHero />
        
        <QuickGuide />
        <FAQ />
        <Pricing />
        
        {/* Los testimonios ahora son el cierre antes del footer */}
        <Testimonials />
      </main>

      <Footer />
      
      <WhatsAppButton />
    </div>
  );
}

export default App;