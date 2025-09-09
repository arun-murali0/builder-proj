import { IUseCase } from "@/application/ports/iuseCase";

export abstract class BaseController<
  TInput,
  TOutput,
  TUseCase extends IUseCase<TInput, TOutput> = IUseCase<TInput, TOutput>,
> {
  constructor(protected useCase: TUseCase) {}

  async execute(input: TInput): Promise<TOutput> {
    try {
      return await this.useCase.execute(input);
    } catch (err) {
      if (err instanceof Error) throw err;
      throw new Error("Unknown error occurred");
    }
  }
}
