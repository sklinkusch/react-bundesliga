/** @jsxImportSource theme-ui */
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <header className='App-header' sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <div>
        <h2>1. Bundesliga</h2>
        <ul sx={{ listStyle: "none"}}>
          <li>
            <Link to="/liga1/22-23">Saison 2022/23</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>2. Bundesliga</h2>
        <ul sx={{ listStyle: "none"}}>
          <li>
            <Link to="/liga2/22-23">Saison 2022/23</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>3. Liga</h2>
        <ul sx={{ listStyle: "none" }}>
          <Link to="/liga3/22-23">Saison 2022/23</Link>
        </ul>
      </div>
    </header>
  )
}

export default Home