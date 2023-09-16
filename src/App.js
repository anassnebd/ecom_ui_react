import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import ProductInfo from './components/ProductInfo';
import Index from './components/Index';
import Panier from './components/Panier';
import FiltredProducts from './components/Products copy';
import LoginUser from './components/LoginUser';
import LoginAdmin from './components/LoginAdmin';
import DashboardAdmin from './components/admin/Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductsAdmin from './components/admin/Products';
import OrdersAdmin from './components/admin/Orders';

const App = () => {
  // const location = useLocation();

  // Check if the current path is "/client/login"
  // const isLoginPage = location.pathname === '/client/login';

  return (
    <div>
      <Router>
        <div className="App">
          {/* Conditionally render the Header component */}
          {/* {!isLoginPage && <Header />} */}
          <Routes>
            <Route path="/" element={<OrdersAdmin />} />
            <Route path="/index" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/filtersʔ5000" element={<FiltredProducts />} />
            <Route path="/productinfo" element={<ProductInfo />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/client/login" element={<LoginUser />} />
            <Route path="/admin/login" element={<LoginAdmin />} />
            <Route path="/admin/dashboard" element={<DashboardAdmin />} />
            <Route path="/admin/products" element={<ProductsAdmin />} />
            <Route path="/admin/orders" element={<OrdersAdmin />} />
          </Routes>
        </div>
      </Router> 
      <ToastContainer />

    </div>
    
  );
}

export default App;
