import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Produit from './pages/Produit';
import Client from './pages/Client';
import Categories from './pages/Categories';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>    
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/produit" element={<Produit/>}/>
    <Route path="/client" element={<Client/>}/>
    <Route path="/categories" element={<Categories/>}/>
  </Routes>
 </Router>

    </div>
  );
}

export default App;