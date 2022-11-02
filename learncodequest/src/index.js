import React from 'react';
import { render } from "react-dom"; 
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Register from './components/pages/Register';



  render(

    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App />}> 
          <Route index element={<Home/>}/>
          <Route path="Login" component={<Login/>}/>
            
          
        </Route>
      </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);

