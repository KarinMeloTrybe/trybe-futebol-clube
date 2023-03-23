import Team from '../database/models/Team';

const getAllTeams = async () => {
  const teams = await Team.findAll();
  return { type: null, message: teams };
};

const getTeamsById = async (id: string) => {
  const teams = await Team.findByPk(id);
  if (!teams) return { type: 'error', message: 'It was not possible to return your teams' };
  return { type: null, message: teams };
};

export default {
  getAllTeams,
  getTeamsById,
};
