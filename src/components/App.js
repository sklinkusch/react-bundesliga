import React, { useState, useEffect } from "react"
import '../styles/App.css';
import Matches from "./Matches"
import Table from "./Table"
import dayMatches from "../context/matches"

const matchArray = Object.values(dayMatches).reduce((acc, curr) => {
  return acc.concat(curr)
},[])

function App() {
const [table, setTable] = useState([])
const [allMatches] = useState(dayMatches)
  useEffect(() => {
    const allTeams = allMatches[1].reduce((acc, currMatch) => {
      const teamArray = [ ...acc ]
      const newArray = teamArray.concat(currMatch.teams)
      return newArray
    },[])
    const teamData = allTeams.map(team => {
      const points = matchArray.reduce((acc, curr) => {
        const index = curr.teams.indexOf(team)
        const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
        if (index !== -1 && curr.goals[index] != null) {
          if (curr.goals[index] > curr.goals[indexOp]) {
            return acc + 3
          } else if (curr.goals[index] === curr.goals[indexOp]) {
            return acc + 1
          }
        }
        return acc
      }, 0)
      const goals = matchArray.reduce((acc, curr) => {
        const index = curr.teams.indexOf(team)
        if (index !== -1 && curr.goals[index] != null) {
          return acc + curr.goals[index]
        }
        return acc
      }, 0)
      const countergoals = matchArray.reduce((acc, curr) => {
        const index = curr.teams.indexOf(team)
        const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
        if (indexOp !== -1 && curr.goals[indexOp] != null) {
          return acc + curr.goals[indexOp]
        }
        return acc
      }, 0)
      const goalDifference = goals -  countergoals
      const ownMatches = matchArray.filter(match => match.teams.includes(team) && match.goals[0] != null)
      return { team, points, goals, countergoals, goalDifference, ownMatches, matchNo: ownMatches.length }
    })
    // sort first by all points
    const firstSortPoints = teamData.sort((a, b) => b.points - a.points)
    const pointsRaw = firstSortPoints.map(team => team.points)
    const mySet = new Set(pointsRaw)
    const values = mySet.values()
    const points = Array.from(values)
    const equalPoints = points.reduce((acc, curr) => {
      const arr = [ ...acc ]
      const subarray = firstSortPoints.filter(team => team.points === curr)
      arr.push(subarray)
      return arr
    },[])
    const sortedEqualPoints = equalPoints.map(set => {
      const length = set.length
      if (length === 1) {
        return set
      }
      const teams = set.map(item => item.team)
      const sortedSet = set.sort((a, b) => {
        const { ownMatches: aMatches, team: aTeam } = a
        const { ownMatches: bMatches, team: bTeam } = b
        const aPoints = aMatches.reduce((acc, curr) => {
          if (teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
            const index = curr.teams.indexOf(aTeam)
            const indexOp = index === 0 ? 1 : 0
            return curr.goals[index] > curr.goals[indexOp] ? acc + 3 : curr.goals[index] === curr.goals[indexOp] ? acc + 1 : acc
          }
          return acc
        }, 0) 
        const bPoints = bMatches.reduce((acc, curr) => {
          if (teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
            const index = curr.teams.indexOf(bTeam)
            const indexOp = index === 0 ? 1 : 0
            return curr.goals[index] > curr.goals[indexOp] ? acc + 3 : curr.goals[index] === curr.goals[indexOp] ? acc + 1 : acc
          }
          return acc
        }, 0) 
        const aGoals = aMatches.reduce((acc, curr) => {
          if (teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
            const index = curr.teams.indexOf(aTeam)
            return acc + curr.goals[index]
          }
          return acc
        }, 0)
        const bGoals = bMatches.reduce((acc, curr) => {
          if (teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
            const index = curr.teams.indexOf(bTeam)
            return acc + curr.goals[index]
          }
          return acc
        }, 0)
        const aGoalDifference = aMatches.reduce((acc, curr) => {
          if (teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
            const index = curr.teams.indexOf(aTeam)
            const indexOp = index === 0 ? 1 : 0
            return (acc + (curr.goals[index] - curr.goals[indexOp]))
          }
          return acc
        }, 0)
        const bGoalDifference = bMatches.reduce((acc, curr) => {
          if (teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
            const index = curr.teams.indexOf(bTeam)
            const indexOp = index === 0 ? 1 : 0
            return (acc + (curr.goals[index] - curr.goals[indexOp]))
          }
          return acc
        }, 0)
        const aGoalsAway = aMatches.reduce((acc, curr) => {
          if (teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
            const index = curr.teams.indexOf(aTeam)
            return index === 1 ? acc + curr.goals[index] : acc
          }
          return acc
        }, 0)
        const bGoalsAway = bMatches.reduce((acc, curr) => {
          if (teams.includes(curr.teams[0]) && teams.includes(curr.teams[1])) {
            const index = curr.teams.indexOf(bTeam)
            return index === 1 ? acc + curr.goals[index] : acc
          }
          return acc
        }, 0)
        if (a.goalDifference > b.goalDifference) {
          return -1
        } else if (b.goalDifference > a.goalDifference) {
          return +1
        } else if (a.goals > b.goals) {
          return -1
        } else if (b.goals > a.goals) {
          return +1
        } else if (aPoints > bPoints) {
          return -1
        } else if (bPoints > aPoints) {
          return +1
        } else if (aGoalDifference > bGoalDifference) {
          return -1
        } else if (bGoalDifference > aGoalDifference) {
          return +1
        } else if (aGoals > bGoals) {
          return -1
        } else if (bGoals > aGoals) {
          return +1
        } else if (aGoalsAway > bGoalsAway) {
          return -1
        } else if (bGoalsAway > aGoalsAway) {
          return +1
        } else {
          return 0
        }
      })
      return sortedSet
    }).reduce((acc, curr) => acc.concat(curr))
    setTable(sortedEqualPoints)
  }, [allMatches])
  return (
    <div className="App">
      <header className="App-header">
        <Matches matches={allMatches} />
        <Table newTable={table} />
      </header>
    </div>
  );
}

export default App;
