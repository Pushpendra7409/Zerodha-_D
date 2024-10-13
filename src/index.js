import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Home from './components/Home'
import Orders from './components/Orders'
import Apps from './components/Apps'
import Positions from './components/Positions'
import Holdings from './components/Holdings'
import Funds from './components/Funds'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/positions" element={<Positions />} />
      <Route path="/holdings" element={<Holdings />} />
      <Route path="/funds" element={<Funds />} />
    </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);

