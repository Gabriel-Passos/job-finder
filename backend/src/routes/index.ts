import express from 'express';

import companiesRouter from './companies.routes';
import jobsRouter from './jobs.routes';
// import sessionRouter from './session.routes';

const routes = express.Router();

routes.use('/companies', companiesRouter);
routes.use('/jobs', jobsRouter);
// routes.use('/sessions', sessionRouter);

export default routes;
