import { IUseCase } from '@/application/ports/iuseCase';

const signInOutputSchema = {};

export class SignInUser implements IUseCase<SignInUser> {
  constructor() {}

  async execute(data: any): Promise<SignInUser> {
    return data;
  }
}
