import React, { useState, useEffect } from 'react';
import './Dashboard.css';  // Import du fichier CSS pour le dashboard

function Dashboard() {
  const [scanResults, setScanResults] = useState([]);

  useEffect(() => {
    // Simuler l'obtention des résultats de scan (API à intégrer ici)
    const results = [
      { id: 1, tool: 'Nmap', result: 'Scan complet' },
      { id: 2, tool: 'Metasploit', result: 'Vulnérabilité détectée' }
    ];
    setScanResults(results);
  }, []);

  return (
    <div className="dashboard">
      <h2>Tableau des Résultats de Scan</h2>
      <table>
        <thead>
          <tr>
            <th>Outil</th>
            <th>Résultat</th>
          </tr>
        </thead>
        <tbody>
          {scanResults.map(result => (
            <tr key={result.id}>
              <td>{result.tool}</td>
              <td>{result.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
