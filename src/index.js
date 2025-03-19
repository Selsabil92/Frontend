
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Si tu utilises un provider pour le contexte ou des fonctionnalités supplémentaires, tu peux les ajouter ici

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
