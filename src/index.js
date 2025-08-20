import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Context/AuthProvider';
import { CartProvider } from './Context/cartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
          <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);

