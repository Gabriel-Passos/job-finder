import { Router } from 'express';

import UserController from '../controllers/UsersController';

const usersRouter = Router();
const userController = new UserController();

usersRouter.get('/', async (request, response) => {
    const users = await userController.index();

    response.json(users);
});

usersRouter.post('/', async (request, response) => {
    try {
        const { name, numberPhone, email, city } = request.body;

        const user = await userController.create({
            name,
            numberPhone,
            email,
            city,
        });

        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default usersRouter;
