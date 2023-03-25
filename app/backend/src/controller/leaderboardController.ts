import { Request, Response } from 'express';
import leaderboardService from '../service/leaderboardService';

const getPerformance = async (_request: Request, response: Response) => {
  const { message } = await leaderboardService.getPerformance();
  return response.status(200).json(message);
};

const getPerformanceHome = async (_request: Request, response: Response) => {
  const { message } = await leaderboardService.getPerformanceHome();
  return response.status(200).json(message);
};

const getPerformanceAway = async (_request: Request, response: Response) => {
  const { message } = await leaderboardService.getPerformanceAway();
  return response.status(200).json(message);
};

export default {
  getPerformance,
  getPerformanceHome,
  getPerformanceAway,
};
