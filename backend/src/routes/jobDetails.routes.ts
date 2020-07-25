import { Router } from 'express';

import JobDetailsController from '../controllers/JobDetailsController';

const jobDetailsRouter = Router();
const jobDetailsControllerRouter = new JobDetailsController();

jobDetailsRouter.get('/:id', jobDetailsControllerRouter.index);

export default jobDetailsRouter;
