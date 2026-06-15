import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ImportantDates from './pages/ImportantDates';
import Registration from './pages/Registration';
import SelectionCriteria from './pages/SelectionCriteria';
import OnsiteTeams from './pages/OnsiteTeams';
import ProgramSchedule from './pages/ProgramSchedule';
import FAQ from './pages/FAQ';
import HowToReach from './pages/HowToReach';
import People from './pages/People';
import Ranklist from './pages/Ranklist';
import Results from './pages/Results';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// New Pages
import About from './pages/About';
import RulesEligibility from './pages/RulesEligibility';
import ProblemArchive from './pages/ProblemArchive';
import Sponsors from './pages/Sponsors';

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dates" element={<ImportantDates />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/rules" element={<RulesEligibility />} />
            <Route path="/archive" element={<ProblemArchive />} />
            <Route path="/selection" element={<SelectionCriteria />} />
            <Route path="/onsite-teams" element={<OnsiteTeams />} />
            <Route path="/schedule" element={<ProgramSchedule />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/how-to-reach" element={<HowToReach />} />
            <Route path="/people" element={<People />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/ranklist" element={<Ranklist />} />
            <Route path="/results/:year" element={<Results />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

