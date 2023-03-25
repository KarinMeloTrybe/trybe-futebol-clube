import { Request, Response } from 'express';
import leaderboardService from '../service/leaderboardService';

const getPerformanceTeams = async (_request: Request, response: Response) => {
  const { message } = await leaderboardService.getPerformanceTeams();
  return response.status(200).json(message);
};

export default { getPerformanceTeams };
