import { Router } from 'express';

import JobsController from '../controllers/JobsController';

const jobsRouter = Router();
const JobsControllerRouter = new JobsController();

interface Page {
  page?: number;
}

jobsRouter.get('/', async (request, response) => {
  const { page = 1 }: Page = request.query;

  const cards = await JobsControllerRouter.index({
    page,
  });

  response.json(cards);
});

jobsRouter.post('/', async (request, response) => {
  try {
    const {
      title,
      description,
      experienceLevel,
      contract,
      email,
      techs,
      salary,
      location,
    } = request.body;
    const companyID = request.headers.authorization;

    const card = await JobsControllerRouter.create({
      title,
      description,
      companyID,
      experienceLevel,
      contract,
      email,
      techs,
      salary,
      location,
    });

    return response.json(card);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default jobsRouter;
