import { useState } from 'react';
import axios from 'axios';
import scanImage from '../assets/Pentest.png';

function ScanPage() {
  const [target, setTarget] = useState('');
  const [scanType, setScanType] = useState('nmap');
  const [result, setResult] = useState('');

  const handleScan = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/scan/${scanType}`, { target });
      setResult(response.data.output);
    } catch (error) {
      console.error("Erreur lors du scan:", error);
      setResult("Erreur lors de l'exécution du scan.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-gray-900 text-white flex flex-col">
      {/* Barre de navigation */}

       {/* Contenu principal */}
       <div className="flex-grow flex items-center justify-center">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-xl shadow-xl max-w-lg w-full text-center">
          {/* Image centrée */}
          <div className="flex justify-center mb-8">
            <img src={scanImage} alt="Pentest" className="w-full h-auto rounded-lg shadow-md" />
          </div>

          <h1 className="text-3xl font-bold mb-6 text-blue-300">Lancer un Scan 🔍</h1>

          {/* Champ de saisie pour la cible */}
          <input 
            type="text" 
            placeholder="Cible (IP/Domaine)" 
            value={target} 
            onChange={(e) => setTarget(e.target.value)} 
            className="w-full p-4 mb-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
          />

          {/* Sélecteur pour le type de scan */}
          <select 
            value={scanType} 
            onChange={(e) => setScanType(e.target.value)} 
            className="w-full p-4 mb-6 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
          >
            <option value="nmap">Nmap 🔍</option>
            <option value="openvas">OpenVAS 🛡️</option>
            <option value="metasploit">Metasploit 💀</option>
            <option value="hydra">Hydra 🔓</option>
          </select>

          {/* Bouton pour lancer le scan */}
          <button 
            onClick={handleScan} 
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold text-white transition-all shadow-md"
          >
            Lancer le Scan 🚀
          </button>

          {/* Résultats */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-blue-300 mb-4">Résultats du Scan 📊</h2>
            <pre className="p-4 bg-gray-800 rounded-lg text-left whitespace-pre-wrap">{result}</pre>
          </div>
        </div>
      </div>

      {/* Pied de page */}
      <footer className="py-6 text-center bg-transparent">
        <p>&copy; 2025 Toolbox Pentest. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default ScanPage;

