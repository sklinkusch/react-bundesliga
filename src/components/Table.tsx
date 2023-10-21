/** @jsxImportSource theme-ui */
import React from "react"
import { getTeamName } from "../data/helpers"
import Logo from "./Logo"

type Club = {
  team: string
  live?: boolean
  rank: number
  matches: number
  victories: number
  ties: number
  losses: number
  goalDifference: number
  goals: number
  countergoals: number
  points: number
}

type PropsRow = {
  club: Club
  isThird: boolean
  fontcolor: string
  color: string
  sep?: boolean
  index: number
}

type PropsTable = {
  separators: number[]
  colors: string[]
  fontcolors: string[]
  isThird?: boolean
  variableSeparators: number[]
  table: Club[]
}

const Row = ({ club, index, sep, color, fontcolor, isThird }: PropsRow) => {
  let bgcol = {}
  if (isThird && club.team.endsWith("2")) {
    bgcol = { backgroundColor: "#666666" }
  } else if (color) {
    bgcol = { background: color }
  } else {
    bgcol = { backgroundColor: "none" }
  }
  let fcol = {}
  if (club.live && isThird && club.team.endsWith("2")) {
    fcol = { color: "yellow" }
  } else if (isThird && club.team.endsWith("2")) {
    fcol = { color: "white" }
  } else if (club.live && fontcolor === "white") {
    fcol = { color: "yellow" }
  } else if (club.live) {
    fcol = { color: "blue" }
  } else if (fontcolor) {
    fcol = { color: fontcolor }
  } else {
    fcol = { color: "black" }
  }
  const getSign = (value: number) => {
    return value > 0 ? "+" : value < 0 ? "–" : "±"
  }
  return (
    <div
      sx={{
        width: "100%",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: "10px"
      }}>
      <div
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "550px",
          ...fcol,
          fontWeight: club.live ? "bold" : "normal",
          borderBottom: sep ? "2px dashed black" : "none",
          px: "3px",
          ...bgcol
        }}>
        <div sx={{ width: "26px", textAlign: "center" }}>{club.rank}</div>
        <div sx={{ width: "65px", textAlign: "center" }}>
          <Logo code={club.team} />
        </div>
        <div sx={{ width: "275px", textAlign: "left" }}>
          {getTeamName(club.team)}
        </div>
        <div sx={{ width: "39px", textAlign: "right", marginRight: "5px" }}>
          {club.matches}
        </div>
        <div sx={{ width: "26px", textAlign: "right" }}>{club.victories}</div>
        <div sx={{ width: "26px", textAlign: "right" }}>{club.ties}</div>
        <div sx={{ width: "26px", textAlign: "right" }}>{club.losses}</div>
        <div sx={{ width: "46px", textAlign: "right" }}>
          {getSign(club.goalDifference)}
          {Math.abs(club.goalDifference)}
        </div>
        <div sx={{ width: "30px", textAlign: "right" }}>{club.goals}</div>
        <div sx={{ width: "4px", textAlign: "center" }}>:</div>
        <div sx={{ width: "30px", textAlign: "left" }}>{club.countergoals}</div>
        <div sx={{ width: "30px", textAlign: "right" }}>{club.points}</div>
      </div>
    </div>
  )
}

const Table = ({
  table,
  separators,
  colors,
  fontcolors,
  isThird = false,
  variableSeparators = []
}: PropsTable) => {
  let newSeparators: number[] = []
  if (isThird) {
    const secondTeamIndexes = table.reduce(
      (acc: number[], club: Club, index: number) => {
        const arr = [...acc]
        if (club.team.endsWith("2")) arr.push(index)
        return arr
      },
      []
    )
    let initialInd: number[] = []
    variableSeparators.forEach((sep) => initialInd.push(0))
    if (variableSeparators.length > 0) {
      const varSeparators = variableSeparators.map((index) => separators[index])
      const constSep = separators.slice(varSeparators.length)
      const numberIndexesFirst = secondTeamIndexes.reduce(
        (acc: number[], curr: number) => {
          const arr = [...acc]
          for (let i = 0; i < acc.length; i++) {
            if (curr <= separators[i]) arr[i]++
          }
          return arr
        },
        initialInd
      )
      newSeparators = []
      varSeparators.forEach((sep, ind) =>
        newSeparators.push(sep + numberIndexesFirst[ind])
      )
      newSeparators = newSeparators.concat(constSep)
    } else {
      const numberIndexesFirst = secondTeamIndexes.reduce(
        (acc: number[], curr: number) => {
          const arr = [...acc]
          if (curr <= separators[0]) arr[0]++
          if (curr <= separators[1]) arr[1]++
          if (curr <= separators[2]) arr[2]++
          return arr
        },
        [0, 0, 0]
      )
      const [sep1, sep2, sep3, ...otherSeps] = separators
      newSeparators = [
        sep1 + numberIndexesFirst[0],
        sep2 + numberIndexesFirst[1],
        sep3 + numberIndexesFirst[2],
        ...otherSeps
      ]
    }
  } else {
    newSeparators = separators.slice()
  }
  return (
    <div
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
      {table.map((club, index) => {
        if (newSeparators.includes(index))
          return (
            <Row
              club={club}
              key={club.team}
              index={index}
              color={colors[index] || "none"}
              sep={true}
              isThird={isThird}
              fontcolor={fontcolors[index] || "black"}
            />
          )
        return (
          <Row
            club={club}
            key={club.team}
            index={index}
            isThird={isThird}
            color={colors[index] || "none"}
            fontcolor={fontcolors[index] || "black"}
          />
        )
      })}
    </div>
  )
}

export default Table
