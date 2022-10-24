import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

import { AppRoutes } from './Routes'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'

import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  </>
);
