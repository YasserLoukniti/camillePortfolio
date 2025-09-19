import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/layout/Hero';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

const Home: React.FC = () => {
  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;