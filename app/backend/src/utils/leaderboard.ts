export interface IMatch {
  id: number,
  homeTeamId: number,
  awayTeamId: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  inProgress: boolean,
  homeTeam: {
    teamName: string,
  },
  awayTeam: {
    teamName: string,
  }
}

interface ILeaderboard {
  name: string, // retirado de awayTeam.teamName ou homeTeam.teamName
  totalPoints: number, // será retiraldo do saldo de vitórias, empates e derrotas, levando em consideração o numero de pontos de cada situação
  totalGames: number, // é a soma de todas as vitórias, derrotas e empates de um time, levando em consideração que as vitorias derrotas e empates são definidas pelo saldo de gols
  totalVictories: number, // é a soma de vitórias de um time, e essas vitórias são definidas pelo numero de gols numa partida
  totalDraws: number, // é a soma do numero de situações em que os dois times possuem o mesmo numero de gols
  totalLosses: number, // é a soma do número de vezes em que um time teve menos gols que o adversário
  goalsFavor: number, // é a soma dos gols feitos pelo time
  goalsOwn: number, // é a soma de gols feitos pelo adversário do time
  goalsBalance: number,
  efficiency: number,
}

interface IPerformance {
  name: string,
  id: number,
  goalsFavor: number,
  goalsOwn: number,
  victory: 1 | 0,
  loss: 1 | 0,
  draw: 1 | 0,
  matchLocation: 'home' | 'away',
}

interface ITotalPerformance {
  name: string,
  id: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
}

const getAwayPerformance = (match: IMatch): IPerformance => ({
  name: match.awayTeam.teamName,
  id: match.awayTeamId,
  goalsFavor: match.awayTeamGoals,
  goalsOwn: match.homeTeamGoals,
  victory: match.awayTeamGoals > match.homeTeamGoals ? 1 : 0,
  loss: match.awayTeamGoals < match.homeTeamGoals ? 1 : 0,
  draw: match.awayTeamGoals === match.homeTeamGoals ? 1 : 0,
  matchLocation: 'away',
});

const getHomePerformance = (match: IMatch): IPerformance => ({
  name: match.homeTeam.teamName,
  id: match.homeTeamId,
  goalsFavor: match.homeTeamGoals,
  goalsOwn: match.awayTeamGoals,
  victory: match.homeTeamGoals > match.awayTeamGoals ? 1 : 0,
  loss: match.homeTeamGoals < match.awayTeamGoals ? 1 : 0,
  draw: match.homeTeamGoals === match.awayTeamGoals ? 1 : 0,
  matchLocation: 'home',
});

const getPerformance = (matches: IMatch[]) => {
  const teams: IPerformance[] = [];
  matches.forEach((match) => {
    teams.push(getAwayPerformance(match));
    teams.push(getHomePerformance(match));
  });
  return teams;
};

const newMatch: ITotalPerformance = {
  name: '',
  id: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  totalDraws: 0,
  totalGames: 0,
  totalLosses: 0,
  totalVictories: 0,
};

const filterLocation = (teamPerformance: IPerformance[], location?: 'home' | 'away') => {
  if (!location) {
    return teamPerformance;
  }

  return teamPerformance.filter((team) => (
    team.matchLocation === location
  ));
};

const sumPerformance = (
  lastTeamPerformance: ITotalPerformance,
  currentTeamPerformance: IPerformance,
) => ({
  name: currentTeamPerformance.name,
  id: currentTeamPerformance.id,
  goalsFavor: lastTeamPerformance.goalsFavor + currentTeamPerformance.goalsFavor,
  goalsOwn: lastTeamPerformance.goalsOwn + currentTeamPerformance.goalsOwn,
  totalVictories: lastTeamPerformance.totalVictories + currentTeamPerformance.victory,
  totalLosses: lastTeamPerformance.totalLosses + currentTeamPerformance.loss,
  totalDraws: lastTeamPerformance.totalDraws + currentTeamPerformance.draw,
  totalGames: lastTeamPerformance.totalGames + 1,
});

const getTotalPerformance = (matches: IMatch[], location?: 'home' | 'away') => {
  const teamsPerformance = getPerformance(matches);

  const filteredPerformance = filterLocation(teamsPerformance, location);

  let totalTeamPerformance: ITotalPerformance[] = [];

  filteredPerformance.forEach((team) => {
    const lastTeamPerformance = totalTeamPerformance.find((lastTeam) => (
      lastTeam.id === team.id
    )) || newMatch;

    const teamPerformance: ITotalPerformance = sumPerformance(lastTeamPerformance, team);
    totalTeamPerformance = totalTeamPerformance.filter((lastTeam) => (
      lastTeam.id !== team.id
    ));

    totalTeamPerformance.push(teamPerformance);
  });

  return totalTeamPerformance;
};

const getLeaderboard = (matches: IMatch[], location?: 'home' | 'away'): ILeaderboard[] => {
  const totalPerformance = getTotalPerformance(matches, location);

  const leaderboard = totalPerformance.map<ILeaderboard>(({ id: _, ...team }) => ({
    ...team,
    totalPoints: (team.totalVictories * 3) + (team.totalDraws),
    goalsBalance: team.goalsFavor - team.goalsOwn,
    efficiency: Number(
      (
        (((team.totalVictories * 3) + (team.totalDraws)) / (team.totalGames * 3)) * 100
      ).toFixed(2),
    ),
  }));

  return leaderboard.sort((a, b) => (
    b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || a.goalsOwn - b.goalsOwn
  ));
};

export default getLeaderboard;
