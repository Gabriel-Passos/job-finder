import { uuid } from 'uuidv4';

import knex from '../database/connection';

interface User {
    name: string;
    numberPhone: string;
    email: string;
    city: string;
}

class UsersController {
    public async index(): Promise<User[]> {
        const users = await knex('users').select('*');

        return users;
    }

    public async create({
        name,
        numberPhone,
        email,
        city,
    }: User): Promise<User> {
        const user = {
            id: uuid(),
            name,
            numberPhone,
            email,
            city,
        };

        await knex('users').insert(user);

        return user;
    }
}

export default UsersController;
