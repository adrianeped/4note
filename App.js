import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrap">
      <header className="brand">
          <figure>
            <img ></img>
          </figure>
          <h1>4NOTE</h1>
          <h2>Quatro vezes melhor!</h2>
      </header>
      <main className="field-container">
        <div className="field">
          <label>Username: </label>
          <input type="text"></input>
        </div>
        <div className="field">
          <label>Password: </label>
          <input type="password"></input>
        </div>
        <button>Login</button>
      </main>
      <footer>
          <a href="blank">Sign in</a>
      </footer>
    </div>
  );
}

export default App;
