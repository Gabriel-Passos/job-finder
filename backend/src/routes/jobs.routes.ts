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

jobsRouter.get('/:id', JobsControllerRouter.show);

jobsRouter.post('/', async (request, response) => {
  try {
    const {
      title,
      salary,
      description,
      curriculumEmail,
      contactEmail,
      city,
      uf,
      expTypes,
      contractTypes,
    } = request.body;

    const company_id = request.headers.authorization;

    const job = await JobsControllerRouter.create({
      title,
      description,
      curriculumEmail,
      contactEmail,
      salary,
      city,
      uf,
      expTypes,
      contractTypes,
      company_id,
    });

    return response.json(job);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default jobsRouter;
