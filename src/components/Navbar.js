import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-around">
        <li><Link to="/">Scans🔍</Link></li>
        <li><Link to="/results">Résultats📊</Link></li>
        <li><Link to="/logs">Logs📜</Link></li>
        <li><Link to="/auth">Connexion🔑 </Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
