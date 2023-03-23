import { Router } from 'express';
import TeamController from '../controller/teamsController';

const teamsRoute = Router();

teamsRoute.get('/', TeamController.getAllTeams);

teamsRoute.get('/:id', TeamController.getTeamsById);

export default teamsRoute;
