import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Characters from "./components/Characters/Characters";
import CharactersList from "./components/Characters/CharactersList";
import Header from "./components/common/Header";

/**
 * Main application component.
 * Renders the header and routes for managing characters.
 * @returns {JSX.Element} JSX for the application component.
 */
function App() {
  return (
    <div>
      <Header />
      <div className="container mt-3 character-list-container">
        <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/characters" element={<CharactersList />} />
          <Route path="/characters/:id" element={<Characters />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
