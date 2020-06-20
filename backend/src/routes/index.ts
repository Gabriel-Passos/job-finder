import express from 'express';

import companiesRouter from './companies.routes';
import jobsDetailsRouter from './jobsDetails.routes';

const routes = express.Router();

routes.use('/companies', companiesRouter);
routes.use('/job-details', jobsDetailsRouter);

export default routes;
