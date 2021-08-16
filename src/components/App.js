import React, { useState } from "react"
import '../styles/App.css';
import Matches from "./Matches"
import Table from "./Table"
import oldTable from "../context/oldTable"
import dayMatches from "../context/matches"

function App() {
const matchKeys = Object.keys(dayMatches)

const lastMatches = dayMatches[matchKeys[matchKeys.length - 1]]

const newMatches = lastMatches.map(match => {
  const { teams, goals } = match 
  const [ home, away ] = teams
  const [ homeGoals, awayGoals ] = goals 
  return { home, away, homeGoals, awayGoals }
})
  const [tableOld] = useState(oldTable)
  const [tableNew, setTableNew] = useState(oldTable)
  const [matches, setMatches] = useState(newMatches)
  const getTableIndex = (val) => {
      return tableOld.reduce((acc, curr, index) => {
        const { short } = curr
        if (short === val) {
          return index
        } else {
          return acc
        }
      }, -1)
  }
  const getNewTable = (newMatches) => {
    setMatches(newMatches)
    const newTable = []
    tableOld.forEach(item => newTable.push({}))
      newMatches.forEach(match => {
        const { home, away, homeGoals, awayGoals } = match
        const indexHome = getTableIndex(home)
        const indexAway = getTableIndex(away)
        newTable[indexHome].short = tableOld[indexHome].short
        newTable[indexHome].name = tableOld[indexHome].name 
        newTable[indexAway].short = tableOld[indexAway].short
        newTable[indexAway].name = tableOld[indexAway].name 
        newTable[indexHome].goals = Number(tableOld[indexHome].goals) + Number(homeGoals)
        newTable[indexHome].countergoals = Number(tableOld[indexHome].countergoals) + Number(awayGoals)
        newTable[indexAway].goals = Number(tableOld[indexAway].goals) + Number(awayGoals)
        newTable[indexAway].countergoals = Number(tableOld[indexAway].countergoals) +  Number(homeGoals)
        if (homeGoals > awayGoals) {
          newTable[indexHome].points = Number(tableOld[indexHome].points) + 3
          newTable[indexAway].points = Number(tableOld[indexAway].points)
        } else if (homeGoals < awayGoals) {
          newTable[indexAway].points = Number(tableOld[indexAway].points) + 3
          newTable[indexHome].points = Number(tableOld[indexHome].points)
        } else {
          newTable[indexHome].points = Number(tableOld[indexHome].points) + 1
          newTable[indexAway].points = Number(tableOld[indexAway].points) + 1
        }
      })
      setTableNew(newTable)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Matches matches={matches} setMatches={getNewTable} />
        <Table newTable={tableNew} />
      </header>
    </div>
  );
}

export default App;
