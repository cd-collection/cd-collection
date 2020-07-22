import React from 'react';
import './App.css';
import cds from './cds.js';
import CDList from './components/CDList'

function App() {
  console.log(cds)
  return (
    <div className="App">
      <CDList cds={cds} />
    </div>
  );
}

export default App;
