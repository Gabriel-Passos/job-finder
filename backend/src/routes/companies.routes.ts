import { Router } from 'express';

import CompaniesController from '../controllers/CompaniesController';

const companiesRouter = Router();
const companyController = new CompaniesController();

companiesRouter.get('/', async (request, response) => {
    const companies = await companyController.index();

    response.json(companies);
});

companiesRouter.post('/', async (request, response) => {
    try {
        const {
            name,
            cnpj,
            numberPhone,
            email,
            password,
            city,
            uf,
        } = request.body;

        const company = await companyController.create({
            name,
            cnpj,
            numberPhone,
            email,
            password,
            city,
            uf,
        });

        return response.json(company);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default companiesRouter;
