import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard1 from './components/Dashboard/Dashboard1';
import Dashboard2 from './components/Dashboard/Dashboard2';
import Dashboard3 from './components/Dashboard/Dashboard3';
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/dashboard2">
            <Dashboard2 />
          </Route>
          <Route path="/dashboard3">
            <Dashboard3 />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
