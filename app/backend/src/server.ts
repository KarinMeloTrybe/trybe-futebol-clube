import { App } from './app';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 3001;

/* const PORT = 3004; */

new App().start(PORT);
