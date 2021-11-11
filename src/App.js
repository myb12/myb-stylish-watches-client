import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Purchase from './components/Purchase/Purchase';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>

        <Route path="/purchase">
          <Purchase />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
