import React from 'react'
import "../styles/Matches.css"

const Matches = (props) => {
  const { matches } = props
  // const doNewMatches = (index, match) => {
  //   const matchesNew = matches.slice()
  //   matchesNew[index] = match
  //   setMatches(matchesNew)
  // }
  return (
    <div>
          {matches.map((match, index) => {
            const {home, away, homeGoals, awayGoals} = match
            // const changeHomeGoals = (event) => {
            //   const newMatch = { ...match, homeGoals: event.target.value }
            //   doNewMatches(index, newMatch)
            // }
            // const changeAwayGoals = (event) => {
            //   const newMatch = { ...match, awayGoals: event.target.value }
            //   doNewMatches(index, newMatch)
            // }
            return (
              <div style={{ display: "flex", flexDirection: "row"}} key={index}>
                {/* <label htmlFor="teamHome">{home}</label>
                <input name="teamHome" type="number" min={0} value={homeGoals} onChange={changeHomeGoals}></input>
                <input name="teamAway" type="number" min={0} value={awayGoals} onChange={changeAwayGoals}></input>
                <label htmlFor="teamAway">{away}</label> */}
                <span style={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0, textAlign: "left" }}>{home}</span>
                <span style={{ flexBasis: "100px", flexGrow: 0, flexShrink: 0, textAlign: "center" }}>{`${homeGoals}:${awayGoals}`}</span>
                <span style={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0, textAlign: "right" }}>{away}</span>
              </div>
            )
          })
        }
    </div>
  )
}

export default Matches