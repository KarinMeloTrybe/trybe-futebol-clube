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

const finishMatch = async (id: string) => {
  const matchExist = await Match.findOne({
    where: { id: Number(id) },
  });
  if (matchExist) {
    await Match.update({ inProgress: false }, { where: { id: Number(id) } });
    return { type: null, message: 'Finished' };
  }
  return { type: 'Not Found', message: 'Not found' };
};

const editMatch = async (
  id: string,
  homeTeamGoals: string,
  awayTeamGoals: string,
) => {
  await Match.update({
    homeTeamGoals, awayTeamGoals }, { where: { id: Number(id) } });
  return { type: null, message: { homeTeamGoals, awayTeamGoals } };
};

const newMatch = async (
  homeTeamId: string,
  awayTeamId: string,
  homeTeamGoals: string,
  awayTeamGoals: string,
) => {
  try {
    const createdMatch = await Match.create({
      homeTeamId,
      awayTeamId,
      homeTeamGoals,
      awayTeamGoals,
      inProgress: true,
    });
    return { type: null, message: createdMatch.dataValues };
  } catch (error) {
    return { type: error, message: 'There is no team with such id!' };
  }
};

export default {
  getAllMatches,
  finishMatch,
  editMatch,
  newMatch,
};
