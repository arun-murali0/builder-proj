import Express from 'express';
import { initRouter } from './interface/http/routers';

import { createExpressMiddleware } from '@trpc/server/adapters/express';

export const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.use(
  '/api',
  createExpressMiddleware({
    router: initRouter,
  }),
);
