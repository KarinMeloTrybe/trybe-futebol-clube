import { Router } from 'express';
import loginController from '../controller/loginController';
import { validationEmail, validationPassword } from '../middlewares/loginMiddlewares';
import validationToken from '../middlewares/tokenMiddlewares';

const loginRoute = Router();

loginRoute.post('/', validationEmail, validationPassword, loginController.newLogin);

loginRoute.get('/role', validationToken, loginController.getRole);

export default loginRoute;
