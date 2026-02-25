import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Eventos from './pages/Eventos';
import DetalleEvento from './pages/DetalleEvento';
import Entradas from './pages/Entradas';
import QuienesSomos from './pages/QuienesSomos';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/eventos/:id" element={<DetalleEvento />} />
          <Route path="/entradas" element={<Entradas />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;