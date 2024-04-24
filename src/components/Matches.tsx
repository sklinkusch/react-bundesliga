/** @jsxImportSource theme-ui */
import React from "react"
import { useNavigate } from "react-router-dom"
import Logo from "./Logo"

type MatchProps = {
  teams: string[]
  goals: (number | null)[]
  date?: string
  live?: boolean
  remark?: string
}

type Props = {
  matches: { [key: string]: MatchProps[] }
  selDay: string | null
  source: string
}

const Match = ({
  teams,
  goals,
  date = undefined,
  live = undefined,
  remark = undefined
}: MatchProps) => {
  const teamColumn = { flexBasis: "50px", flexGrow: 0, flexShrink: 0 }
  const formattedDate = date
    ? /^[\d]{4}-[\d]{2}-[\d]{2}T[\d]{2}:[\d]{2}(:[\d]{2})?Z/.test(date)
      ? new Date(date).toLocaleString("de-DE", {
          timeZone: "Europe/Berlin",
          year: "numeric",
          month: "long",
          day: "2-digit",
          weekday: "short",
          hour: "2-digit",
          minute: "2-digit"
        })
      : date
    : undefined
  const [home, away] = teams
  const [hgoals, agoals] = goals
  if (date && typeof hgoals === "number" && typeof agoals === "number") {
    return (
      <div>
        <div
          sx={{
            fontSize: "0.8em",
            lineHeight: "1.15",
            width: "100%",
            textAlign: "left"
          }}>
          {formattedDate}
        </div>
        <div
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
          <span sx={teamColumn}>
            <Logo code={home} />
          </span>
          <span
            sx={{
              flexBasis: "100px",
              flexGrow: 1,
              flexShrink: 0,
              textAlign: "center",
              color: live ? "blue" : "black",
              fontWeight: live ? "bold" : "normal"
            }}>
            {`${hgoals}:${agoals}`}
          </span>
          <span sx={teamColumn}>
            <Logo code={away} />
          </span>
        </div>
      </div>
    )
  } else if (
    !date &&
    typeof hgoals === "number" &&
    typeof agoals === "number"
  ) {
    return (
      <div>
        <div
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
          <span sx={teamColumn}>
            <Logo code={home} />
          </span>
          <span
            sx={{
              flexBasis: "100px",
              flexGrow: 1,
              flexShrink: 0,
              textAlign: "center",
              color: live ? "blue" : "black",
              fontWeight: live ? "bold" : "normal"
            }}>
            {`${hgoals}:${agoals}`}
          </span>
          <span sx={teamColumn}>
            <Logo code={away} />
          </span>
        </div>
      </div>
    )
  } else if (date && remark) {
    return (
      <div>
        <div
          sx={{
            fontSize: "0.8em",
            lineHeight: "1.15",
            width: "100%",
            textAlign: "left"
          }}>
          {formattedDate}
        </div>
        <div
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
          <span sx={teamColumn}>
            <Logo code={home} />
          </span>
          <span
            sx={{
              flexBasis: "100px",
              flexGrow: 1,
              flexShrink: 0,
              textAlign: "center"
            }}>
            {remark}
          </span>
          <span sx={teamColumn}>
            <Logo code={away} />
          </span>
        </div>
      </div>
    )
  } else if (date) {
    return (
      <div>
        <div
          sx={{
            fontSize: "0.8em",
            lineHeight: "1.15",
            width: "100%",
            textAlign: "left"
          }}>
          {formattedDate}
        </div>
        <div
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
          <span sx={teamColumn}>
            <Logo code={home} />
          </span>
          <span
            sx={{
              flexBasis: "100px",
              flexGrow: 1,
              flexShrink: 0,
              textAlign: "center"
            }}>
            -:-
          </span>
          <span sx={teamColumn}>
            <Logo code={away} />
          </span>
        </div>
      </div>
    )
  } else if (remark) {
    return (
      <div>
        <div
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
          <span sx={teamColumn}>
            <Logo code={home} />
          </span>
          <span
            sx={{
              flexBasis: "100px",
              flexGrow: 1,
              flexShrink: 0,
              textAlign: "center"
            }}>
            {remark}
          </span>
          <span sx={teamColumn}>
            <Logo code={away} />
          </span>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
          }}>
          <span sx={teamColumn}>
            <Logo code={home} />
          </span>
          <span
            sx={{
              flexBasis: "100px",
              flexGrow: 1,
              flexShrink: 0,
              textAlign: "center"
            }}>
            -:-
          </span>
          <span sx={teamColumn}>
            <Logo code={away} />
          </span>
        </div>
      </div>
    )
  }
}

const Matches = ({ matches, selDay, source }: Props) => {
  const navigate = useNavigate()
  const onSelectDay = (event: any) => {
    const value = event.target.value
    navigate(`${source}?day=${value}`)
  }
  const dayGoals = Object.keys(matches)
    .sort((a, b) => Number(a) - Number(b))
    .map((day) =>
      matches[day].reduce((sum, match) => {
        if (
          typeof match.goals[0] === "number" &&
          typeof match.goals[1] === "number"
        ) {
          return sum + match.goals[0] + match.goals[1]
        }
        return sum
      }, 0)
    )
  const minZeroDay = dayGoals.indexOf(0)
  const maxDay = minZeroDay > -1 ? minZeroDay + 1 : dayGoals.length
  // const teamColumn = { flexBasis: "50px", flexGrow: 0, flexShrink: 0 }
  return (
    <div sx={{ maxHeight: "100vh", overflowY: "auto" }}>
      <select onChange={onSelectDay} value={selDay ? selDay : maxDay}>
        {Object.keys(matches).map((key) => {
          return (
            <option
              key={`${key}`}
              value={`${key}`}>{`${key}. Spieltag`}</option>
          )
        })}
      </select>
      <div>
        <h5 sx={{ margin: 0 }}>
          {typeof selDay === "string" && /^\d+$/.test(selDay) ? selDay : "1"}.
          Spieltag
        </h5>
        {matches[
          typeof selDay === "string" && /^\d+$/.test(selDay) ? selDay : "1"
        ].map((match: MatchProps, index: number) => {
          const {
            teams = [],
            goals = [],
            live = false,
            date = undefined,
            remark = undefined
          } = match
          const [home = null, away = null] = teams
          return (
            <Match
              key={`${home}-${away}-${index}`}
              teams={teams}
              goals={goals}
              live={live}
              date={date}
              remark={remark}
            />
          )
          // const [homeGoals = null, awayGoals = null] = goals
          // if (typeof homeGoals === "number" && typeof awayGoals === "number") {
          //   return (
          //     <div
          //       sx={{
          //         display: "flex",
          //         flexDirection: "row",
          //         width: "100%",
          //         justifyContent: "space-between"
          //       }}
          //       key={`${home}-${away}-${index}`}>
          //       {home ? (
          //         <div sx={teamColumn}>
          //           <Logo code={home} />
          //         </div>
          //       ) : (
          //         <div sx={teamColumn}>&nbsp;</div>
          //       )}
          //       <span
          //         sx={{
          //           flexBasis: "100px",
          //           flexGrow: 1,
          //           flexShrink: 0,
          //           textAlign: "center",
          //           color: live ? "blue" : "black",
          //           fontWeight: live ? "bold" : "normal"
          //         }}>{`${homeGoals}:${awayGoals}`}</span>
          //       {away ? (
          //         <div sx={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}>
          //           <Logo code={away} />
          //         </div>
          //       ) : (
          //         <div sx={teamColumn}>&nbsp;</div>
          //       )}
          //     </div>
          //   )
          // }
          // if (
          //   homeGoals == null &&
          //   awayGoals == null &&
          //   typeof remark === "string"
          // ) {
          //   return (
          //     <div
          //       sx={{
          //         display: "flex",
          //         flexDirection: "row",
          //         width: "100%",
          //         justifyContent: "space-between"
          //       }}
          //       key={`${home}-${away}-${index}`}>
          //       {home ? (
          //         <div sx={teamColumn}>
          //           <Logo code={home} />
          //         </div>
          //       ) : (
          //         <div sx={teamColumn}>&nbsp;</div>
          //       )}
          //       <span sx={{ flexBasis: "100px", flexGrow: 1, flexShrink: 0 }}>
          //         {remark}
          //       </span>
          //       {away ? (
          //         <div sx={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}>
          //           <Logo code={away} />
          //         </div>
          //       ) : (
          //         <div sx={teamColumn}>&nbsp;</div>
          //       )}
          //     </div>
          //   )
          // }
          // if (
          //   homeGoals == null &&
          //   awayGoals == null &&
          //   typeof date === "string"
          // ) {
          //   if (/^[0-9]{1,2}.[0-9]{1,2}.[0-9]{2}$/.test(date)) {
          //     return (
          //       <div
          //         sx={{
          //           display: "flex",
          //           flexDirection: "row",
          //           width: "100%",
          //           justifyContent: "space-between"
          //         }}
          //         key={`${home}-${away}-${index}`}>
          //         {home ? (
          //           <div sx={teamColumn}>
          //             <Logo code={home} />
          //           </div>
          //         ) : (
          //           <div sx={teamColumn}>&nbsp;</div>
          //         )}
          //         <span sx={{ flexBasis: "100px", flexGrow: 1, flexShrink: 0 }}>
          //           {date}
          //         </span>
          //         {away ? (
          //           <div sx={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}>
          //             <Logo code={away} />
          //           </div>
          //         ) : (
          //           <div sx={teamColumn}>&nbsp;</div>
          //         )}
          //       </div>
          //     )
          //   } else if (
          //     /^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}/.test(date)
          //   ) {
          //     const formattedDate = new Date(date).toLocaleString("de-DE", {
          //       timeZone: "Europe/Berlin",
          //       year: "2-digit",
          //       month: "2-digit",
          //       day: "2-digit",
          //       hour: "2-digit",
          //       minute: "2-digit"
          //     })
          //     return (
          //       <div
          //         sx={{
          //           display: "flex",
          //           flexDirection: "row",
          //           width: "100%",
          //           justifyContent: "space-between"
          //         }}
          //         key={`${home}-${away}-${index}`}>
          //         {home ? (
          //           <div sx={teamColumn}>
          //             <Logo code={home} />
          //           </div>
          //         ) : (
          //           <div sx={teamColumn}>&nbsp;</div>
          //         )}
          //         <span sx={{ flexBasis: "100px", flexGrow: 1, flexShrink: 0 }}>
          //           {formattedDate}
          //         </span>
          //         {away ? (
          //           <div sx={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}>
          //             <Logo code={away} />
          //           </div>
          //         ) : (
          //           <div sx={teamColumn}>&nbsp;</div>
          //         )}
          //       </div>
          //     )
          //   }
          // }
          // return (
          //   <div
          //     sx={{
          //       display: "flex",
          //       flexDirection: "row",
          //       width: "100%",
          //       justifyContent: "space-between"
          //     }}
          //     key={`${home}-${away}-${index}`}>
          //     {home ? (
          //       <div sx={teamColumn}>
          //         <Logo code={home} />
          //       </div>
          //     ) : (
          //       <div sx={teamColumn}>&nbsp;</div>
          //     )}
          //     <span sx={{ flexBasis: "100px", flexGrow: 1, flexShrink: 0 }}>
          //       &nbsp;
          //     </span>
          //     {away ? (
          //       <div sx={{ flexBasis: "50px", flexGrow: 0, flexShrink: 0 }}>
          //         <Logo code={away} />
          //       </div>
          //     ) : (
          //       <div sx={teamColumn}>&nbsp;</div>
          //     )}
          //   </div>
          // )
        })}
      </div>
    </div>
  )
}

export default Matches
