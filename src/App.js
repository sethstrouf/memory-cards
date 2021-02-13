import React from 'react';
import './App.css';
import Cards from './components/Cards'
import Instructions from './components/Instructions'

function App() {

  return (
    <div className="App">
        <Instructions />
        <Cards />
    </div>
  );
}

export default App;
