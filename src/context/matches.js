const matches = [
  ["FCH", "KSC"],
  ["HSV", "BRA"],
  ["H96", "FCN"],
  ["AUE", "OSN"],
  ["BOC", "SVS"],
  ["FÜR", "DÜS"],
  ["KIE", "D98"],
  ["REG", "STP"],
  ["WÜR", "SCP"],
]

const newMatches = matches.map(match => {
  const [home, away] = match 
  return { home, away, homeGoals: 0, awayGoals: 0}
})

export default newMatches