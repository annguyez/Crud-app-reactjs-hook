import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Home';
import {AddUser} from './components/AddUser';
import {EditUser} from './components/EditUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <Router>
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/add" component={AddUser}/>
          <Route path="/edit/:id" component={EditUser}/>
        </Switch>
        
        </Router>
        </GlobalProvider>
    </div>
  );
}

export default App;
