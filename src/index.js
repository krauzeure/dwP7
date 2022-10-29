import './index.css';

import { AppRoutes } from './Routes'
import { Header } from './Components/Header/Header'
import { Footer } from './Components/Footer/Footer'

import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <main className="page-container">
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  </>
);