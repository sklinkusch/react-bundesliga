import React, { useState } from 'react'
import matches from '../data/matches_2022-23'
import "../styles/Matches.css"
import Logo from './Logo'

const Matches = () => {
  const [selectedDay, setSelectedDay] = useState(1)
  const onSelectDay = (event) => {
    const value = event.target.value
    setSelectedDay(value)
  }
  return (
    <div style={{maxHeight: "100vh", overflowY: "scroll"}}>
      <select onChange={onSelectDay}>
        {Object.keys(matches).map(key => (<option key={key} value={key}>{`${key}. Spieltag`}</option>))}
      </select>
      <div>
        <h5 style={{ margin: 0 }}>{selectedDay}. Spieltag</h5>
        {matches[selectedDay].map(match => {
          const { teams, goals, live = false } = match 
          const [home, away] = teams 
          const [homeGoals, awayGoals] = goals
          return (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}><Logo code={home} /></div>
              {typeof homeGoals === 'number' && typeof awayGoals === 'number' ? (
                <span style={{ flexBasis: "100px", flexGrow: 0, flexShrink: 0, textAlign: "center", color: live ? "blue" : "black", fontWeight: live ? "bold" : "normal" }}>{`${homeGoals}:${awayGoals}`}</span>
                ) : (<span style={{ flexBasis: "100px", flexGrow: 0, flexShrink: 0 }}>&nbsp;</span>)}
              <div style={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}><Logo code={away} /></div>
            </div>
          )})}
      </div>
    </div>
  )
}

export default Matches