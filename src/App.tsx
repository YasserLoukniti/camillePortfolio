import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import ProjectGallery from './pages/ProjectGallery';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
