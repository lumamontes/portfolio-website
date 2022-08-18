import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SocialSideBar from './components/SocialSideBar';


function App() {
  return (
    <Router className="App">
      <SocialSideBar />
      <Sidebar />
      <Navbar/>
    </Router>
  );
}

export default App;
