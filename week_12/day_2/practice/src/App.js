
import './App.css';
import Aboutme from './Components/Contact';
import Blog from './Components/Projects';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
             <Link to="/">Home</Link>
             <Link to="/Projects">Projects</Link>
             <Link to="/Contact">Contact</Link>
          </nav>
          </div>
        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
          
          <Route path ="/Projects">
            <Blog />
          </Route>

          <Route path ="/Contact">
            <Aboutme />
          </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
