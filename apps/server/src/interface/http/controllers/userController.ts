import { BaseController } from './baseController';
import {
  signInInputDTO,
  signInOutputDTO,
  signUpInputDTO,
  signUpOutputDTO,
} from '../../../application/DTO';
import { SignUpUser, SignInUser } from '../../../application/use-cases';

export class SignUpController extends BaseController<signUpInputDTO, signUpOutputDTO, SignUpUser> {
  constructor(signUpUseCase: SignUpUser) {
    super(signUpUseCase);
  }

  async create(input: signUpInputDTO): Promise<signUpOutputDTO> {
    const data = this.execute(input);
    return { ...data, message: 'user created successful' };
  }
}

export class SignInController extends BaseController<signInInputDTO, signInOutputDTO, SignInUser> {
  constructor(signInUseCase: SignInUser) {
    super(signInUseCase);
  }

  async create(input: signInInputDTO): Promise<signInOutputDTO> {
    const data = this.execute(input);
    return { ...data, message: 'login successful' };
  }
}
