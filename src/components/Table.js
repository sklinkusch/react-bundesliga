/** @jsxImportSource theme-ui */
import React from 'react'
import { getTeamName } from '../data/helpers'
import Logo from './Logo'

const Row = ({club, index, sep, isThird}) => {
  const getSign = (value) => {
    return value > 0 ? '+' : value < 0 ? '–' : '±'
  }
  return (
    <div sx={{ width: "100%", maxHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div sx={{ display: "flex", flexDirection: "row", width: "550px", color: club.live ? "blue" : "black", fontWeight: club.live ? "bold" : "normal", borderBottom: sep ? "2px dashed black" : "none", px: "3px", backgroundColor: isThird && club.team.endsWith("2") ? "#aaaaaa" : "none" }}>
        <div sx={{ width: "26px", textAlign: "center"}}>{index + 1}</div>
        <div sx={{ width: "65px", textAlign: "center"}}><Logo code={club.team} /></div>
        <div sx={{ width: "275px", textAlign: "left"}}>{getTeamName(club.team)}</div>
        <div sx={{ width: "39px", textAlign: "right", marginRight: "5px" }}>{club.matches}</div>
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

const Table = ({ table, separators, isThird = false }) => {
  return (
    <div sx={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {table.map((club, index) => {
        if (separators.includes(index)) return <Row club={club} key={club.team} index={index} sep={true} isThird={isThird} />
        return <Row club={club} key={club.team} index={index} isThird={isThird} />
      })
      }
  </div>
  )
}

export default Table