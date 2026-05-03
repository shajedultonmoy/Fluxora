import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Agents from './components/Agents';
import Packages from './components/Packages';
import WhyChooseUs from './components/WhyChooseUs';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-light font-sans text-dark overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Stats />
        <Agents />
        <Packages />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
