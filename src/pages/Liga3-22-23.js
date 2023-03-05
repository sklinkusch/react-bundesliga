/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from 'react'
import Matches from '../components/Matches'
import Table from '../components/Table'
import { Link, useSearchParams } from 'react-router-dom'
/* eslint-disable react-hooks/exhaustive-deps */

function Liga3_22_23 ({ title }) {
  const [matches, setMatches] = useState({})
  const [table, setTable] = useState([])
  const [queryParams] = useSearchParams()
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
      }
    })
  },[])
  const separators = [1, 2, 3, 15]
  return (
    <header className='App-header'>
      <div sx={{ display: "grid", gridTemplateColumns: "250px 1fr", columnGap: "20px", height: "calc(100vh - 50px)" }}>
        {typeof matches === 'object' && Object.keys(matches).length > 0 && (
          <>
            {Object.keys(matches).length > 0 && (<Matches matches={matches} selDay={queryParams.get("day")} />)}
            {table.length > 0 && <Table table={table} separators={separators} isThird={true} />}
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