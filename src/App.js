import React from 'react';
import Container from 'react-bootstrap/Container';
import Twister from './components/Twister';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

/**
 * 
 * ==== Rebuilding this app from scratch ====
 * npm install react-bootstrap bootstrap
 * npm install react-bootstrap-range-slider

 */

function App() {
  return (
    <div className="App">
      <Router basename={'/twister'}>
        <Container>
          <Switch>                                          
            <Route path="/">
              <Twister />
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
