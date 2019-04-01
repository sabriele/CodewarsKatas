/* Total amount of points (8 Kyu) */

const point = match => {
  const [homeTeam, awayTeam] = match.split(":");

  const homeTeamWin = homeTeam > awayTeam;
  const homeTeamLoss = homeTeam < awayTeam;

  if (homeTeamWin) return 3;
  if (homeTeamLoss) return 0;
  return 1;
};

const points = matches => {
  return matches
    .map(match => point(match))
    .reduce((acc, points) => acc + points, 0);
};

module.exports = { point, points };
