import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Navbar from './components/layout/Navbar'




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
      </Routes>
    </Router>
  );
}

export default App;
