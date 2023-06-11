/** @jsxImportSource theme-ui */
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from "./Logo"

type Match = {
  teams: string[]
  goals: (number | null)[]
  date?: string
  live?: boolean
  remark?: string
}

type Props = {
  matches: { [key: number]: Match[] }
  selDay: number
  source: string
}

const Matches = ({ matches, selDay, source }: Props) => {
  const [selectedDay, setSelectedDay] = useState(selDay || 1)
  const navigate = useNavigate()
  const onSelectDay = (event: any) => {
    const value = event.target.value
    setSelectedDay(value)
    navigate(`${source}?day=${value}`)
  }
  const teamColumn = { flexBasis: "50px", flexGrow: 0, flexShrink: 0 }
  return (
    <div sx={{ maxHeight: "100vh", overflowY: "auto" }}>
      <select onChange={onSelectDay} defaultValue={selectedDay}>
        {Object.keys(matches).map((key) => (
          <option key={key} value={key}>{`${key}. Spieltag`}</option>
        ))}
      </select>
      <div>
        <h5 sx={{ margin: 0 }}>{selectedDay}. Spieltag</h5>
        {matches[selectedDay].map((match: Match, index: number) => {
          const {
            teams = [],
            goals = [],
            live = false,
            date = null,
            remark = null
          } = match
          const [home = null, away = null] = teams
          const [homeGoals = null, awayGoals = null] = goals
          if (typeof homeGoals === "number" && typeof awayGoals === "number") {
            return (
              <div
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between"
                }}
                key={`${home}-${away}-${index}`}>
                {home ? (
                  <div sx={teamColumn}>
                    <Logo code={home} />
                  </div>
                ) : (
                  <div sx={teamColumn}>&nbsp;</div>
                )}
                <span
                  sx={{
                    flexBasis: "100px",
                    flexGrow: 1,
                    flexShrink: 0,
                    textAlign: "center",
                    color: live ? "blue" : "black",
                    fontWeight: live ? "bold" : "normal"
                  }}>{`${homeGoals}:${awayGoals}`}</span>
                {away ? (
                  <div sx={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}>
                    <Logo code={away} />
                  </div>
                ) : (
                  <div sx={teamColumn}>&nbsp;</div>
                )}
              </div>
            )
          }
          if (
            homeGoals == null &&
            awayGoals == null &&
            typeof remark === "string"
          ) {
            return (
              <div
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between"
                }}
                key={`${home}-${away}-${index}`}>
                {home ? (
                  <div sx={teamColumn}>
                    <Logo code={home} />
                  </div>
                ) : (
                  <div sx={teamColumn}>&nbsp;</div>
                )}
                <span sx={{ flexBasis: "100px", flexGrow: 1, flexShrink: 0 }}>
                  {remark}
                </span>
                {away ? (
                  <div sx={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}>
                    <Logo code={away} />
                  </div>
                ) : (
                  <div sx={teamColumn}>&nbsp;</div>
                )}
              </div>
            )
          }
          if (
            homeGoals == null &&
            awayGoals == null &&
            typeof date === "string"
          ) {
            if (/^[0-9]{1,2}.[0-9]{1,2}.[0-9]{2}$/.test(date)) {
              return (
                <div
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between"
                  }}
                  key={`${home}-${away}-${index}`}>
                  {home ? (
                    <div sx={teamColumn}>
                      <Logo code={home} />
                    </div>
                  ) : (
                    <div sx={teamColumn}>&nbsp;</div>
                  )}
                  <span sx={{ flexBasis: "100px", flexGrow: 1, flexShrink: 0 }}>
                    {date}
                  </span>
                  {away ? (
                    <div sx={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}>
                      <Logo code={away} />
                    </div>
                  ) : (
                    <div sx={teamColumn}>&nbsp;</div>
                  )}
                </div>
              )
            } else if (
              /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}/.test(date)
            ) {
              const formattedDate = new Date(date).toLocaleString("de-DE", {
                timeZone: "Europe/Berlin",
                year: "2-digit",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit"
              })
              return (
                <div
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between"
                  }}
                  key={`${home}-${away}-${index}`}>
                  {home ? (
                    <div sx={teamColumn}>
                      <Logo code={home} />
                    </div>
                  ) : (
                    <div sx={teamColumn}>&nbsp;</div>
                  )}
                  <span sx={{ flexBasis: "100px", flexGrow: 1, flexShrink: 0 }}>
                    {formattedDate}
                  </span>
                  {away ? (
                    <div sx={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}>
                      <Logo code={away} />
                    </div>
                  ) : (
                    <div sx={teamColumn}>&nbsp;</div>
                  )}
                </div>
              )
            }
          }
          return (
            <div
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between"
              }}
              key={`${home}-${away}-${index}`}>
              {home ? (
                <div sx={teamColumn}>
                  <Logo code={home} />
                </div>
              ) : (
                <div sx={teamColumn}>&nbsp;</div>
              )}
              <span sx={{ flexBasis: "100px", flexGrow: 1, flexShrink: 0 }}>
                &nbsp;
              </span>
              {away ? (
                <div sx={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}>
                  <Logo code={away} />
                </div>
              ) : (
                <div sx={teamColumn}>&nbsp;</div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Matches
