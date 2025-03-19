import { useState } from 'react';
import axios from 'axios';

function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true); // True pour login, false pour register

  const handleAuth = async () => {
    const url = isLogin ? 'http://localhost:5000/auth/login' : 'http://localhost:5000/auth/register';
    try {
      const response = await axios.post(url, { email, password });
      localStorage.setItem('token', response.data.access_token);
      setMessage(isLogin ? "Connexion réussie" : "Enregistrement réussi");
    } catch (error) {
      setMessage(error.response.data.message || 'Erreur lors de l\'authentification');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{isLogin ? 'Se Connecter' : 'S\'Enregistrer'}</h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="border p-2 m-2" 
      />
      <input 
        type="password" 
        placeholder="Mot de passe" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="border p-2 m-2" 
      />
      <button onClick={handleAuth} className="bg-blue-500 text-white p-2 rounded">
        {isLogin ? 'Se Connecter' : 'S\'Enregistrer'}
      </button>
      <p>{message}</p>
      <button 
        onClick={() => setIsLogin(!isLogin)} 
        className="text-blue-500 mt-2"
      >
        {isLogin ? "Pas encore inscrit ? S'enregistrer" : "Déjà un compte ? Se connecter"}
      </button>
    </div>
  );
}

export default AuthPage;
