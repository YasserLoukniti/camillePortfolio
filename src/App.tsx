import { GlobalStyles } from './styles/GlobalStyles';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Analytics />
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
