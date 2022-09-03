/** @jsxImportSource theme-ui */
import React from "react"
import Liga12223 from "../pages/Liga1-22-23";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Liga22223 from "../pages/Liga2-22-23";

function App() {
  return (
    <div className="App" sx={{ textAlign: "center" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/liga1/22-23" element={<Liga12223 />} />
          <Route path="/liga1/*" element={<Liga12223 />} />
          <Route path="/liga2/22-23" element={<Liga22223 />} />
          <Route path="/liga2/*" element={<Liga22223 />} />
          <Route path="" element={<Liga12223 />} />
          <Route path="*" element={<Liga12223 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
