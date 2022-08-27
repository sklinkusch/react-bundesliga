/** @jsxImportSource theme-ui */
import React from "react"
import Matches from "./Matches"
import Table from "./Table"

function App() {
  return (
    <div className="App" sx={{ textAlign: "center" }}>
      <header className="App-header" sx={{ display: "grid", gridTemplateColumns: "250px 1fr", columnGap: "20px" }}>
        <Matches />
        <Table />
      </header>
    </div>
  );
}

export default App;
