import { useState, useEffect } from 'react';
import axios from 'axios';

function ResultsPage() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Récupérer les résultats des scans depuis le backend
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://localhost:5000/results/scan-results');
        setResults(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des résultats:", error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Résultats des Scans</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Cible</th>
            <th className="px-4 py-2 border">Type de Scan</th>
            <th className="px-4 py-2 border">Résultat</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td className="px-4 py-2 border">{result.target}</td>
              <td className="px-4 py-2 border">{result.scan_type}</td>
              <td className="px-4 py-2 border">{result.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsPage;
