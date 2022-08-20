import teams from "./teams.json"

export function getTeamName (code) {
  return teams[code]
}