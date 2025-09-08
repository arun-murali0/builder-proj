import { BaseUseCase } from '../baseUseCase';
import { IMapper } from '../../ports/iuseCase';
import { IUserPort } from '../../ports/repositories/IuserRepo';
import { User } from '../../../domain/entities/user';
import { signInInputDTO, signInOutputDTO } from '../../DTO';

export class SignInUser extends BaseUseCase<User, signInInputDTO, signInOutputDTO> {
  constructor(
    private readonly userRepo: IUserPort,
    mapper: IMapper<User, signInInputDTO, signInOutputDTO>,
  ) {
    super(mapper);
  }

  async execute(input: signInInputDTO): Promise<signInOutputDTO> {
    const exists = await this.userRepo.findByEmail(input.email);
    if (!exists) throw new Error('Not found');
    const user = this.toEntity(input);
    return this.toDTO(user);
  }
}
