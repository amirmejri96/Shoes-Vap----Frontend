import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Accueil from './pages/Accueil/Accueil';
import About from './pages/A Propos/About';
import Service from './pages/Services/Service';
import Boutique from './pages/Boutique/Boutique';
import Shampoo from './pages/Produits/Shampoo';
import Foam from './pages/Produits/Foam';
import Renew from './pages/Produits/Renew';
import Sneaker from './pages/Produits/Sneaker';
import Pack from './pages/Produits/Pack'





function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/à-propos' element={<About/>} />
        <Route path='/services' element={<Service/>} />
        <Route path='/boutique' element={<Boutique/>} />
        <Route path='/shampoo' element={<Shampoo/>} />
        <Route path='/foam' element={<Foam/>} />
        <Route path='/white-renew' element={<Renew/>} />
        <Route path='/sneakers-deo' element={<Sneaker/>} />
        <Route path='/pack' element={<Pack/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
