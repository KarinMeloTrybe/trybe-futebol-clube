import { Request, Response } from 'express';
import matchService from '../service/matchService';

const getAllMatches = async (request: Request, response: Response) => {
  const { inProgress } = request.query;
  const { message } = await matchService.getAllMatches(inProgress as string | undefined);
  return response.status(200).json(message);
};

const finishMatch = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { type, message } = await matchService.finishMatch(id);
  if (!type) {
    return response.status(200).json({ message: 'Finished' });
  }
  return response.status(404).json({ message });
};

const editMatch = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { homeTeamGoals, awayTeamGoals } = request.body;
  const { type, message } = await matchService.editMatch(id, homeTeamGoals, awayTeamGoals);
  if (!type) {
    return response.status(200).json({ message });
  }
  return response.status(404).json({ message });
};

export default {
  getAllMatches,
  finishMatch,
  editMatch,
};
