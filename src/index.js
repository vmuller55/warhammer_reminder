import React from 'react';
import ReactDOM from 'react-dom/client';
import '././assets/styles/main.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home.jsx';
import CreateArmyList from './pages/Create-list';
import Order from './pages/Order';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path="create-list" element={<CreateArmyList/>}/>
          <Route path="ordre" element={<Order/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
