import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUsecase';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      username,
      email,
      password,
      driver_license,
    } = request.body;
    const createUseCase = container.resolve(CreateUserUseCase);

    await createUseCase.execute({
      name,
      username,
      email,
      password,
      driver_license,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
