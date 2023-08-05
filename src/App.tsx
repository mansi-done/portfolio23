import React from "react";
import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Container from "./components/Container/Container";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About";

import { ParallaxProvider } from 'react-scroll-parallax';
function App() {
  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </ParallaxProvider>
  );
}

export default App;


