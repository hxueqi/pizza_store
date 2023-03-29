import "./App.css";
import React from "react";
// import PagesRouter from "./components/PagesRouter";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PizzasContextProvider } from "./providers/PizzasProvider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/menu"
            element={
              <PizzasContextProvider>
                <Menu />
              </PizzasContextProvider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
