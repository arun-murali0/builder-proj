import { BaseUseCase } from '../baseUseCase';
import { IMapper } from '../../ports/iuseCase';
import { IUserPort } from '../../ports/repositories/IuserRepo';
import { User } from '../../../domain/entities/user';
import { signUpInputDTO, signUpOutputDTO } from '../../DTO';
import { UserNotFound } from '../../exceptions';

export class SignUpUser extends BaseUseCase<User, signUpInputDTO, signUpOutputDTO> {
  constructor(
    private readonly userRepo: IUserPort,
    mapper: IMapper<User, signUpInputDTO, signUpOutputDTO>,
  ) {
    super(mapper);
  }

  async execute(input: signUpInputDTO): Promise<signUpOutputDTO> {
    const exists = await this.userRepo.findByEmail(input.email);
    if (!exists) throw new UserNotFound();

    const user = this.toEntity(input);
    const saved = await this.userRepo.create(user);
    return this.toDTO(saved);
  }
}
