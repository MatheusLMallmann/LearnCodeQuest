import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar'
import Login from './components/pages/Login';





function App() {
  return (
    
      <div>
        <Navbar/>
        <Login/>
        <Footer/>
      </div>
  );
}

export default App;
