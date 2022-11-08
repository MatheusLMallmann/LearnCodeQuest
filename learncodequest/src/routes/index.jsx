import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/login';
import { Register } from '../pages/Register/register';
import { Home } from '../pages/Home/home'
import Navbar from '../layoutPages/navbar/navbar';
import Footer from '../layoutPages/footer/footer'

export const AppRouter = () =>{
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/login" exact element={<Login/>}/>
                <Route path="/register" exact element={<Register/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}