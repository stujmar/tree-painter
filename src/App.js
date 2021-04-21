import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import Nav from './components/nav/Nav';
import SeedPlanter from './components/seed/SeedPlanter';

const App = () => {

  return (
    <div className="App">
      <header className="bg-green-600 h-36 flex items-center justify-center text-lg font-sans text-white">
        <p>Welcome to Tree Painter Studio</p>
      </header>
      <Router>
      <div className="box-border">
      <Nav />
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/seed-planter">
            <SeedPlanter />
          </Route>
          <Route path="/painter-classic">
            <SeedPlanter />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  )
}

export default App;
