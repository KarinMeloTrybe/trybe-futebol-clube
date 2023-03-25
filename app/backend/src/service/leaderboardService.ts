import Team from '../database/models/Team';
import Match from '../database/models/Match';

const getPerformanceTeams = async () => {
  const matches = await Match.findAll({
    where: { inProgress: false },
    include: [
      { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
      { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
    ],
  });
  console.log(matches);
  return { type: null, message: matches };
};

export default { getPerformanceTeams };
