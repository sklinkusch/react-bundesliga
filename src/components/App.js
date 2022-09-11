/** @jsxImportSource theme-ui */
import React from "react"
import Liga12223 from "../pages/Liga1-22-23";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Liga22223 from "../pages/Liga2-22-23";
import Liga32223 from "../pages/Liga3-22-23";
import RLNO2223 from "../pages/RLNO-22-23";
import Home from "../pages/Home";

function App() {
  return (
    <div className="App" sx={{ textAlign: "center" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/liga1/22-23" element={<Liga12223 />} />
          <Route path="/liga1/*" element={<Liga12223 />} />
          <Route path="/liga2/22-23" element={<Liga22223 />} />
          <Route path="/liga2/*" element={<Liga22223 />} />
          <Route path="/liga3/22-23" element={<Liga32223 />} />
          <Route path="/liga3/*" element={<Liga32223 />} />
          <Route path="/rlno/22-23" element={<RLNO2223 />} />
          <Route path="/rlno/*" element={<RLNO2223 />} />
          <Route path="" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
