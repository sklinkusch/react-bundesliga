/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from 'react'
import Matches from '../components/Matches'
import { TableNew } from '../components/Table'
import { Link } from 'react-router-dom'
/* eslint-disable react-hooks/exhaustive-deps */

function WLiga1_22_23 ({ title }) {
  const [matches, setMatches] = useState({})
  const [table, setTable] = useState([])
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
      }
    })
  },[])
  const separators = [0, 1, 9]
  return (
    <header className='App-header'>
      <div sx={{ display: "grid", gridTemplateColumns: "250px 1fr", columnGap: "20px", height: "calc(100vh - 50px)" }}>
        { typeof matches === 'object' && Object.keys(matches).length > 0 && (
          <>
            {Object.keys(matches).length > 0 && <Matches matches={matches} />}
            {table.length > 0 && <TableNew table={table} separators={separators} />}
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