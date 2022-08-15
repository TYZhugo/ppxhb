import router from './router/index'
import { useRoutes, BrowserRouter, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './App.css';
import Header from './pages/Header'
import Footer from './pages/Footer'

function App() {
  

  return useRoutes(router)
}

const AppWrapper = () => {

  return (
    <div >
      <Header />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default AppWrapper;
