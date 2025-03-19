import { useState } from 'react';
import axios from 'axios';
import scanImage from '../assets/Pentest.png'
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
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Ajout de l'image */}
      <img src={scanImage} alt="Pentest" className="w-64 h-64 object-cover rounded-lg shadow-lg mb-4" />

      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Lancer un Scan🔍</h1>

      <input 
        type="text" 
        placeholder="Cible (IP/Domaine)" 
        value={target} 
        onChange={(e) => setTarget(e.target.value)} 
        className="border p-3 m-2 w-80 rounded-lg shadow-md"
      />

      <select 
        value={scanType} 
        onChange={(e) => setScanType(e.target.value)} 
        className="border p-3 m-2 w-80 rounded-lg shadow-md bg-white"
      >
        <option value="nmap">Nmap🔍</option>
        <option value="openvas">OpenVAS🛡️</option>
        <option value="metasploit">Metasploit💀</option>
        <option value="hydra">Hydra🔓</option>
      </select>

      <button 
        onClick={handleScan} 
        className="bg-blue-600 text-white p-3 m-2 w-80 rounded-lg hover:bg-blue-700 transition-all shadow-md"
      >
        Lancer le Scan🚀
      </button>

      <div className="mt-6 w-4/5">
        <h2 className="text-xl font-bold text-indigo-600">Résultats du Scan 📊</h2>
        <pre className="p-4 bg-gray-200 border rounded-lg mt-2 shadow-md">{result}</pre>
      </div>
    </div>
  );
}

export default ScanPage;
