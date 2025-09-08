import { IUseCase, IMapper } from '../ports/iuseCase';

export abstract class BaseUseCase<TEntity, TInputDTO, TOutputDTO>
  implements IUseCase<TInputDTO, TOutputDTO>
{
  constructor(protected readonly mapper: IMapper<TEntity, TInputDTO, TOutputDTO>) {}

  protected toEntity(dto: TInputDTO): TEntity {
    return this.mapper.toEntity(dto);
  }

  protected toDTO(entity: TEntity): TOutputDTO {
    return this.mapper.toDTO(entity);
  }

  abstract execute(input: TInputDTO): Promise<TOutputDTO>;
}
