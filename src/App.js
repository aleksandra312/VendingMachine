import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Candy from "./Candy";
import Chips from "./Chips";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<VendingMachine />} />
          <Route exact path="/soda" element={<Soda />} />
          <Route exact path="/chips" element={<Chips />} />
          <Route exact path="/candy" element={<Candy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
