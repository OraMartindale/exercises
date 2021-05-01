import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
