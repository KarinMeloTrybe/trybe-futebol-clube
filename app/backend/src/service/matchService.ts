import Match from '../database/models/Match';
import Team from '../database/models/Team';

const getAllMatches = async (inProgress?: string) => {
  const matches = await Match.findAll({
    include: [
      { model: Team, as: 'homeTeam', attributes: ['teamName'] },
      { model: Team, as: 'awayTeam', attributes: ['teamName'] },
    ],
    where: inProgress as 'true' | 'false' | undefined && {
      inProgress: inProgress === 'true',
    },
  });
  return { type: null, message: matches };
};

export default { getAllMatches };
