import React from 'react'
import AppContext from '../context/AppContext'

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

const Row = ({club, index}) => {
  return (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <div style={{ width: "6%", textAlign: "center"}}>{index + 1}</div>
    <div style={{ width: "44%", textAlign: "left"}}>{club.name}</div>
    <div style={{ width: "15%", textAlign: "center"}}>{`${club.goals}:${club.countergoals}`}</div>
    <div style={{ width: "10%", textAlign: "center"}}>{club.points}</div>
  </div>
)}


const Table = (props) => {
  return (
    <div style={{ width: "100%", height: "100vh"}}>
    <AppContext.Consumer>
    {context => {
      const { oldTable } = context
      const sortedTable = oldTable.sort((a,b) => sortFunction(a,b))
      return sortedTable.map((club, index) => (<Row club={club} key={club.short} index={index} />))
    }}
  </AppContext.Consumer>
  </div>
  )
}

export default Table