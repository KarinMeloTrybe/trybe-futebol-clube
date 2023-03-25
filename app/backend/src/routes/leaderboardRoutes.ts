import { Router } from 'express';
import leaderboardController from '../controller/leaderboardController';

const leaderboardRoute = Router();

leaderboardRoute.get('/', leaderboardController.getPerformance);
leaderboardRoute.get('/home', leaderboardController.getPerformanceHome);
leaderboardRoute.get('/away', leaderboardController.getPerformanceAway);

export default leaderboardRoute;
