import { Request, Response } from 'express';
import loginService from '../service/loginService';
import UserInterface from '../interfaces/userInterface';

const newLogin = async (request: Request, response: Response) => {
  const { type, message } = await loginService.newLogin(request.body);
  if (!type) return response.status(200).json({ token: message });
  return response.status(401).json({ message });
};

const getRole = (request: Request & UserInterface, response: Response) => {
  const role = request.user && request.user.role;
  response.status(200).json({ role });
};

export default {
  newLogin,
  getRole,
};
