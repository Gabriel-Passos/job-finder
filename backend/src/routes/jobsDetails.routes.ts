import { Router } from 'express';

import JobDetailsController from '../controllers/JobsDetailsController';

const jobsDetailsRouter = Router();
const jobDetailController = new JobDetailsController();

interface Page {
    page?: number;
}

jobsDetailsRouter.get('/', async (request, response) => {
    const { page = 1 }: Page = request.query;

    const cards = await jobDetailController.index({
        page,
    });

    response.json(cards);
});

jobsDetailsRouter.post('/', async (request, response) => {
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

        const card = await jobDetailController.create({
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

export default jobsDetailsRouter;
