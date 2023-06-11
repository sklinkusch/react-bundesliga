import teams from "./teams.json"

const teamNames: { [key: string]: string } = Object.assign({}, teams)

export function getTeamName(code: string) {
  return teamNames[code]
}
