import { uuid } from 'uuidv4';

import knex from '../database/connection';

interface Company {
    name: string;
    cnpj: string;
    email: string;
    password: string;
    companySize: string;
}

class CompaniesController {
    public async index(): Promise<Company[]> {
        const companies = await knex('companies').select(
            'id',
            'name',
            'cnpj',
            'email',
            'companySize',
        );

        return companies;
    }

    public async create({
        name,
        cnpj,
        email,
        password,
        companySize,
    }: Company): Promise<Company> {
        const company = {
            id: uuid(),
            name,
            cnpj,
            email,
            password,
            companySize,
        };

        await knex('companies').insert(company);

        return company;
    }
}

export default CompaniesController;
