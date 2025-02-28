import React, { useEffect, useState } from 'react';
import axios from 'axios';
import pentestLogo from './assets/Pentest.png';  // Import de l'image

function App() {
  const [users, setUsers] = useState([]); // Pour stocker les utilisateurs récupérés
  const [loading, setLoading] = useState(true); // Pour afficher le message de chargement

  useEffect(() => {
    // Appel API pour récupérer les utilisateurs
    axios.get('http://127.0.0.1:5000/auth/users')
      .then(response => {
        setUsers(response.data); // Enregistrer les utilisateurs dans l'état
        setLoading(false); // Fin du chargement
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs :', error);
        setLoading(false); // Fin du chargement même en cas d'erreur
      });
  }, []);  // [] signifie que cette fonction ne sera appelée qu’une seule fois, au montage du composant

  return (
    <div className="App">
      <header>
        {/* Affichage du logo */}
        <img src={pentestLogo} className="App-logo" alt="Pentest Logo" />
        <h1>Liste des utilisateurs enregistrés</h1>
      </header>

      {loading ? (
        <p>Chargement...</p> // Affiche "Chargement..." pendant que les données sont récupérées
      ) : users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.username}</li>  // Affiche chaque utilisateur
          ))}
        </ul>
      ) : (
        <p>Aucun utilisateur trouvé</p>  // Affiche ce message si aucun utilisateur n'est trouvé
      )}
    </div>
  );
}

export default App;
