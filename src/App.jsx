import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Featured from "./components/Featured";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProject from "./components/AllProject";

function App() {
  return (
    <div>
      <Header />
      <Hero />
     
    </div>
  );
}

export default App;
