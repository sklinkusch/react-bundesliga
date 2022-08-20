import React from 'react'
import matches from '../data/matches_2022-23'
import "../styles/Matches.css"

const Matches = () => {
  const numberOfDays = Object.keys(matches).length
  return (
    <div style={{maxHeight: "100vh", overflowY: "scroll"}}>
      {Object.values(matches).map((day, index) => (
        <div key={index + 1} style={{ borderBottom: index === (numberOfDays - 1) ? "none" : "1px solid black"}}>
          <h5 style={{ margin: 0 }}>{index + 1}. Spieltag</h5>
          {day.map(match => {
            const { teams, goals } = match 
            const [home, away] = teams 
            const [homeGoals, awayGoals] = goals
            return (
            <div style={{ display: "flex", flexDirection: "row" }} key={`${home}-${away}-${index}`}>
              <span style={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0, textAlign: "left" }}>{home}</span>
                {typeof homeGoals === 'number' && typeof awayGoals === 'number' ? (
                  <span style={{ flexBasis: "100px", flexGrow: 0, flexShrink: 0, textAlign: "center" }}>{`${homeGoals}:${awayGoals}`}</span>
                ) : (<span style={{ flexBasis: "100px", flexGrow: 0, flexShrink: 0 }}>&nbsp;</span>)}
                <span style={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0, textAlign: "right" }}>{away}</span>
            </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Matches