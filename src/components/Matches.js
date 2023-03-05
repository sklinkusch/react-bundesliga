/** @jsxImportSource theme-ui */
import React, { useState } from 'react'
import Logo from './Logo'

const Matches = ({ matches, selDay }) => {
  const [selectedDay, setSelectedDay] = useState(selDay || 1)
  const onSelectDay = (event) => {
    const value = event.target.value
    setSelectedDay(value)
  }
  const teamColumn = { flexBasis: "50px", flexGrow: 0, flexShrink: 0 }
  return (
    <div sx={{maxHeight: "100vh", overflowY: "auto"}}>
      <select onChange={onSelectDay}>
        {Object.keys(matches).map(key => (<option key={key} selected={key === selectedDay} value={key}>{`${key}. Spieltag`}</option>))}
      </select>
      <div>
        <h5 sx={{ margin: 0 }}>{selectedDay}. Spieltag</h5>
        {matches[selectedDay].map((match, index) => {
          const { teams = [], goals = [], live = false, date = null } = match 
          const [home = null, away = null] = teams 
          const [homeGoals = null, awayGoals = null] = goals
          if (typeof homeGoals === 'number' && typeof awayGoals === 'number' ) {
            return (
              <div sx={{ display: "flex", flexDirection: "row" }} key={`${home}-${away}-${index}`}>
                {home ? <div sx={teamColumn}><Logo code={home} /></div> : <div sx={teamColumn}>&nbsp;</div>}
                <span sx={{ flexBasis: "100px", flexGrow: 0, flexShrink: 0, textAlign: "center", color: live ? "blue" : "black", fontWeight: live ? "bold" : "normal" }}>{`${homeGoals}:${awayGoals}`}</span>
                {away ? <div sx={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}><Logo code={away} /></div> : <div sx={teamColumn}>&nbsp;</div>}
              </div>
            )
          }
          if (homeGoals == null && awayGoals == null && typeof date === "string") {
            return (
              <div sx={{ display: "flex", flexDirection: "row" }} key={`${home}-${away}-${index}`}>
                {home ? <div sx={teamColumn}><Logo code={home} /></div> : <div sx={teamColumn}>&nbsp;</div>}
                <span sx={{ flexBasis: "100px", flexGrow: 0, flexShrink: 0}}>{date}</span>
                {away ? <div sx={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}><Logo code={away} /></div> : <div sx={teamColumn}>&nbsp;</div>}
              </div>
            )  
          }
          return (
            <div sx={{ display: "flex", flexDirection: "row" }} key={`${home}-${away}-${index}`}>
              {home ? <div sx={teamColumn}><Logo code={home} /></div> : <div sx={teamColumn}>&nbsp;</div>}
              <span sx={{ flexBasis: "100px", flexGrow: 0, flexShrink: 0 }}>&nbsp;</span>
              {away ? <div sx={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}><Logo code={away} /></div> : <div sx={teamColumn}>&nbsp;</div>}
            </div>
          )})}
      </div>
    </div>
  )
}

export default Matches