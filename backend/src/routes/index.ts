import express from 'express';

import companiesRouter from './companies.routes';
import jobsRouter from './jobs.routes';
import jobDetailsRouter from './jobDetails.routes';

const routes = express.Router();

routes.use('/companies', companiesRouter);
routes.use('/jobs', jobsRouter);
routes.use('/job-details', jobDetailsRouter);

export default routes;
