import React, { useState } from 'react';
import axios from 'axios';
import './AuthComponent.css';  // Fichier CSS pour ce composant

function AuthComponent() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    axios.post('http://127.0.0.1:5000/auth/login', { username, password })
      .then(response => {
        // Gérer la réponse de l'API (par exemple, stocker le token JWT)
        localStorage.setItem('authToken', response.data.token);
        setIsAuthenticated(true);
        setError('');
      })
      .catch(err => {
        setError('Nom d\'utilisateur ou mot de passe incorrect');
      });
  };

  return (
    <div className="auth-component">
      <h2>Connexion</h2>
      {isAuthenticated ? (
        <p>Bienvenue ! Vous êtes connecté.</p>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button onClick={handleLogin} className="login-button">Se connecter</button>
          {error && <p className="error">{error}</p>}
        </div>
      )}
    </div>
  );
}

export default AuthComponent;
