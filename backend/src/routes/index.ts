import express from 'express';

import usersRouter from './users.routes';
import cardsRouter from './cards.routes';

const routes = express.Router();

routes.use('/users', usersRouter);
routes.use('/cards', cardsRouter);

export default routes;
