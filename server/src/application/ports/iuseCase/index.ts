// this is a generic interface for a controller in a web application.
// It defines a single method, execute, which takes an input of type TInput
// and returns a Promise that resolves to an output of type TOutput.
export interface IUseCase<TInput, TOutput> {
  execute(input: TInput): Promise<TOutput>;
}

export interface IMapper<TEntity, TInputDTO, TOutputDTO> {
  toEntity(dto: TInputDTO): TEntity;
  toDTO(entity: TEntity): TOutputDTO;
}
