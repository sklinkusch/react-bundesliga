/** @jsxImportSource theme-ui */
import React, { useState, useEffect } from 'react'
import Matches from '../components/Matches'
import Table from '../components/Table'
import { Link } from 'react-router-dom'
/* eslint-disable react-hooks/exhaustive-deps */

function Liga1_22_23 ({title}) {
  const [matches, setMatches] = useState({})
  useEffect(() => {
    document.title = title
  },[title])
  useEffect(() => {
    fetch('https://buli-api.vercel.app/?liga=liga1&season=2022-23')
    .then(response => response.json())
    .then(data => {
      if (typeof data === 'object' && Object.keys(data).length > 0) {
        setMatches(data)
      }
    })
  },[])
  const separators = [0, 3, 4, 5, 14, 15]
  return (
    <header className='App-header'>
      <div sx={{ display: "grid", gridTemplateColumns: "250px 1fr", columnGap: "20px", height: "calc(100vh - 50px)" }}>
        {typeof matches === 'object' && Object.keys(matches).length > 0 && (
          <>
            <Matches matches={matches} />
            <Table matches={matches} separators={separators} />
          </>
        )}
      </div>
      <div sx={{ width: "100%", height: "50px", margin: "0", textAlign: "center" }}>
        <Link to="/">Zur Hauptseite</Link>
      </div>
    </header>
  )
}

export default Liga1_22_23