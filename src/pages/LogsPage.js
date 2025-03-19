import { useState, useEffect } from 'react';
import axios from 'axios';

function LogsPage() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/logs');
        setLogs(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des logs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">📜 Logs</h1>

      {loading ? (
        <p className="text-gray-500">Chargement des logs...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="p-3">🆔 ID</th>
                <th className="p-3">📅 Date</th>
                <th className="p-3">⚡ Action</th>
                <th className="p-3">👤 Utilisateur</th>
              </tr>
            </thead>
            <tbody>
              {logs.length > 0 ? (
                logs.map((log) => (
                  <tr key={log.id} className="border-b">
                    <td className="p-3 text-center">{log.id}</td>
                    <td className="p-3 text-center">{new Date(log.timestamp).toLocaleString()}</td>
                    <td className="p-3 text-center">{log.action}</td>
                    <td className="p-3 text-center">{log.user}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-3 text-center text-gray-500">
                    Aucun log trouvé.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default LogsPage;
