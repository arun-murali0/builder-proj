import { AppError } from '@/shared/utils/error';
import { HTTPCONFIG, CUSTOMCONFIG } from '@interface/config/httpConfig';

export class EmailAlreadyExists extends AppError {
  constructor(message = CUSTOMCONFIG.CONFLICT) {
    super(message, HTTPCONFIG.CONFLICT);
  }
}
