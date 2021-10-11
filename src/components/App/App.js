import './App.css';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Users from '../Users/Users';
import Addresses from '../Addresses/Addresses';
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/addresses">
              <Addresses />
            </Route>
            <Route path="/" exact component={Home} />
            <Redirect to='/' />
          </Switch>
        </main>
    </div>
  );
}

export default App;
