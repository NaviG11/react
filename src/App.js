import React from "react";
import Contacto from "../src/components/Contacto";
import ComponenteB from "../src/components/ComponenteB";
import logo from './logo.svg';
import './App.css';
function App() {
  const contacto = new Contacto(
    "Juan",
    "Pérez",
    "juanperez@example.com",
    true
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ComponenteB contacto={contacto} />

      </header>
    </div>
  )
}

export default App;
