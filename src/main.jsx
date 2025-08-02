import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './assets/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router basename="/Big-Brain-Foods-Website">
    <App />
  </Router>
);
