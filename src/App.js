import React from "react";
import Cart from "./components/Cart";
import Galary from "./components/Galary";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Cart />}></Route>
        <Route path="/galary" element={<Galary />}></Route>
        <Route>404 page not found</Route>
      </Routes>
    </div>
  );
}

export default App;
