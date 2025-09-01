// This file is used to create the express app and export it to be used in other files.

import express from "express";
import cors from "cors";

import errorHandler from "./adapters/middlewares/errorHandler";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// error errorHandler
app.use(errorHandler);
