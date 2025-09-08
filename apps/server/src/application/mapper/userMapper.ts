import { IMapper } from '../ports/iuseCase';
import { User } from '../../domain/entities/user';
import { signUpInputDTO, signUpOutputDTO } from '../DTO';

export class UserMapper implements IMapper<User, signUpInputDTO, signUpOutputDTO> {
  toEntity(dto: signUpInputDTO): User {
    return new User({
      firstName: dto.firstName,
      lastName: dto.lastName,
      email: dto.email,
      password: dto.password,
      mobileNumber: dto.mobileNumber,
    });
  }
  toDTO(entity: User): signUpOutputDTO {
    return {
      id: entity.getId(),
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.getEmail(),
      mobileNumber: entity.mobileNum,
      role: entity.role,
      createdAt: entity.createdAt || undefined,
      updatedAt: entity.updatedAt || undefined,
    };
  }
}
