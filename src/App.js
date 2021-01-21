import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './component/Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Landing} />
      </div>
    </Router>

  );
}

export default App;
