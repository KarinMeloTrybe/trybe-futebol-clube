import { Router } from 'express';
import validationToken from '../middlewares/tokenMiddlewares';
import matchController from '../controller/matchController';

const matchRoute = Router();

matchRoute.get('/', matchController.getAllMatches);

matchRoute.patch('/:id/finish', validationToken, matchController.finishMatch);

matchRoute.patch('/:id', validationToken, matchController.editMatch);

export default matchRoute;
