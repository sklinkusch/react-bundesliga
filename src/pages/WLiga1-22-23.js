/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from 'react'
import Matches from '../components/Matches'
import Table from '../components/Table'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
/* eslint-disable react-hooks/exhaustive-deps */

function WLiga1_22_23 ({ title }) {
  const [matches, setMatches] = useState({})
  const [table, setTable] = useState([])
  const [queryParams] = useSearchParams()
  const [possible, setPossible] = useState([])
  const [colors, setColors] = useState([])
  const [fcolors, setFColors] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    document.title = title
  },[title])
  useEffect(() => {
    const url = 'https://buli-api.vercel.app/liga1women?season=2022-23'
    // const url = 'http://localhost:3500/liga1women?season=2022-23'
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if (typeof data === 'object' && Object.keys(data).length > 0) {
        const { matches: apiMatches = {}, table: apiTable = [] } = data
        setMatches(apiMatches)
        setTable(apiTable)
        if (apiMatches && !queryParams.get("day")) {
          const sumObject = Object.keys(apiMatches).reduce((acc, currDay) => {
            const obj = { ...acc }
            const origValue = apiMatches[currDay]
            const sumValue = origValue.reduce((sum, currMatch) => {
              const sumGoals = typeof currMatch.goals[0] === 'number' && typeof currMatch.goals[1] === 'number' 
                ? currMatch.goals[0] + currMatch.goals[1]
                : null
              if (sum && sumGoals) {
                return sum + sumGoals
              } else if (sum) {
                return sum
              } else if (sumGoals) {
                return sumGoals
              }
              return null
            }, null)
            obj[currDay] = sumValue
            return obj
          }, {})
          const keysWithNumberVals = Object.keys(sumObject).filter(key => (typeof sumObject[key] === 'number'))
          const sortedKeys = keysWithNumberVals.sort((a, b) => Number(b) - Number(a))
          if (sortedKeys.length > 0) {
            navigate(`/wliga1/22-23?day=${Number(sortedKeys[0])}`)
          }
        }
      }
    })
  },[])
  const separators = [0, 1, 2, 9]
  useEffect(() => {
    const getPossiblePlaces = (sourceTable) => {
    const totalTeams = sourceTable.length
    const totalMatches = 2 * (totalTeams - 1)
    const maxPossiblePoints = sourceTable.map(team => {
      const playedMatches = team.matches
      const matchesToPlay = totalMatches - playedMatches
      const minimalPoints = team.points
      const maximalPoints = minimalPoints + (3 * matchesToPlay)
      return maximalPoints
    })
    const bestRank = sourceTable.map((team, idx, arr) => {
      const newTable = arr.map(tm => {
        if (tm.team === team.team) {
          return { ...tm, points: maxPossiblePoints[idx]}
        }
        return tm
      })
      const newSortedTable = newTable.sort((a, b) => {
        if (a.points > b.points) return -1
        if (b.points > a.points) return +1
        if (a.team === team.team) return -1
        if (b.team === team.team) return +1
        return 0
      })
      const teamRank = newSortedTable.findIndex(tm => tm.team === team.team)
      return teamRank
    })
    const worstRank = sourceTable.map((team, idx, arr) => {
      const newTable = arr.map((tm, ind) => {
        if (tm.team === team.team) return tm
        return { ...tm, points: maxPossiblePoints[ind]}
      })
      const newSortedTable = newTable.sort((a, b) => {
        if (a.points > b.points) return -1
        if (b.points > a.points) return +1
        if (a.team === team.team) return +1
        if (b.team === team.team) return -1
        return 0
      })
      const teamRank = newSortedTable.findIndex(tm => tm.team === team.team)
      return teamRank
    })
    const returnValue = bestRank.map((best, index) => {
      return { best: best, worst: worstRank[index] }
    })
    setPossible(returnValue)
  }
    getPossiblePlaces(table)
  }, [table])
  useEffect(() => {
      function getColors() {
        const myColors = Array.isArray(possible) && possible.length > 0 ? possible.map(team => {
          // Meister und Gruppenphase der Champions League
          if (team.worst === 0) return "linear-gradient(to bottom, #e6f0a3 0%, #d2e638 50%, #c3d825 51%, #dbf043 100%)"
          // 2. Qualifikationsrunde der Champions League
          if (team.worst <= 1) return "linear-gradient(to bottom, #f6f8f9 0%, #e5ebee 50%, #d7dee3 51%, #f5f7f9 100%)"
          // 1. Qualifikationsrunde der Champions League
          if (team.worst <= 2) return "linear-gradient(to bottom, #f3e2c7 0%, #c19e67 50%, #b68d4c 51%, #e9d4b3 100%)"
          // Klassenerhalt
          if (team.worst <= 9) return "linear-gradient(to bottom, #e5ff9e 0%, #b8f084 100%)"
          // Abstieg
          if (team.best >= 10) return "linear-gradient(to bottom, #ff3019 0%, #c40404 100%)"
          return "none"
        }) : []
        setColors(myColors)
      }
      function getFontColors() {
        const myFColors = Array.isArray(possible) && possible.length > 0 ? possible.map(team => {
          // Meister und Gruppenphase der Champions League
          if (team.worst === 0) return "black"
          // 2. Qualifikationsrunde der Champions League
          if (team.worst <= 1) return "black"
          // 1. Qualifikationsrunde der Champions League
          if (team.worst <= 2) return "white"
          // Klassenerhalt
          if (team.worst <= 9) return "black"
          // Abstieg
          if (team.best >= 10) return "white"
          return "black"
        }) : []
        setFColors(myFColors)
      }
      getColors()
      getFontColors()
  },[possible])
  return (
    <header className='App-header'>
      <div sx={{ display: "grid", gridTemplateColumns: "250px 1fr", columnGap: "20px", height: "calc(100vh - 50px)" }}>
        { typeof matches === 'object' && Object.keys(matches).length > 0 && (
          <>
            {Object.keys(matches).length > 0 && <Matches matches={matches} selDay={queryParams.get("day")} source="/wliga1/22-23" />}
            {table.length > 0 && <Table table={table} separators={separators} colors={colors} fontcolors={fcolors} />}
          </>
        )}
      </div>
      <div sx={{ width: "100%", height: "50px", margin: 0, textAlign: "center" }}>
        <Link to="/">Zur Hauptseite</Link>
      </div>
    </header>
  )
}

export default WLiga1_22_23