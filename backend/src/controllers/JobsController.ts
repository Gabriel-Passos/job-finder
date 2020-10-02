import { Request, Response } from 'express';
import knex from '../database/connection';

interface Jobs {
  title: string;
  description: string;
  curriculumEmail: string;
  contactEmail: string;
  salary: number;
  city: string;
  uf: string;
  expTypes: number;
  contractTypes: number;

  company_id?: string;
}

interface Page {
  page: number;
}

class JobsController {
  public async index({ page }: Page): Promise<Jobs[]> {
    const jobs = await knex('jobs')
      .join('companies', 'companies.id', '=', 'jobs.company_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'jobs.*',
        'companies.companyName',
        'companies.email',
        'companies.companySize',
      ]);

    return jobs;
  }

  public async show(request: Request, response: Response) {
    const { id } = request.params;

    const jobs = await knex('jobDetails')
      .join('companies', 'companies.id', '=', 'jobDetails.companyID')
      .select(
        'jobDetails.id',
        'jobDetails.title',
        'jobDetails.description',
        'jobDetails.experienceLevel',
        'jobDetails.contract',
        'jobDetails.curriculumEmail',
        'jobDetails.contactEmail',
        'jobDetails.salary',
        'jobDetails.city',
        'jobDetails.uf',
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

  public async create({
    title,
    description,
    curriculumEmail,
    contactEmail,
    salary,
    city,
    uf,
    expTypes,
    contractTypes,
  }: Jobs): Promise<Jobs> {
    const job = {
      title,
      description,
      curriculumEmail,
      contactEmail,
      salary,
      city,
      uf,
      expTypes,
      contractTypes,
    };

    await knex('jobs').insert(job);

    return job;
  }
}

export default JobsController;
