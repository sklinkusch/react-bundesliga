import React from 'react'
import AppContext from '../context/AppContext'
import "../styles/Matches.css"

const Matches = (props) => {
  return (
    <div>
      <AppContext.Consumer>
        {context => {
          const { matches } = context
          return matches.map((match, index) => {
            const [team1, team2] = match
            return (
              <div style={{ display: "flex", flexDirection: "row"}} key={index}>
                <label htmlFor="teamHome">{team1}</label>
                <input name="teamHome" type="number" min={0}></input>
                <input name="teamAway" type="number" min={0}></input>
                <label htmlFor="teamAway">{team2}</label>
              </div>
            )
          })
        }}
      </AppContext.Consumer>
    </div>
  )
}

export default Matches