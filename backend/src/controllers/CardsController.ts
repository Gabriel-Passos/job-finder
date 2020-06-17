import knex from '../database/connection';

interface Card {
    title: string;
    description: string;
    userID: string | undefined;
}

interface Page {
    page: number;
}

class CardsController {
    public async index({ page }: Page): Promise<Card[]> {
        const cards = await knex('cards')
            .join('users', 'users.id', '=', 'cards.userID')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'cards.*',
                'users.name',
                'users.numberPhone',
                'users.email',
                'users.city',
            ]);

        return cards;
    }

    public async create({ title, description, userID }: Card): Promise<Card> {
        const card = {
            title,
            description,
            userID,
        };

        await knex('cards').insert(card);

        return card;
    }
}

export default CardsController;
