
import './App.css';
import Home from './Home';
import Login from './components/Login'
import { Route, Switch } from 'react-router'

function App() {
  return (
    
    <div className="App">
    
    <Switch>
        <Route component={Home}   exact path="/"></Route>
        <Route component={Login}   exact path="/login"></Route>

    </Switch>
    
    </div>
  );
}

export default App;
