// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import MainRouter from './MainRouter.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <MainRouter/>
//   </StrictMode>
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import Myapp from './Myapp';
import Welcome from './Welcome';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='p001'>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="app" element={<App />} />
      <Route path="myapp" element={<Myapp />} />
    </Routes>
  </BrowserRouter>
);
