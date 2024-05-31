import React, { useState } from 'react';
import './App.css';

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <h1>My App</h1>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <p>© 2024 My App</p>
  </footer>
);

const Calculator = ({ title }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="calculator">
      <h2>{title}</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

const App = () => (
  <div className="app">
    <Header />
    <main className="main-content">
      <Calculator title="Calculator 1" />
      <Calculator title="Calculator 2" />
    </main>
    <Footer />
  </div>
);

export default App;
