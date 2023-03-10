// eslint-disable-next-line import/no-extraneous-dependencies
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest{
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) { }

  async execute({ name, description }: IRequest): Promise<void> {
    const specifcationAlreadyExist = await this.specificationsRepository.findByName(name);

    if (specifcationAlreadyExist) {
      throw new AppError('Specification already exists!');
    }

    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
