import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Accueil from './pages/Accueil/Accueil';
import About from './pages/A Propos/About';
import Service from './pages/Services/Service';
import Boutique from './pages/Boutique/Boutique';




function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/à-propos' element={<About/>} />
        <Route path='/services' element={<Service/>} />
        <Route path='/boutique' element={<Boutique/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
