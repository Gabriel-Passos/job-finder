import { uuid } from 'uuidv4';

import knex from '../database/connection';

export interface Company {
  companyName: string;
  email: string;
  password: string;
  companySize: string;
}

class CompaniesController {
  public async index(): Promise<Company[]> {
    const companies = await knex('companies').select('*');

    return companies;
  }

  public async create({
    companyName,
    email,
    password,
    companySize,
  }: Company): Promise<Company> {
    const company = {
      id: uuid(),
      companyName,
      email,
      password,
      companySize,
    };

    await knex('companies').insert(company);

    return company;
  }
}

export default CompaniesController;
