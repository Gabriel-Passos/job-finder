import { uuid } from 'uuidv4';

import knex from '../database/connection';

interface Company {
    name: string;
    cnpj: string;
    numberPhone: string;
    email: string;
    password: string;
    city: string;
    uf: string;
}

class CompaniesController {
    public async index(): Promise<Company[]> {
        const companies = await knex('companies').select(
            'id',
            'name',
            'cnpj',
            'numberPhone',
            'email',
            'city',
            'uf',
        );

        return companies;
    }

    public async create({
        name,
        cnpj,
        numberPhone,
        email,
        password,
        city,
        uf,
    }: Company): Promise<Company> {
        const company = {
            id: uuid(),
            name,
            cnpj,
            numberPhone,
            email,
            password,
            city,
            uf,
        };

        await knex('companies').insert(company);

        return company;
    }
}

export default CompaniesController;
