import { Router } from 'express';

import CardController from '../controllers/CardsController';

const cardsRouter = Router();
const cardController = new CardController();

interface Page {
    page?: number;
}

cardsRouter.get('/', async (request, response) => {
    const { page = 1 }: Page = request.query;

    const cards = await cardController.index({
        page,
    });

    response.json(cards);
});

cardsRouter.post('/', async (request, response) => {
    try {
        const { title, description } = request.body;
        const userID = request.headers.authorization;

        const card = await cardController.create({
            title,
            description,
            userID,
        });

        return response.json(card);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default cardsRouter;
