// This file is used to create the express app and export it to be used in other files.

import express from "express";
import cors from "cors";

import errorHandler from "./adapters/http/middleware/Errorhandler";
import { authRouter } from "./adapters/http/routers/authRouter";
import * as trpcExpress from "@trpc/server/adapters/express";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: authRouter,
    createContext: () => ({}),
  }),
);

// error errorHandler
app.use(errorHandler);
