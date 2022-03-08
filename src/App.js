import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <Router className="App">
      <Sidebar />
      <Navbar/>
    </Router>
  );
}

export default App;
