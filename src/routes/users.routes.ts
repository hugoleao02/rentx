import { Router } from 'express';

import { CreateUserController } from '../modules/accounts/useCases/CreateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.use('/', createUserController.handle);

export { usersRoutes };
