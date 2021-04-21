import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Classic from './components/classic/Classic';

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
            <SeedPlanter />
          </Route>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/painter-classic">
            <Classic />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  )
}

export default App;
