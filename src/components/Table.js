/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from 'react'
import { getTeamName } from '../data/helpers'
import Logo from './Logo'

const sortFunction = (a,b) => {
  const { points: aPoints, goals: aGoals, countergoals: aCounterGoals } = a
  const { points: bPoints, goals: bGoals, countergoals: bCounterGoals } = b
  const aDifference = aGoals - aCounterGoals
  const bDifference = bGoals - bCounterGoals
  if(aPoints > bPoints){
    return -1
  } else if(bPoints > aPoints) {
    return +1
  } else if (aDifference > bDifference) {
    return -1
  } else if(bDifference > aDifference) {
    return +1
  } else if(aGoals > bGoals) {
    return -1
  } else if(bGoals > aGoals) {
    return +1
  }
  return 0
}

const Row = ({club, index, sep, isThird}) => {
  const getSign = (value) => {
    return value > 0 ? '+' : value < 0 ? '–' : '±'
  }
  return (
    <div sx={{ width: "100%"}}>
      <div sx={{ display: "flex", flexDirection: "row", width: "550px", color: club.live ? "blue" : "black", fontWeight: club.live ? "bold" : "normal", borderBottom: sep ? "2px dashed black" : "none", px: "3px", backgroundColor: isThird && club.team.endsWith("2") ? "#aaaaaa" : "none" }}>
        <div sx={{ width: "26px", textAlign: "center"}}>{index + 1}</div>
        <div sx={{ width: "65px", textAlign: "center"}}><Logo code={club.team} /></div>
        <div sx={{ width: "195px", textAlign: "left"}}>{getTeamName(club.team)}</div>
        <div sx={{ width: "39px", textAlign: "right", marginRight: "5px" }}>{club.matchNo}</div>
        <div sx={{ width: "26px", textAlign: "right"}}>{club.victories}</div>
        <div sx={{ width: "26px", textAlign: "right"}}>{club.ties}</div>
        <div sx={{ width: "26px", textAlign: "right"}}>{club.losses}</div>
        <div sx={{ width: "46px", textAlign: "right"}}>{getSign(club.goalDifference)}{Math.abs(club.goalDifference)}</div>
        <div sx={{ width: "30px", textAlign: "right"}}>{club.goals}</div>
        <div sx={{ width: "4px", textAlign: "center"}}>:</div>
        <div sx={{ width: "30px", textAlign: "left"}}>{club.countergoals}</div>
        <div sx={{ width: "30px", textAlign: "right"}}>{club.points}</div>
      </div>
    </div>
)}


const Table = ({ matches, separators, isThird }) => {
  const [table, setTable] = useState([])
  const [allMatches] = useState(matches)
  useEffect(() => {
    const allTeams = allMatches[1].reduce((acc, currMatch) => {
      const teamArray = [ ...acc ]
      if (currMatch.hasOwnProperty("teams")) {
        const newArray = teamArray.concat(currMatch.teams)
        return newArray
      } else {
        return teamArray
      }
    },[])
    const matchArray = Object.values(matches).reduce((acc, curr) => {
      return acc.concat(curr)
    },[])
    const teamData = allTeams.map(team => {
      const points = matchArray.reduce((acc, curr) => {
        if (curr.hasOwnProperty("teams")) {
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
        }
        return acc
      }, 0)
      const goals = matchArray.reduce((acc, curr) => {
        if (curr.hasOwnProperty("teams")) {
          const index = curr.teams.indexOf(team)
          if (index !== -1 && curr.goals[index] != null) {
            return acc + curr.goals[index]
          }
          return acc
        }
        return acc
      }, 0)
      const countergoals = matchArray.reduce((acc, curr) => {
        if (curr.hasOwnProperty("teams")) {
          const index = curr.teams.indexOf(team)
          const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
          if (indexOp !== -1 && curr.goals[indexOp] != null) {
            return acc + curr.goals[indexOp]
          }
          return acc
        }
        return acc
      }, 0)
      const goalDifference = goals -  countergoals
      const victories = matchArray.reduce((acc, curr) => {
        if (curr.hasOwnProperty("teams")) {
          const index = curr.teams.indexOf(team)
          const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
          if (index !== -1 && curr.goals[index] != null) {
            if (curr.goals[index] > curr.goals[indexOp]) {
              return acc + 1
            }
            return acc
          }
          return acc
        }
        return acc
      }, 0)
      const ties = matchArray.reduce((acc, curr) => {
        if (curr.hasOwnProperty("teams")) {
          const index = curr.teams.indexOf(team)
          const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
          if (index !== -1 && curr.goals[index] != null) {
            if (curr.goals[index] === curr.goals[indexOp]) {
              return acc + 1
            }
            return acc
          }
          return acc
        }
        return acc
      }, 0)
      const losses = matchArray.reduce((acc, curr) => {
        if (curr.hasOwnProperty("teams")) {
          const index = curr.teams.indexOf(team)
          const indexOp = index === 0 ? 1 : index === 1 ? 0 : -1
          if (index !== -1 && curr.goals[index] != null) {
            if (curr.goals[index] < curr.goals[indexOp]) {
              return acc + 1
            }
            return acc
          }
          return acc
        }
        return acc
      }, 0)
      const ownMatches = matchArray.filter(match => (match.hasOwnProperty("teams") && match.hasOwnProperty("goals")) ? match.teams.includes(team) && match.goals[0] != null : false)
      const live = ownMatches.reduce((acc, curr) => {
        let identifier = acc
        if (curr.live) {
          identifier = true
        } else if (identifier === true) {
          identifier = true
        } else {
          identifier = false
        }
        return identifier
      }, false)
      return { team, points, goals, countergoals, goalDifference, ownMatches, matchNo: ownMatches.length, victories, ties, losses, live }
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
  }, [allMatches, matches])
  const sortedTable = table.sort((a,b) => sortFunction(a,b))
  return (
    <div sx={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {sortedTable.map((club, index) => {
        if (separators.includes(index)) return <Row club={club} key={club.team} index={index} sep={true} isThird={isThird} />
        return <Row club={club} key={club.team} index={index} isThird={isThird} />
      })
      }
  </div>
  )
}

export default Table