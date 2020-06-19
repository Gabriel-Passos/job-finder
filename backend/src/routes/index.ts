import express from 'express';

import companiesRouter from './companies.routes';
import cardsRouter from './cards.routes';

const routes = express.Router();

routes.use('/companies', companiesRouter);
routes.use('/cards', cardsRouter);

export default routes;
