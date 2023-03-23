import Match from '../database/models/Match';

const getAllMatches = async () => {
  const matches = await Match.findAll();
  return { type: null, message: matches };
};

export default { getAllMatches };
