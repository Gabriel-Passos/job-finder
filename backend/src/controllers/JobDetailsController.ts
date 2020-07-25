import { Request, Response } from 'express';
import knex from '../database/connection';

class JobDetailsController {
  async index(request: Request, response: Response) {
    const { id } = request.params;

    const jobs = await knex('jobDetails')
      .join('companies', 'companies.id', '=', 'jobDetails.companyID')
      .select(
        'jobDetails.id',
        'jobDetails.title',
        'jobDetails.description',
        'jobDetails.experienceLevel',
        'jobDetails.contract',
        'jobDetails.email',
        'jobDetails.techs',
        'jobDetails.salary',
        'jobDetails.location',
        'companies.name',
        'companies.email',
        'companies.companySize',
      )
      .where('jobDetails.id', id);

    if (!jobs) {
      return response.status(400).json({ message: 'Job not found' });
    }

    return response.json(jobs);
  }
}

export default JobDetailsController;
