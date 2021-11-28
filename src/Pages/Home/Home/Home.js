import React from 'react';
import {
     BrowserRouter,
     Routes,
     Route
   } from "react-router-dom";
import HeaderBar from '../../Shared/HeaderBar/HeaderBar';

const Home = () => {
     return (
          <div>
          <BrowserRouter>
               <HeaderBar/>
               <Routes>
               <Route path="/" element={<example />} />
               <Route path="/home" element={<example />} />
               </Routes>
          </BrowserRouter>
          </div>
     );
};

export default Home;