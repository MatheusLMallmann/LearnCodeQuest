import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'
import Navbar from './components/layout/Navbar'




function App() {
  return (
      <Router>
        <Navbar/>
        <div>
          <Link to ='/'>Home</Link>
          <Link to ='/Login'>Login</Link>
          <Link to ='/Profile'>Profile</Link>
          <Link to ='/Register'>Register</Link>
        </div>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/Login' element= {<Login/>}/>
          <Route path='/Profile' element= {<Profile/>}/>
          <Route path='/Register' element= {<Register/>}/>
        </Routes>
      </Router>
  );
}

export default App;
