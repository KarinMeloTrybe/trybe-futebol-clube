import Team from '../database/models/Team';
import Match from '../database/models/Match';
import getLeaderboard, { IMatch } from '../utils/leaderboard';

const getPerformance = async () => {
  const matches = await Match.findAll({
    where: { inProgress: false },
    include: [
      { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
      { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
    ],
  }) as unknown as IMatch[];

  const leaderboard = getLeaderboard(matches);

  return { type: null, message: leaderboard };
};

const getPerformanceHome = async () => {
  const matches = await Match.findAll({
    where: { inProgress: false },
    include: [
      { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
      { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
    ],
  }) as unknown as IMatch[];

  const leaderboard = getLeaderboard(matches, 'home');

  return { type: null, message: leaderboard };
};

const getPerformanceAway = async () => {
  const matches = await Match.findAll({
    where: { inProgress: false },
    include: [
      { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
      { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
    ],
  }) as unknown as IMatch[];

  const leaderboard = getLeaderboard(matches, 'away');

  return { type: null, message: leaderboard };
};

export default {
  getPerformance,
  getPerformanceHome,
  getPerformanceAway,
};
