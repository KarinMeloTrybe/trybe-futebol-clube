import { Request, Response } from 'express';
import matchService from '../service/matchService';

const getAllMatches = async (request: Request, response: Response) => {
  const { inProgress } = request.query;
  const { message } = await matchService.getAllMatches(inProgress as string | undefined);
  return response.status(200).json(message);
};

export default { getAllMatches };
