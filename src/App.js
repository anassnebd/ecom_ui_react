// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import ProductInfo from './components/ProductInfo';
import Index from './components/Index';
import Panier from './components/Panier';
import FiltredProducts from './components/Products copy';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/filtersʔ5000" element={<FiltredProducts />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
