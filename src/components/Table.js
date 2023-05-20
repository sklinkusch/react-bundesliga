/** @jsxImportSource theme-ui */
import React from 'react'
import { getTeamName } from '../data/helpers'
import Logo from './Logo'

const Row = ({club, index, sep, color, isThird}) => {
  const bgc = color || "none"
  const getSign = (value) => {
    return value > 0 ? '+' : value < 0 ? '–' : '±'
  }
  return (
    <div sx={{ width: "100%", maxHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <div sx={{ display: "flex", flexDirection: "row", width: "550px", color: club.live ? "blue" : "black", fontWeight: club.live ? "bold" : "normal", borderBottom: sep ? "2px dashed black" : "none", px: "3px", backgroundColor: isThird && club.team.endsWith("2") ? "#aaaaaa" : bgc }}>
        <div sx={{ width: "26px", textAlign: "center"}}>{club.rank}</div>
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

const Table = ({ table, separators, colors, isThird = false }) => {
  let newSeparators = []
  if (isThird) {
    const secondTeamIndexes = table.map((club, index) => {
      if (club.team.endsWith("2")) return index
      return null
    }).filter(item => typeof item === 'number')
    const numberIndexesFirst = secondTeamIndexes.reduce((acc, curr) => {
      const arr = [ ...acc ]
      if (curr <= separators[0]) arr[0]++
      if (curr <= separators[1]) arr[1]++
      if (curr <= separators[2]) arr[2]++
      return arr
    }, [0, 0, 0])
    const [ sep1, sep2, sep3, ...otherSeps ] = separators
    newSeparators = [ sep1 + numberIndexesFirst[0], sep2 + numberIndexesFirst[1], sep3 + numberIndexesFirst[2], ...otherSeps ]
  } else {
    newSeparators = separators.slice()
  }
  return (
    <div sx={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {table.map((club, index) => {
        if (newSeparators.includes(index)) return <Row club={club} key={club.team} index={index} sep={true} isThird={isThird} />
        return <Row club={club} key={club.team} index={index} isThird={isThird} color={colors[index] || "none"} />
      })
      }
  </div>
  )
}

export default Table