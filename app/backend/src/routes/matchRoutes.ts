import { Router } from 'express';
import matchController from '../controller/matchController';

const matchRoute = Router();

matchRoute.get('/', matchController.getAllMatches);

export default matchRoute;
