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

function WLiga2_22_23({ title }: Props) {
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
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3500"
        : "https://buli-api.vercel.app"
    const url = baseUrl + "/liga2women?season=2022-23"
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
              navigate(`/wliga2/22-23?day=${Number(sortedKeys[0])}`)
            }
          }
        }
      })
  }, [])
  const separators = [1, 9]
  useEffect(() => {
    const teams = table.map((tm: Club) => tm.team)
    const secondTeams = teams.filter((tm) => tm.endsWith("2"))
    const secondTeamsPlaces = secondTeams.map((team) => teams.indexOf(team))
    const numberIndexesFirst = secondTeamsPlaces.reduce((acc, curr) => {
      if (curr <= separators[0]) acc++
      return acc
    }, 0)
    const aufstieg = separators[0] + numberIndexesFirst
    function getColors() {
      const myColors =
        Array.isArray(table) && table.length > 0
          ? table.map((team: Club) => {
              // Aufsteiger
              if (team.worst <= aufstieg)
                return "linear-gradient(to bottom, #e6f0a3 0%, #d2e638 50%, #c3d825 51%, #dbf043 100%)"
              // Klassenerhalt
              if (team.worst <= 9)
                return "linear-gradient(to bottom, #e5ff9e 0%, #b8f084 100%)"
              // Abstieg
              if (team.best >= 10)
                return "linear-gradient(to bottom, #ff3019 0%, #c40404 100%)"
              return "none"
            })
          : []
      setColors(myColors)
    }
    function getFontColors() {
      const myFColors =
        Array.isArray(table) && table.length > 0
          ? table.map((team: Club) => {
              // Aufstieg
              if (team.worst === aufstieg) return "black"
              // Klassenerhalt
              if (team.worst <= 9) return "black"
              // Abstieg
              if (team.best >= 10) return "white"
              return "black"
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
                source="/wliga2/22-23"
              />
            )}
            {table.length > 0 && (
              <Table
                table={table}
                separators={separators}
                colors={colors}
                fontcolors={fcolors}
                isThird={true}
                variableSeparators={[0]}
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

export default WLiga2_22_23
