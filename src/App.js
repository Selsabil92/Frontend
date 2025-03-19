import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScanPage from './pages/ScanPage';
import ResultsPage from './pages/ResultsPage';
import AuthPage from './pages/AuthPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Switch>
          <Route exact path="/" component={ScanPage} />
          <Route path="/results" component={ResultsPage} />
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
