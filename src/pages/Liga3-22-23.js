/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from 'react'
import Matches from '../components/Matches'
import Table from '../components/Table'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
/* eslint-disable react-hooks/exhaustive-deps */

function Liga3_22_23 ({ title }) {
  const [matches, setMatches] = useState({})
  const [table, setTable] = useState([])
  const [queryParams] = useSearchParams()
  const [colors, setColors] = useState([])
  const [fColors, setFColors] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    document.title = title
  },[title])
  useEffect(() => {
    fetch('https://buli-api.vercel.app/liga3men?season=2022-23')
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
            navigate(`/liga3/22-23?day=${Number(sortedKeys[0])}`)
          }
        }
      }
    })
  },[])
  const separators = [1, 2, 3, 15]
  useEffect(() => {
    const teams = table.map(tm => tm.team)
      const secondTeams = teams.filter(tm => tm.endsWith("2"))
      const secondTeamsPlaces = secondTeams.map(team => teams.indexOf(team))
      const aufstieg = 1 + secondTeamsPlaces.filter(ind => ind < 2).length
      const relegation = 2 + secondTeamsPlaces.filter(ind => ind < 3).length
      const dfbPokal = 3 + secondTeamsPlaces.filter(ind => ind < 4).length
      function getColors() {
        const myColors = Array.isArray(table) && table.length > 0 ? table.map(team => {
          // Aufsteiger
          if (team.worst <= aufstieg) return "linear-gradient(to bottom, #e6f0a3 0%, #d2e638 50%, #c3d825 51%, #dbf043 100%)"
          // Relegation zum Aufstieg
          if (team.worst <= relegation) return "linear-gradient(to bottom, #f6f8f9 0%, #e5ebee 50%, #d7dee3 51%, #f5f7f9 100%)"
          // Teilnahme am DFB-Pokal
          if (team.worst <= dfbPokal) return "linear-gradient(to bottom, #f3e2c7 0%, #c19e67 50%, #b68d4c 51%, #e9d4b3 100%)"
          // Klassenerhalt
          if (team.worst <= 15) return "linear-gradient(to bottom, #e5ff9e 0%, #b8f084 100%)"
          // Abstieg
          if (team.best >= 16) return "linear-gradient(to bottom, #ff3019 0%, #c40404 100%)"
          return "none"
        }) : []
        setColors(myColors)
      }
      function getFontColors() {
        const myFColors = Array.isArray(table) && table.length > 0 ? table.map(team => {
          // direkter Aufstieg
          if (team.worst <= aufstieg) {
            return "black"
          // Relegation zum Aufstieg
          } else if (team.worst <= relegation) {
            return "black"
          // Teilnahme am DFB-Pokal
          } else if (team.worst <= dfbPokal) {
            return "white"
          // Klassenerhalt
          } else if (team.worst <= 15) {
            return "black"
          // Abstieg
          } else if (team.best >= 16) {
            return "white"
          } else {
            return "black"
          }
        }) : []
        setFColors(myFColors)
      } 
      getColors()
      getFontColors()
  },[table])
  return (
    <header className='App-header'>
      <div sx={{ display: "grid", gridTemplateColumns: "250px 1fr", columnGap: "20px", height: "calc(100vh - 50px)" }}>
        {typeof matches === 'object' && Object.keys(matches).length > 0 && (
          <>
            {Object.keys(matches).length > 0 && (<Matches matches={matches} selDay={queryParams.get("day")} source="/liga3/22-23" />)}
            {table.length > 0 && <Table table={table} separators={separators} colors={colors} fontcolors={fColors} isThird={true} />}
          </>
        )}
      </div>
      <div sx={{ width: "100%", height: "50px", margin: 0, textAlign: "center" }}>
        <Link to="/">Zur Hauptseite</Link>
      </div>
    </header>
  )
}

export default Liga3_22_23