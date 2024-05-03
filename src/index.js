import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import { ContextProvider } from './context';
import { SavedProvider } from './context/saved';
import { BuyProvider } from './context/buy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <SavedProvider>
        <BuyProvider>
          <BrowserRouter>
            <CartProvider>
              <App />
            </CartProvider>
          </BrowserRouter>
        </BuyProvider>
      </SavedProvider>
    </ContextProvider>
  </React.StrictMode>
);
