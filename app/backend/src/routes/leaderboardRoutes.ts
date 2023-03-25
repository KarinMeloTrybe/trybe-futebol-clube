import { Router } from 'express';
import leaderboardController from '../controller/leaderboardController';

const leaderboardRoute = Router();

leaderboardRoute.get('/home', leaderboardController.getPerformanceTeams);

export default leaderboardRoute;
