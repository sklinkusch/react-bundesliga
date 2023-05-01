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
  const navigate = useNavigate()
  useEffect(() => {
    document.title = title
  },[title])
  useEffect(() => {
    fetch('https://buli-api.vercel.app/liga1women?season=2022-23')
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
  const separators = [0, 1, 9]
  return (
    <header className='App-header'>
      <div sx={{ display: "grid", gridTemplateColumns: "250px 1fr", columnGap: "20px", height: "calc(100vh - 50px)" }}>
        { typeof matches === 'object' && Object.keys(matches).length > 0 && (
          <>
            {Object.keys(matches).length > 0 && <Matches matches={matches} selDay={queryParams.get("day")} />}
            {table.length > 0 && <Table table={table} separators={separators} />}
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