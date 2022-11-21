import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import PlayerList from "./components/PlayerList";
import PlayerInfo from './components/PlayerInfo'

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
          <Route path="/" element={<PlayerList/>} />
          <Route path="/:id" element={<PlayerInfo/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
