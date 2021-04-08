import './App.css';
import { useState, useEffect } from 'react';

function url(path) {
  return process.env.NODE_ENV === 'development' 
  ? `http://localhost:5050${path}` : path
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React App is working
      </header>
    </div>
  );
}

export default App;
