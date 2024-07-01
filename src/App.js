import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import AboutUs from './components/AboutUs';
import SellCoins from './components/SellCoins';
import Social from './components/Social';
import Background from './components/Background';
import Footer from './components/Footer';
import Payment from './components/Payment';
import Register from './components/Register';
import Login from './components/Login';
import UpdatePassword from './components/UpdatePassword';
import MyAccount from './components/MyAccount';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="relative w-full h-full">
        <Background />
        <div className="relative z-10">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/sell-coins" element={<SellCoins />} />
              <Route path="/social" element={<Social />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/password" element={<UpdatePassword />} />
              <Route path="/acount" element={<MyAccount />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
