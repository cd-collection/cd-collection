import React from 'react';
import './App.css';
import cds from './cds.js';
import Search from './components/Search';

function App() {
  console.log(cds)
  return (
    <div className="App">
      <Search></Search>
    </div>
  );
}

export default App;
