import React, { useState } from 'react';
import Counter from './components/seed/Counter';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Classic from './components/classic/Classic';

// import Home from "./components/home/Home";
// import Nav from './components/nav/Nav';
import TreePainter from './components/seed/TreePainter';

const App = () => {

  const [ message, setMessage ] = useState("");

  const handleMessageChange = (payload) => {
    setMessage(payload);
  }

  return (
    <div className="App">
      <header className="bg-green-600 h-36 flex items-center justify-center text-lg font-sans text-white">
        <p className="w-96">{message}</p>
        <div className="p-4 absolute top-0 left-0">
          <Counter />
        </div>
      </header>
      <TreePainter messageChange={(e) => handleMessageChange(e)}/>
    </div>
  )
}

export default App;
