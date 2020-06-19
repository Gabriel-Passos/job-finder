import knex from '../database/connection';

interface Card {
    title: string;
    description: string;
    companyID?: string;
}

interface Page {
    page: number;
}

class CardsController {
    public async index({ page }: Page): Promise<Card[]> {
        const cards = await knex('cards')
            .join('companies', 'companies.id', '=', 'cards.companyID')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'cards.*',
                'companies.name',
                'companies.cnpj',
                'companies.numberPhone',
                'companies.email',
                'companies.city',
                'companies.uf',
            ]);

        return cards;
    }

    public async create({
        title,
        description,
        companyID,
    }: Card): Promise<Card> {
        const card = {
            title,
            description,
            companyID,
        };

        await knex('cards').insert(card);

        return card;
    }
}

export default CardsController;
