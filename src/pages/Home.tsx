/** @jsxImportSource theme-ui */
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
/* eslint-disable react-hooks/exhaustive-deps */

type Props = {
  title: string
}

const Home = ({ title }: Props) => {
  useEffect(() => {
    document.title = title
  }, [title])
  return (
    <div className="App-header">
      <h1>Übersicht über Fußball-Ligen</h1>
      <h2>1. Bundesliga</h2>
      <div sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <h3>1. Bundesliga (♂)</h3>
          <ul sx={{ listStyle: "none" }}>
            <li>
              <Link to="/liga1/23-24">Saison 2023/24</Link>
            </li>
            <li>
              <Link to="/liga1/22-23">Saison 2022/23</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>1. Bundesliga (♀)</h3>
          <ul sx={{ listStyle: "none" }}>
            <li>
              <Link to="/wliga1/22-23">Saison 2022/23</Link>
            </li>
          </ul>
        </div>
      </div>
      <h2>2. Bundesliga</h2>
      <div sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <h3>2. Bundesliga (♂)</h3>
          <ul sx={{ listStyle: "none" }}>
            <li>
              <Link to="/liga2/23-24">Saison 2023/24</Link>
            </li>
            <li>
              <Link to="/liga2/22-23">Saison 2022/23</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>2. Bundesliga (♀)</h3>
          <ul sx={{ listStyle: "none" }}>
            <li>
              <Link to="/wliga2/22-23">Saison 2022/23</Link>
            </li>
          </ul>
        </div>
      </div>
      <h2>3. Liga</h2>
      <ul sx={{ listStyle: "none" }}>
        <Link to="/liga3/22-23">Saison 2022/23</Link>
      </ul>
      <h2>Fußball-Regionalligen</h2>
      {/* <h3>Regionalliga Nord</h3>
      <div sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <h4>Regionalliga Nord (♂)</h4>
          <ul>
            <Link to="/rln/22-23">Saison 2022/23</Link>
          </ul>
        </div>
      </div> */}
      <h3>Regionalliga Nordost</h3>
      <div sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <h4>Regionalliga Nordost (♂)</h4>
          <ul>
            <Link to="/rlno/22-23">Saison 2022/23</Link>
          </ul>
        </div>
      </div>
      {/* <h3>Regionalliga West</h3>
      <div sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <h4>Regionalliga West (♂)</h4>
          <ul>
            <Link to="/rlw/22-23">Saison 2022/23</Link>
          </ul>
        </div>
      </div> */}
      {/* <h3>Regionalliga Südwest</h3>
      <div sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <h4>Regionalliga Südwest (♂)</h4>
          <ul>
            <Link to="/rlsw/22-23">Saison 2022/23</Link>
          </ul>
        </div>
      </div> */}
      {/* <h3>Regionalliga Bayern</h3>
      <div sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <h4>Regionalliga Bayern (♂)</h4>
          <ul>
            <Link to="/rlbay/22-23">Saison 2022/23</Link>
          </ul>
        </div>
      </div> */}
    </div>
  )
}

export default Home
