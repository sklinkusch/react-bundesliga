/** @jsxImportSource theme-ui */
import React from 'react'
import Matches from '../components/Matches'
import matches from '../data/matches_2_2022-23'
import Table from '../components/Table'

function Liga2_22_23 () {
  const separators = [1, 2, 14, 15]
  return (
    <header className='App-header' sx={{ display: "grid", gridTemplateColumns: "250px 1fr", columnGap: "20px" }}>
      <Matches matches={matches} />
      <Table matches={matches} separators={separators} />
    </header>
  )
}

export default Liga2_22_23