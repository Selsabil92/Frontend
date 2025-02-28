import React, { useState, useEffect } from 'react';
import './ScanComponent.css';  // Fichier CSS pour ce composant

function ScanComponent() {
  const [scanDetails, setScanDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simuler une récupération des résultats de scan
    const mockScanResults = [
      { id: 1, tool: 'Nmap', status: 'Scan complet', details: 'Port 80 ouvert, 443 fermé...' },
      { id: 2, tool: 'OpenVAS', status: 'Vulnérabilités détectées', details: 'Port 443 vulnérable à CVE-2022-1234' }
    ];

    setScanDetails(mockScanResults);
    setLoading(false);
  }, []);

  return (
    <div className="scan-component">
      <h2>Résultats des Scans</h2>
      {loading ? (
        <p>Chargement des résultats...</p>
      ) : (
        <div>
          {scanDetails.map(scan => (
            <div key={scan.id} className="scan-result">
              <h3>{scan.tool}</h3>
              <p><strong>Status :</strong> {scan.status}</p>
              <p><strong>Détails :</strong> {scan.details}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ScanComponent;
