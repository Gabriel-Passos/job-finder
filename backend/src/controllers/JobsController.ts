import knex from '../database/connection';

interface Jobs {
  title: string;
  description: string;
  experienceLevel: string;
  contract: string;
  email: string;
  techs: [string];
  salary: string;
  location: string;

  companyID?: string;
}

interface Page {
  page: number;
}

class JobsController {
  public async index({ page }: Page): Promise<Jobs[]> {
    const jobs = await knex('jobDetails')
      .join('companies', 'companies.id', '=', 'jobDetails.companyID')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'jobDetails.*',
        'companies.name',
        'companies.cnpj',
        'companies.email',
        'companies.companySize',
      ]);

    return jobs;
  }

  public async create({
    title,
    description,
    companyID,
    experienceLevel,
    contract,
    email,
    techs,
    salary,
    location,
  }: Jobs): Promise<Jobs> {
    const jobDetail = {
      title,
      description,
      companyID,
      experienceLevel,
      contract,
      email,
      techs,
      salary,
      location,
    };

    await knex('jobDetails').insert(jobDetail);

    return jobDetail;
  }
}

export default JobsController;
