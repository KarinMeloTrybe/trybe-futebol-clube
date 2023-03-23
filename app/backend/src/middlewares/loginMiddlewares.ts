import { NextFunction, Request, Response } from 'express';

const message = 'Invalid email or password';
const validationPassword = (request: Request, response: Response, next: NextFunction) => {
  const { password } = request.body;
  if (!password) {
    return response.status(400).json({ message: 'All fields must be filled' });
  }
  if (typeof password !== 'string' || password.length < 6) {
    return response.status(401).json({ message });
  }
  return next();
};

const validationEmail = (request: Request, response: Response, next: NextFunction) => {
  const { email } = request.body;
  const regex = /\S+@\S+\.\S+/i;
  if (!email) {
    return response.status(400).json({ message: 'All fields must be filled' });
  }
  if (typeof email !== 'string' || !regex.test(email)) {
    return response.status(401).json({ message });
  }
  return next();
};

export {
  validationPassword,
  validationEmail,
};
