import { initTRPC, TRPCError } from '@trpc/server';
import { AppError } from '../../../shared/utils/error';

// trcp error
export function errorFormatter({ error, shape }: { error: TRPCError; shape: any }) {
  console.log('trpc error', error);

  const cause = error.cause ?? error;
  if (cause instanceof AppError) {
    return {
      ...shape,
      data: {
        ...shape.data,
        message: cause.message,
        statusCode: cause.statusCode,
      },
    };
  }
}

const t = initTRPC.create({
  errorFormatter,
});

const router = t.router;
const middleware = t.middleware;
const procedure = t.procedure;

export { router, procedure, middleware };
