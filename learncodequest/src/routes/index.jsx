import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React , {useState} from 'react';
import Login from '../pages/Login/login';
import { Register } from '../pages/Register/register';
import { Home } from '../pages/Home/home'
import Navbar from '../components/layoutPages/navbar/navbar';
//import Footer from '../components/layoutPages/footer/footer';
import Loja from '../pages/Loja/loja';
import Bootcamp from '../pages/Bootcamp/bootcamp';
import Historico from '../pages/Historico/historico';
import Desafio from '../pages/Desafio/desafio';
import Logado from '../components/layoutConteudos/layoutLogado'

export const AppRouter = () =>{
    return(
      
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/login" exact element={<Login/>}/>
                    <Route path="/register" exact element={<Register/>}/>
                    <Route path="/loja" exact element={<Loja/>}/>
                    <Route path="/bootcamp" exact element={<Bootcamp/>}/>
                    <Route path="/historico" exact element={<Historico/>}/>
                    <Route path="/logado" exact element={<Logado/>}/>
                    <Route path="/desafio" exact element={<Desafio/>}/>
                </Routes>
            </Router>
      
    )
}