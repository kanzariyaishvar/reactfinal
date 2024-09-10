import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Home from '../Pages/Home';
import Shop from '../Pages/Shop';
import Sing from '../Pages/Sing';
import About from '../Pages/About';
import Contact from '../Pages/Conatct'
import ProductDetail from '../Pages/ProductDetail'; 
import PrivateRoute from '../Pages/PrivateRoute'


function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/Sing" element={<Sing />} />
                <Route path="/login" element={<Login />} />
                <Route path='/about' element={<About />} />
                {/* <Route path='/shop' element={<PrivateRoute><Shop /></PrivateRoute>} /> */}
                <Route path='/shop'  element={<Shop/>} />
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/product/:id' element={<ProductDetail/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default MainRoutes;