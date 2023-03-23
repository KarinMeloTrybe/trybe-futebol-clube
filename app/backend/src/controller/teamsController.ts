import { Request, Response } from 'express';
import teamsService from '../service/teamsService';

const getAllTeams = async (_request: Request, response: Response) => {
  const { message } = await teamsService.getAllTeams();
  return response.status(200).json(message);
};

const getTeamsById = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { type, message } = await teamsService.getTeamsById(id);
  if (!type) return response.status(200).json(message);
  return response.status(400).json({ message });
};

export default {
  getAllTeams,
  getTeamsById,
};
