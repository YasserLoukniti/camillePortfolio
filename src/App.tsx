import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import WeNeeds from './pages/WeNeeds';
import WeNeedsWidgets from './pages/WeNeedsWidgets';
import WeNeedsInterview from './pages/WeNeedsInterview';
import WeNeedsDashboard from './pages/WeNeedsDashboard';
import EDF from './pages/EDF';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/weneeds" element={<WeNeeds />} />
        <Route path="/weneeds/widgets" element={<WeNeedsWidgets />} />
        <Route path="/weneeds/interview" element={<WeNeedsInterview />} />
        <Route path="/weneeds/dashboard" element={<WeNeedsDashboard />} />
        <Route path="/edf" element={<EDF />} />
      </Routes>
    </Router>
  );
}

export default App;
