import React from "react";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import Flow from "./components/Flow";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-info">
      <Routes>
        <Route path="/landing" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/flow" element={<Flow />} />
      </Routes>
    </div>
  );
}

export default App;
