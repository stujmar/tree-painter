import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Classic from './components/classic/Classic';

// import Home from "./components/home/Home";
// import Nav from './components/nav/Nav';
import TreePainter from './components/seed/TreePainter';

const App = () => {

  const handleMessageChange = (e) => {
    console.log(e);
  }

  return (
    <div className="App">
      <header className="bg-green-600 h-36 flex items-center justify-center text-lg font-sans text-white">
        <p>Welcome to Tree Painter Studio</p>
      </header>
      <TreePainter messageChange={(e) => handleMessageChange(e)}/>
      {/* <Router>
      <div className="box-border">
      <Nav />
        <hr />
        <Switch>
          <Route exact path="/">
            <TreePainter />
          </Route>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/painter-classic">
            <Classic />
          </Route>
        </Switch>
      </div>
    </Router> */}
    </div>
  )
}

export default App;
