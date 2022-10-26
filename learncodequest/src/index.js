import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element = {<App />}>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" component={<Login/>} />
          <Route path="/Register" component={<Register/>} />
          <Route path="/Profile" component={<Profile/>} />

        </Route>
      </Routes>
    </BrowserRouter>
    
    
  </React.StrictMode>
);

