import { Router } from 'express';

import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController';

const authencateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authencateRoutes.post('/sessions', authenticateUserController.handle);

export { authencateRoutes };
