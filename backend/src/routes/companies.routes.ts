import { Router } from 'express';

import CompaniesController from '../controllers/CompaniesController';

const companiesRouter = Router();
const companyController = new CompaniesController();

companiesRouter.get('/', async (request, response) => {
  const companies = await companyController.index();

  response.json(companies);
});

companiesRouter.post('/', async (request, response) => {
  const { companyName, email, password, companySize } = request.body;

  const company = await companyController.create({
    companyName,
    email,
    password,
    companySize,
  });

  delete company.password;

  return response.json(company);
});

export default companiesRouter;
