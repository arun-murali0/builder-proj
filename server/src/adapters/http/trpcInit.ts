import { initTRPC } from "@trpc/server";
// import superjson from "superjson";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
