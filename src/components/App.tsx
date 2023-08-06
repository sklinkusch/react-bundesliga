/** @jsxImportSource theme-ui */
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Liga12223 from "../pages/Liga1-22-23"
import Liga12324 from "../pages/Liga1-23-24"
import Liga22223 from "../pages/Liga2-22-23"
import Liga22324 from "../pages/Liga2-23-24"
import Liga32223 from "../pages/Liga3-22-23"
import Liga32324 from "../pages/Liga3-23-24"
import RLNO2324 from "../pages/RLNO-23-24"
import RLNO2223 from "../pages/RLNO-22-23"
import WLiga12223 from "../pages/WLiga1-22-23"
import WLiga22223 from "../pages/WLiga2-22-23"
import Home from "../pages/Home"

function App() {
  return (
    <div className="App" sx={{ textAlign: "center", backgroundColor: "white" }}>
      <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route
            path="liga1/23-24"
            element={
              <Liga12324 title="1. Fußball-Bundesliga der Männer, Saison 2023/24" />
            }
          />
          <Route
            path="/liga1/22-23"
            element={
              <Liga12223 title="1. Fußball-Bundesliga der Männer, Saison 2022/23" />
            }
          />
          <Route
            path="/liga1/*"
            element={
              <Liga12324 title="1. Fußball-Bundesliga der Männer, Saison 2023/24" />
            }
          />
          <Route
            path="/liga2/23-24"
            element={
              <Liga22324 title="2. Fußball-Bundesliga der Männer, Saison 2023/24" />
            }
          />
          <Route
            path="/liga2/22-23"
            element={
              <Liga22223 title="2. Fußball-Bundesliga der Männer, Saison 2022/23" />
            }
          />
          <Route
            path="/liga2/*"
            element={
              <Liga22324 title="2. Fußball-Bundesliga der Männer, Saison 2023/24" />
            }
          />
          <Route
            path="/liga3/23-24"
            element={
              <Liga32324 title="3. Fußball-Liga der Männer, Saison 2023/24" />
            }
          />
          <Route
            path="/liga3/22-23"
            element={
              <Liga32223 title="3. Fußball-Liga der Männer, Saison 2022/23" />
            }
          />
          <Route
            path="/liga3/*"
            element={
              <Liga32324 title="3. Fußball-Liga der Männer, Saison 2023/24" />
            }
          />
          <Route
            path="/rlno/23-24"
            element={
              <RLNO2324 title="Fußball-Regionalliga Nordost der Männer, Saison 2023/24" />
            }
          />
          <Route
            path="/rlno/22-23"
            element={
              <RLNO2223 title="Fußball-Regionalliga Nordost der Männer, Saison 2022/23" />
            }
          />
          <Route
            path="/rlno/*"
            element={
              <RLNO2324 title="Fußball-Regionalliga Nordost der Männer, Saison 2023/24" />
            }
          />
          <Route
            path="/wliga1/22-23"
            element={
              <WLiga12223 title="1. Fußball-Bundesliga der Frauen, Saison 2022/23" />
            }
          />
          <Route
            path="/wliga1/*"
            element={
              <WLiga12223 title="1. Fußball-Bundesliga der Frauen, Saison 2022/23" />
            }
          />
          <Route
            path="/wliga2/22-23"
            element={
              <WLiga22223 title="2. Fußball-Bundesliga der Frauen, Saison 2022/23" />
            }
          />
          <Route
            path=""
            element={<Home title="Übersicht über Fußball-Ligen" />}
          />
          <Route
            path="*"
            element={<Home title="Übersicht über Fußball-Ligen" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
