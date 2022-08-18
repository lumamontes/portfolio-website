import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SocialSideBar from './components/SocialSideBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';


function App() {
  return (
    <Router className="App">
      <SocialSideBar />
      <Sidebar />
      <Navbar/>
      <HeroSection /> 
      <AboutSection />
      <SkillsSection />
    </Router>
  );
}

export default App;
