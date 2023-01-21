/** @jsxImportSource theme-ui */
import React, { useEffect } from 'react'
import Matches from '../components/Matches'
import matches from '../data/matches_rlno_2022-23'
import Table from '../components/Table'
import { Link } from 'react-router-dom'
/* eslint-disable react-hooks/exhaustive-deps */

function RLNO_22_23 ({ title }) {
  useEffect(() => {
    document.title = title
  },[title])
  const separators = [0, 14, 15, 16]
  return (
    <header className='App-header'>
      <div sx={{ display: "grid", gridTemplateColumns: "250px 1fr", columnGap: "20px", height: "calc(100vh - 50px)" }}>
        <Matches matches={matches} />
        <Table matches={matches} separators={separators} />
      </div>
      <div sx={{ width: "100%", height: "50px", margin: 0, textAlign: "center" }}>
        <Link to="/">Zur Hauptseite</Link>
      </div>
    </header>
  )
}

export default RLNO_22_23