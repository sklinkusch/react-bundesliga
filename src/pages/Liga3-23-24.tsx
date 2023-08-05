/** @jsxImportSource theme-ui */
import { useEffect } from "react"
import { useDebugState } from "use-named-state"
import Matches from "../components/Matches"
import Table from "../components/Table"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
/* eslint-disable react-hooks/exhaustive-deps */

type Props = {
  title: string
}

type Match = {
  teams: string[]
  goals: (number | null)[]
  date?: string
  live?: boolean
  remark?: string
}

type Club = {
  team: string
  live?: boolean
  rank: number
  matches: number
  victories: number
  ties: number
  losses: number
  goalDifference: number
  goals: number
  countergoals: number
  points: number
  best: number
  worst: number
}

function Liga3_23_24({ title }: Props) {
  const [matches, setMatches] = useDebugState<{ [key: number]: Match[] }>(
    "matches",
    {}
  )
  const [table, setTable] = useDebugState<Club[]>("table", [])
  const [queryParams] = useSearchParams()
  const [colors, setColors] = useDebugState<string[]>("colors", [])
  const [fcolors, setFColors] = useDebugState<string[]>("fcolors", [])
  const navigate = useNavigate()
  useEffect(() => {
    document.title = title
  }, [title])
  useEffect(() => {
    const url = "https://buli-api.vercel.app/liga3men?season=2023-24"
    // const url = 'http://localhost:3500/liga3men?season=2023-24'
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (typeof data === "object" && Object.keys(data).length > 0) {
          const { matches: apiMatches = {}, table: apiTable = [] } = data
          setMatches(apiMatches)
          setTable(apiTable)
          if (apiMatches && !queryParams.get("day")) {
            const sumObject = Object.keys(apiMatches).reduce(
              (acc: { [key: string]: number | null }, currDay: string) => {
                const obj = { ...acc }
                const origValue = apiMatches[currDay]
                const sumValue = origValue.reduce(
                  (sum: number | null, currMatch: Match) => {
                    const sumGoals =
                      typeof currMatch.goals[0] === "number" &&
                      typeof currMatch.goals[1] === "number"
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
                  },
                  null
                )
                obj[currDay] = sumValue
                return obj
              },
              {}
            )
            const keysWithNumberVals = Object.keys(sumObject).filter(
              (key) => typeof sumObject[key] === "number"
            )
            const sortedKeys = keysWithNumberVals.sort(
              (a, b) => Number(b) - Number(a)
            )
            if (sortedKeys.length > 0) {
              navigate(`/liga3/23-24?day=${Number(sortedKeys[0])}`)
            }
          }
        }
      })
  }, [])
  const separators = [1, 2, 3, 15]
  useEffect(() => {
    const teams = table.map((tm) => tm.team)
    const secondTeams = teams.filter((tm) => tm.endsWith("2"))
    const secondTeamsPlaces = secondTeams.map((team) => teams.indexOf(team))
    const numberIndexesFirst = secondTeamsPlaces.reduce(
      (acc, curr) => {
        const arr = [...acc]
        if (curr <= separators[0]) arr[0]++
        if (curr <= separators[1]) arr[1]++
        if (curr <= separators[2]) arr[2]++
        return arr
      },
      [0, 0, 0]
    )
    const aufstieg = separators[0] + numberIndexesFirst[0]
    const relegation = separators[1] + numberIndexesFirst[1]
    const dfbPokal = separators[2] + numberIndexesFirst[2]
    function getColors() {
      const myColors =
        Array.isArray(table) && table.length > 0
          ? table.map((team) => {
              // Aufsteiger
              if (team.worst <= aufstieg)
                return "linear-gradient(to bottom, #e6f0a3 0%, #d2e638 50%, #c3d825 51%, #dbf043 100%)"
              // Relegation zum Aufstieg
              if (team.worst <= relegation)
                return "linear-gradient(to bottom, #f6f8f9 0%, #e5ebee 50%, #d7dee3 51%, #f5f7f9 100%)"
              // Teilnahme am DFB-Pokal
              if (team.worst <= dfbPokal)
                return "linear-gradient(to bottom, #f3e2c7 0%, #c19e67 50%, #b68d4c 51%, #e9d4b3 100%)"
              // Klassenerhalt
              if (team.worst <= 15)
                return "linear-gradient(to bottom, #e5ff9e 0%, #b8f084 100%)"
              // Abstieg
              if (team.best >= 16)
                return "linear-gradient(to bottom, #ff3019 0%, #c40404 100%)"
              return "none"
            })
          : []
      setColors(myColors)
    }
    function getFontColors() {
      const myFColors =
        Array.isArray(table) && table.length > 0
          ? table.map((team) => {
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
            })
          : []
      setFColors(myFColors)
    }
    getColors()
    getFontColors()
  }, [table])
  return (
    <header className="App-header">
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "250px 1fr",
          columnGap: "20px",
          height: "calc(100vh - 50px)"
        }}>
        {typeof matches === "object" && Object.keys(matches).length > 0 && (
          <>
            {Object.keys(matches).length > 0 && (
              <Matches
                matches={matches}
                selDay={queryParams.get("day")}
                source="/liga3/23-24"
              />
            )}
            {table.length > 0 && (
              <Table
                table={table}
                separators={separators}
                colors={colors}
                fontcolors={fcolors}
                isThird={true}
                variableSeparators={[]}
              />
            )}
          </>
        )}
      </div>
      <div
        sx={{ width: "100%", height: "50px", margin: 0, textAlign: "center" }}>
        <Link to="/">Zur Hauptseite</Link>
      </div>
    </header>
  )
}

export default Liga3_23_24
