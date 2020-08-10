import React from 'react';
import './App.css';
import Routes from './Routes';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-content container">
      <Routes/>
      </div>
    </div>
  );
}

export default App;
