import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import UserInterface from '../interfaces/userInterface';

const validationToken = async (
  request: Request & UserInterface,
  response: Response,
  next: NextFunction,
) => {
  const token = request.header('authorization');
  if (!token) return response.status(401).json({ message: 'Token not found' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || '');
    request.user = decoded as UserInterface['user'];
    return next();
  } catch (error) {
    return response.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validationToken;
