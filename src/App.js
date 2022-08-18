import React from "react";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import Flow from "./components/Flow";
import { Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDTEXRGwX8pQL9YuVfNHCjIftbpS_lUbvw",
  authDomain: "fake-twitter-312b5.firebaseapp.com",
  projectId: "fake-twitter-312b5",
  storageBucket: "fake-twitter-312b5.appspot.com",
  messagingSenderId: "45594966420",
  appId: "1:45594966420:web:4dc5edf881dcc92e463781",
  measurementId: "G-E306FC3JP5",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
