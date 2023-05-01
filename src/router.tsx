import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './app/home/index'
import Profile from './app/profile/index'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
