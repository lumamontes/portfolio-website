import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SocialSideBar from './components/SocialSideBar';
import HeroSection from './components/HeroSection';


function App() {
  return (
    <Router className="App">
      <SocialSideBar />
      <Sidebar />
      <Navbar/>
      <HeroSection />
    </Router>
  );
}

export default App;
