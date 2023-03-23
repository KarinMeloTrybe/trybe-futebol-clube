import { Request, Response } from 'express';
import matchService from '../service/matchService';

const getAllMatches = async (_request: Request, response: Response) => {
  const { message } = await matchService.getAllMatches();
  return response.status(200).json(message);
};

export default { getAllMatches };
