/* eslint-disable max-lines */
const testMatches = [
  {
    id: 1,
    homeTeamId: 16,
    awayTeamId: 8,
    homeTeamGoals: 1,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'São Paulo',
    },
    awayTeam: {
      teamName: 'Grêmio',
    },
  },
  {
    id: 2,
    homeTeamId: 9,
    awayTeamId: 14,
    homeTeamGoals: 1,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Internacional',
    },
    awayTeam: {
      teamName: 'Santos',
    },
  },
  {
    id: 3,
    homeTeamId: 4,
    awayTeamId: 11,
    homeTeamGoals: 3,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Corinthians',
    },
    awayTeam: {
      teamName: 'Napoli-SC',
    },
  },
  {
    id: 4,
    homeTeamId: 3,
    awayTeamId: 2,
    homeTeamGoals: 0,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Botafogo',
    },
    awayTeam: {
      teamName: 'Bahia',
    },
  },
  {
    id: 5,
    homeTeamId: 7,
    awayTeamId: 10,
    homeTeamGoals: 1,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Flamengo',
    },
    awayTeam: {
      teamName: 'Minas Brasília',
    },
  },
  {
    id: 6,
    homeTeamId: 5,
    awayTeamId: 13,
    homeTeamGoals: 1,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Cruzeiro',
    },
    awayTeam: {
      teamName: 'Real Brasília',
    },
  },
  {
    id: 7,
    homeTeamId: 12,
    awayTeamId: 6,
    homeTeamGoals: 2,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Palmeiras',
    },
    awayTeam: {
      teamName: 'Ferroviária',
    },
  },
  {
    id: 8,
    homeTeamId: 15,
    awayTeamId: 1,
    homeTeamGoals: 0,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'São José-SP',
    },
    awayTeam: {
      teamName: 'Avaí/Kindermann',
    },
  },
  {
    id: 9,
    homeTeamId: 1,
    awayTeamId: 12,
    homeTeamGoals: 0,
    awayTeamGoals: 3,
    inProgress: false,
    homeTeam: {
      teamName: 'Avaí/Kindermann',
    },
    awayTeam: {
      teamName: 'Palmeiras',
    },
  },
  {
    id: 10,
    homeTeamId: 2,
    awayTeamId: 9,
    homeTeamGoals: 0,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Bahia',
    },
    awayTeam: {
      teamName: 'Internacional',
    },
  },
  {
    id: 11,
    homeTeamId: 13,
    awayTeamId: 3,
    homeTeamGoals: 1,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Real Brasília',
    },
    awayTeam: {
      teamName: 'Botafogo',
    },
  },
  {
    id: 12,
    homeTeamId: 6,
    awayTeamId: 4,
    homeTeamGoals: 0,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Ferroviária',
    },
    awayTeam: {
      teamName: 'Corinthians',
    },
  },
  {
    id: 13,
    homeTeamId: 8,
    awayTeamId: 5,
    homeTeamGoals: 2,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Grêmio',
    },
    awayTeam: {
      teamName: 'Cruzeiro',
    },
  },
  {
    id: 14,
    homeTeamId: 14,
    awayTeamId: 16,
    homeTeamGoals: 2,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Santos',
    },
    awayTeam: {
      teamName: 'São Paulo',
    },
  },
  {
    id: 15,
    homeTeamId: 10,
    awayTeamId: 15,
    homeTeamGoals: 0,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Minas Brasília',
    },
    awayTeam: {
      teamName: 'São José-SP',
    },
  },
  {
    id: 16,
    homeTeamId: 11,
    awayTeamId: 7,
    homeTeamGoals: 0,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Napoli-SC',
    },
    awayTeam: {
      teamName: 'Flamengo',
    },
  },
  {
    id: 17,
    homeTeamId: 1,
    awayTeamId: 8,
    homeTeamGoals: 2,
    awayTeamGoals: 3,
    inProgress: false,
    homeTeam: {
      teamName: 'Avaí/Kindermann',
    },
    awayTeam: {
      teamName: 'Grêmio',
    },
  },
  {
    id: 18,
    homeTeamId: 12,
    awayTeamId: 5,
    homeTeamGoals: 4,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Palmeiras',
    },
    awayTeam: {
      teamName: 'Cruzeiro',
    },
  },
  {
    id: 19,
    homeTeamId: 11,
    awayTeamId: 2,
    homeTeamGoals: 2,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Napoli-SC',
    },
    awayTeam: {
      teamName: 'Bahia',
    },
  },
  {
    id: 20,
    homeTeamId: 7,
    awayTeamId: 9,
    homeTeamGoals: 0,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Flamengo',
    },
    awayTeam: {
      teamName: 'Internacional',
    },
  },
  {
    id: 21,
    homeTeamId: 6,
    awayTeamId: 13,
    homeTeamGoals: 3,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Ferroviária',
    },
    awayTeam: {
      teamName: 'Real Brasília',
    },
  },
  {
    id: 22,
    homeTeamId: 4,
    awayTeamId: 3,
    homeTeamGoals: 3,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Corinthians',
    },
    awayTeam: {
      teamName: 'Botafogo',
    },
  },
  {
    id: 23,
    homeTeamId: 15,
    awayTeamId: 16,
    homeTeamGoals: 2,
    awayTeamGoals: 3,
    inProgress: false,
    homeTeam: {
      teamName: 'São José-SP',
    },
    awayTeam: {
      teamName: 'São Paulo',
    },
  },
  {
    id: 24,
    homeTeamId: 10,
    awayTeamId: 14,
    homeTeamGoals: 2,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Minas Brasília',
    },
    awayTeam: {
      teamName: 'Santos',
    },
  },
  {
    id: 25,
    homeTeamId: 2,
    awayTeamId: 6,
    homeTeamGoals: 0,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Bahia',
    },
    awayTeam: {
      teamName: 'Ferroviária',
    },
  },
  {
    id: 26,
    homeTeamId: 13,
    awayTeamId: 1,
    homeTeamGoals: 1,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Real Brasília',
    },
    awayTeam: {
      teamName: 'Avaí/Kindermann',
    },
  },
  {
    id: 27,
    homeTeamId: 5,
    awayTeamId: 15,
    homeTeamGoals: 1,
    awayTeamGoals: 2,
    inProgress: false,
    homeTeam: {
      teamName: 'Cruzeiro',
    },
    awayTeam: {
      teamName: 'São José-SP',
    },
  },
  {
    id: 28,
    homeTeamId: 16,
    awayTeamId: 7,
    homeTeamGoals: 3,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'São Paulo',
    },
    awayTeam: {
      teamName: 'Flamengo',
    },
  },
  {
    id: 29,
    homeTeamId: 9,
    awayTeamId: 4,
    homeTeamGoals: 0,
    awayTeamGoals: 4,
    inProgress: false,
    homeTeam: {
      teamName: 'Internacional',
    },
    awayTeam: {
      teamName: 'Corinthians',
    },
  },
  {
    id: 30,
    homeTeamId: 3,
    awayTeamId: 12,
    homeTeamGoals: 0,
    awayTeamGoals: 4,
    inProgress: false,
    homeTeam: {
      teamName: 'Botafogo',
    },
    awayTeam: {
      teamName: 'Palmeiras',
    },
  },
  {
    id: 31,
    homeTeamId: 8,
    awayTeamId: 10,
    homeTeamGoals: 2,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Grêmio',
    },
    awayTeam: {
      teamName: 'Minas Brasília',
    },
  },
  {
    id: 32,
    homeTeamId: 14,
    awayTeamId: 11,
    homeTeamGoals: 5,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Santos',
    },
    awayTeam: {
      teamName: 'Napoli-SC',
    },
  },
  {
    id: 33,
    homeTeamId: 1,
    awayTeamId: 16,
    homeTeamGoals: 1,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Avaí/Kindermann',
    },
    awayTeam: {
      teamName: 'São Paulo',
    },
  },
  {
    id: 34,
    homeTeamId: 9,
    awayTeamId: 6,
    homeTeamGoals: 3,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Internacional',
    },
    awayTeam: {
      teamName: 'Ferroviária',
    },
  },
  {
    id: 35,
    homeTeamId: 10,
    awayTeamId: 5,
    homeTeamGoals: 1,
    awayTeamGoals: 3,
    inProgress: false,
    homeTeam: {
      teamName: 'Minas Brasília',
    },
    awayTeam: {
      teamName: 'Cruzeiro',
    },
  },
  {
    id: 36,
    homeTeamId: 2,
    awayTeamId: 7,
    homeTeamGoals: 0,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Bahia',
    },
    awayTeam: {
      teamName: 'Flamengo',
    },
  },
  {
    id: 37,
    homeTeamId: 15,
    awayTeamId: 13,
    homeTeamGoals: 0,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'São José-SP',
    },
    awayTeam: {
      teamName: 'Real Brasília',
    },
  },
  {
    id: 38,
    homeTeamId: 14,
    awayTeamId: 4,
    homeTeamGoals: 2,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Santos',
    },
    awayTeam: {
      teamName: 'Corinthians',
    },
  },
  {
    id: 39,
    homeTeamId: 3,
    awayTeamId: 11,
    homeTeamGoals: 2,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Botafogo',
    },
    awayTeam: {
      teamName: 'Napoli-SC',
    },
  },
  {
    id: 40,
    homeTeamId: 12,
    awayTeamId: 8,
    homeTeamGoals: 4,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Palmeiras',
    },
    awayTeam: {
      teamName: 'Grêmio',
    },
  },
];

interface IMatch {
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

const getTotalPerformance = (matches: IMatch[]) => {
  const teamsPerformance = getPerformance(matches);

  let totalTeamPerformance: ITotalPerformance[] = [];

  teamsPerformance.forEach((team) => {
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

const getLeaderboard = (matches: IMatch[]): ILeaderboard[] => {
  const totalPerformance = getTotalPerformance(matches);
  const leaderboard = totalPerformance.map<ILeaderboard>((team) => ({
    name: team.name,
    totalPoints: (team.totalVictories * 3) + (team.totalDraws),
    totalGames: team.totalGames,
    totalVictories: team.totalVictories,
    totalDraws: team.totalDraws,
    totalLosses: team.totalLosses,
    goalsFavor: team.goalsFavor,
    goalsOwn: team.goalsOwn,
    goalsBalance: team.goalsFavor - team.goalsOwn,
    efficiency: ((((team.totalVictories * 3) + (team.totalDraws)) / (team.totalGames * 3)) * 100),
  }));
  return leaderboard.sort((a, b) => (
    b.totalPoints - a.totalPoints
    || b.totalVictories - a.totalVictories
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || b.goalsOwn - a.goalsOwn
  ));
};

console.log(getLeaderboard(testMatches));
