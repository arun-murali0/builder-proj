import { initTRPC } from '@trpc/server';
const t = initTRPC.create();

const router = t.router;
const middleware = t.middleware;
const procedure = t.procedure;

export { router, procedure, middleware };
